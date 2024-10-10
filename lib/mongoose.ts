"use server"
import mongoose from 'mongoose';
const connection :{isConnected?: number} = {  }; 
 export async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URL!,{
        dbName: process.env.DB_NAME,
        bufferCommands: false,
    });
    connection.isConnected = db.connections[0].readyState;
 
}

