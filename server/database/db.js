import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try{ 
        console.log("entereeed");
        console.log(process.env.MONGODB_URL);
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected");
    }
    catch(e){
        console.log(e)
    }}

export default connectDB;