import { Request,Response } from "express"
import Book  from "../models/book";
const bookRoute = async (req:Request,res:Response)=>{
    try {
        const book = req.body;
        const {name,author} = book;

        const newBook = await Book.create({
            name,
            author,
        });
        res.status(200).json({
            status:201,
            massage:"Book create successfully",
            newBook:newBook
        })
    } catch (error:any) {
        console.error(error);
        res.status(400).json({
            status:500,
            message:error.message.toString()
        })
        
    }
}
export default bookRoute