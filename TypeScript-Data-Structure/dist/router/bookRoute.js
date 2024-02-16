"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("../models/book"));
const bookRoute = async (req, res) => {
    try {
        const book = req.body;
        const { name, author } = book;
        const newBook = await book_1.default.create({
            name,
            author,
        });
        res.status(200).json({
            status: 201,
            massage: "Book create successfully",
            newBook: newBook
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            status: 500,
            message: error.message.toString()
        });
    }
};
exports.default = bookRoute;
