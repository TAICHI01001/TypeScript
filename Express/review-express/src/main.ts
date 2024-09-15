import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const server = express();
const port = 8088;
const prisma = new PrismaClient();

server.use(express.json());

server.get('/', (req: Request, res: Response) => {
    res.json({
        msg: "Server running success",
        status: "ok",
    })
});

server.get('/users', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
})
server.post('/users', async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    })
    res.json(newUser);
})

server.listen(port, () => {
    console.log(`Server running http://localhost/${port}`);
});


// const Ebooks = [
//     {
//         name: "Ebook 1",
//         author: "Author 1",
//     },
//     {
//         name: "Ebook 2",
//         author: "Author 2",
//     },
//     {
//         name: "Ebook 3",
//         author: "Author 3",
//     },
// ]