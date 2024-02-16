import express, { Application, Request, Response } from "express";

const app: Application = express();

const PORT = 8000;

app.get("/", (req: Request, res: Response) =>
  res.send("Express + TypeScript Server")
);
const greeting = (name: string) => {
  console.log(`Hello ${name} from TypeScript.`);
};

greeting("TaiChi");
app.listen(PORT, function() {
  console.log(`Server is running at http://localhost:${PORT}`);
});

