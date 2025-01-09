import mongoose from "mongoose";
import dotevn from "dotenv";
dotevn.config();

const connectDb = mongoose.connect(process.env.DATABASE_URL)
 .then(()=>{
    console.log("Database connected successfully");
 })

 .catch((err)=>{
    console.log("Database connection error",err);
 });

export default connectDb;