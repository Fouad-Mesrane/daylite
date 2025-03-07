import mongoose from "mongoose";
import "dotenv/config";
const connectDB = async () => {
    try {
     await mongoose.connect(`${process.env.MONGO_URI}/dayliteDB`);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log(error);
       
    }
}

export default connectDB