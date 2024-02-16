"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginRoute = async (req, res) => {
    try {
        const user = req.body;
        const { email, password } = user;
        const isUserExit = await user_1.default.findOne({
            email: email
        });
        if (!isUserExit) {
            return res.status(404).json({
                status: 404,
                success: false,
                massage: "User not found"
            });
        }
        const idPasswordMatched = isUserExit.password === password;
        if (!idPasswordMatched) {
            return res.status(400).json({
                status: 400,
                success: false,
                massage: "Wrong password"
            });
        }
        const token = jsonwebtoken_1.default.sign({ _id: isUserExit?._id, email: isUserExit?.email }, "YOUR_SECRET", {
            expiresIn: "1d",
        });
        res.status(200).json({
            status: 200,
            success: true,
            message: "login success",
            token: token,
        });
    }
    catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message.toString(),
        });
    }
};
exports.default = loginRoute;
