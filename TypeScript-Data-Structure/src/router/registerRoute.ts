
import User from "../models/user"
import { Request,Response } from "express";

const registerRoute = async (req: Request, res: Response) => {
    try {
        
        const user = req.body;
        const { name, email, password } = user

        const isEmailAllReadyExist = await User.findOne({
            email: email,
        });
        if (isEmailAllReadyExist) {
            return res.status(400).json({
                status: 400,
                message: "Email all ready in use",
            });
            ;
        }
        const newUser = await User.create({
            name,
            email,
            password,
        });
        res.status(200).json({
            status: 201,
            success: true,
            message: " User created Successfully",
            user: newUser,
        });
    } catch (error: any) {
        console.log(error);
        res.status(400).json({
            status: 400,
            message: error.message.toString()
        });
    }
}
export default registerRoute;
