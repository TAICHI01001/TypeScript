import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import registerRoute from "./router/registerRoute"
import loginRoute from "./router/loginRoute"
import bookRoute from "./router/bookRoute"
const server = express();

//+ middleware
dotenv.config();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT;
const URL1 = process.env.MONGODB_URL;
const URL2 = process.env.POSTGRES_URL;

server.post("/register", registerRoute)

server.post("/login", loginRoute)

server.post("/book", bookRoute)

server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await mongoose.connect(URL1 as string)
    console.log(`Connect to database MongoDB`);
  } catch (error) {
    console.error(`⚠️  Error to connect database MongoDB`);
    
  }
})


// import { Pool } from "pg"


// const pool = new Pool();

// server.post("/create",(req,res)=>{
//   const name = "test3";
//   console.log(`${name}`);
//   pool.query(`CREATE SCHEMA IF NOT EXISTS ${name}`);
// })

// const pool = new Pool({
//     host: 'john.db.elephantsql.com',
//     user: 'nzjgmmdq',
//     database:"nzjgmmdq",
//     password:"7iYPOzr8OSwBu3rGd-vZfgbXY82Er1fl",
//     max: 3,
//     idleTimeoutMillis: 30000,
//     connectionTimeoutMillis: 2000,
//   })

  // server.get("/users",async (req,res)=>{
  //     let data = await pool.query(
  //       "SELECT * FROM test3.users"
  //     );

  //     // console.log(`${data.rows}`);

  //     let rc = 0;
  //     if (data.rowCount != null){
  //       rc = data.rowCount;
  //     }

  //     for (let i = 0; i < rc; i++){
  //       console.log(data.rows[i].id,data.rows[i].username, data.rows[i].password);
  //     }
      
  //     res.status(200).json(data.rows)
  // })
  
 
 

// createConnection({
//     type: 'postgres',
//     url: URL2,
//     synchronize: true, // ตั้งเป็น true หรือ false ตามที่ต้องการ
//     logging: true,
//     entities: [/* ระบุ entity classes ของคุณที่ใช้ในการทำงานกับข้อมูล */],
//   })
//     .then(connection => {
//       console.log('Connected to PostgreSQL database');
//       // ต่อไปนี้คุณสามารถทำสิ่งอื่น ๆ ที่เกี่ยวข้องกับการใช้งานกับฐานข้อมูล
//     })
//     .catch(error => {
//       console.error('Error connecting to PostgreSQL database:', error);
//     });
  