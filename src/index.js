// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
dotenv.config({path:"./env"})
import connectDB from "./db/index.js";



connectDB()





/*
import express from "express"
const app=express();
// ifi 
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error: ",error);
            throw error
        })
        app.listen(process.env.MONGODB_URL,()=>{
            console.log(`App is listening on port ${process.env.MONGODB_URL}`)
        })
    }catch(error){
        console.log("Error : " ,error)
        throw error
    }
})()
*/