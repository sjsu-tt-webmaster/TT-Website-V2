import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    
    try {
        const db = await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL);
        
        connection.isConnected = db.connections[0].readyState;
        console.log("MongoDB connected:", connection.isConnected);
    } catch(error) {
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to the database");
    }
    
}

export default dbConnect;