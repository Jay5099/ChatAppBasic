import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected TO MongoDB")
    } catch (error) {
        console.log("Error connecting to MongoDB:\n",error.message)
    }
}


export default connectToMongoDB;