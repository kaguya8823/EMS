import mongoose from "mongoose";

const connectToDatabase = async () => {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        throw new Error("MONGODB_URI is not set. Add your MongoDB Atlas connection string to server/.env");
    }

    try {
        await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 15000,
            retryWrites: true,
            w: "majority",
        });

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }
};

export default connectToDatabase;