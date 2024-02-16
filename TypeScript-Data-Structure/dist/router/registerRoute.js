"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const registerRoute = async (req, res) => {
    try {
        const user = req.body;
        const { name, email, password } = user;
        const isEmailAllReadyExist = await user_1.default.findOne({
            email: email,
        });
        if (isEmailAllReadyExist) {
            return res.status(400).json({
                status: 400,
                message: "Email all ready in use",
            });
            ;
        }
        const newUser = await user_1.default.create({
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
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            status: 400,
            message: error.message.toString()
        });
    }
};
exports.default = registerRoute;
