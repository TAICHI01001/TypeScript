"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BookSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        unique: true,
        require: true,
    }
}, {
    timestamps: true
});
const Book = mongoose_1.default.model("Book", BookSchema);
exports.default = Book;
