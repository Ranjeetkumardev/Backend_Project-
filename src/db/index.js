import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MONGODB Connected !! DB HOST : ${(await connectionInstance).connection.host}`) // last code tell theat which database you'r connected
        
    } catch (error) {
        console.log(`MONGODB connection error`, error);
        process.exit(1)
    }
}

export default connectDB