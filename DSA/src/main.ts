import { Users } from "./mock/userData"
import express, { Request, Response } from "express"

const server = express()
const PORT = 3000

async function main() {
    server.get("/", (req: Request, res: Response) => {
        res.status(200).json({
            Users
        }).end(() => {
            console.log(Users)
        }).end(() => {
            console.table(Users)
        })
    })
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })
}
main()


// console.table(...Users)



















// import { Array } from "./class/Array"
// import { LinkList } from "./class/LinkList";

// let myArray = new Array()
// let myLinkList = new LinkList()
// let myArray1: number[] = [112, 1121];

// myArray1 = myArray.addData(myArray1, 3)
// console.log(myArray.getData(myArray1));
// myArray1 = myArray.updateData(myArray1, 0, 9)
// console.log(myArray.getData(myArray1));
// myArray1 = myArray.deleteData(myArray1,1)
// console.log(myArray.getData(myArray1));

// // myArray = addData(myArray, 2);
// // myArray = addData(myArray, 1);
// // console.log(getData(myArray));

// // myArray = updateData(myArray, 0, 8);
// // console.log(getData(myArray));

// // myArray = deleteData(myArray, 1);
// // console.log(getData(myArray));



