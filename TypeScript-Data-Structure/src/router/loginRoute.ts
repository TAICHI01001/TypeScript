
import User from "../models/user"
import { Request, Response } from "express";
import jwt from "jsonwebtoken"

const loginRoute = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const { email, password } = user

        const isUserExit = await User.findOne({
            email: email
        })

        if (!isUserExit) {
            return res.status(404).json({
                status: 404,
                success: false,
                massage: "User not found"
            })
        }

        const idPasswordMatched = isUserExit.password === password;

        if (!idPasswordMatched) {
            return res.status(400).json({
                status: 400,
                success: false,
                massage: "Wrong password"
            })
        }
        const token = jwt.sign(
            { _id: isUserExit?._id, email: isUserExit?.email },
            "YOUR_SECRET",
            {
                expiresIn: "1d",
            }
        );
        res.status(200).json({
            status: 200,
            success: true,
            message: "login success",
            token: token,
        });
    } catch (error: any) {
        res.status(400).json({
            status: 400,
            message: error.message.toString(),
        });
    }
}
export default loginRoute;