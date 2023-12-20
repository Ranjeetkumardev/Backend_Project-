import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express();

app.use((cors({
    origin: process.env.CORS_ORIGIN  ,
    Credential: true
}))) // configure the cors

app.use(express.json({ limit:"16kb"})) // data from form
app.use(express.urlencoded({ extended: true, limit: "16bk" })) // data comming form URL
app.use(express.static("Public")) // for uploding/comming file or folder
app.use(cookieParser()) // reading cookies only by browser bo read kar sakta h bo remove kar sakta h




export {app} 