import mongoose from "mongoose";


const connectDB = async () =>{
    try {
         const conn = await mongoose.connect(process.env.MONGO_URL)
         console.log(`Mongoose Connected : ${conn.connection.host}`)
    } catch (error) {
         console.log(`Error message : ${error.message}`)
         process.exit(1)
    }
}

export default connectDB