import express from "express";
import dotenv from "dotenv"
import mongoose, { mongo } from "mongoose";
import cors from "cors"
import userRoutes from "./routes/user.js"
import partRoutes from "./routes/parts.js"
import ai from "./routes/ai.js";

const app = express()
dotenv.config()
const port = process.env.Port || 5000;

app.use(express.json())
app.use(cors())


app.use("/auth", userRoutes)
app.use("/components", partRoutes)
app.use("/ai", ai)

app.get("/", (req, res)=> {
    res.send("Hello world")
})

app.listen(port, ()=> {
    console.log("App running on port " + port)
})

mongoose.set("strictQuery", false)
mongoose.connect(process.env.mongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("connected to mongoDB"))