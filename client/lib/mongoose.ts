"use server"
import mongoose from 'mongoose';
const connection :{isConnected?: number} = {  }; 
 export async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    console.log(`MongoDB URL: ${process.env.MONGO_URL}`);
    const db = await mongoose.connect(process.env.MONGO_URL!);
    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
}

