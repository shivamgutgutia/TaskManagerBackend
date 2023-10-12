const express = require("express")
const app=express()
const tasks = require("./routers/tasks")
const connectDB= require("./db/connect")
const notFound = require("./middleware/not-found")
const errorHandler= require("./middleware/error-handler")
require('dotenv').config()
app.use(express.json())
app.use("/api/v1/tasks",tasks)
app.use(notFound)
app.use(errorHandler)


const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(5000,console.log("Server is listening on port 5000..."))
    }catch(error){
        console.log(error)
    }
} 

start()
