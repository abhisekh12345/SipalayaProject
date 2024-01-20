import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
const port = process.env.PORT || 5000
connectDB()

const app = express()

app.get('/',(req,res) => {
    res.send("I am here")
})


app.listen(port,()=>{
    console.log(`Server is listen in Port ${port}`)
})

