"use server"
import mongoose from 'mongoose';
const connection :{isConnected?: number} = {  }; 
 export async function dbConnect() {
console.log('connecting to database');
    if (connection.isConnected) {
        console.log('using existing database connection');
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URL!,{
        dbName: process.env.DB_NAME,
        bufferCommands: false,
    });
console.log('database connected');
    connection.isConnected = db.connections[0].readyState;
 
}

