import mongoose from "mongoose"

const BookSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        author: {
            type: String,
            unique: true,
            require: true,
        }
    },
    {
        timestamps: true
    }
)
const Book = mongoose.model("Book", BookSchema)
export default Book;