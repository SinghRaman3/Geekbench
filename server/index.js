import express from "express";
import dotenv from "dotenv"
import mongoose, { mongo } from "mongoose";
import cors from "cors"
import userRoutes from "./routes/user.js"
import partRoutes from "./routes/parts.js"


const app = express()
dotenv.config()
const port = 5000

app.use(express.json())
app.use(cors())


app.use("/auth", userRoutes)
app.use("/components", partRoutes)

app.get("/", (req, res)=> {
    res.send("Hello world")
})

app.listen(port, ()=> {
    console.log("App running on port " + port)
})

mongoose.connect(process.env.mongoDb).then(console.log("connected to mongoDB"))