import express, { Request, Response } from 'express'
import { Pool } from "pg"

const server = express()
const PORT = 3000
const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres1'
})

server.get("/", async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
})
server.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);

})