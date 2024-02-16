import express from "express"
import { Request, Response } from "express"

const app = express()
const PORT = 3000

interface LoginUse {
    username: string
    password: string
}

interface LoginRequest<Params, Body> extends Request<Params, Body> { }

app.use(express.json())

app.get("/register", async (req: LoginRequest<LoginUse, LoginUse>, res: Response) => {
    const {username,password} = req.body
    const newUser = {
        username,
        password
    }
    res.json({
        message:"test successfully"
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port${PORT}`);

})