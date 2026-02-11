import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN
}));

app.use(express.json({limit:"16kb"}))
// used for converting in json formate

app.use(express.urlencoded({extended:true,limit:"16kb"}))
// used for url Encoded data understand 

app.use(express.static("public"))
//koi bhi public data ko store krne ke liye

app.use(cookieParser())

export default app;