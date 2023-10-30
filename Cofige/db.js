
const mongoose = require("mongoose");

const url = 
"mongodb+srv://chinni:chinni@entribd.l3vlynb.mongodb.net/lead-management-data?retryWrites=true&w=majority";

const connectDB = async()=>{
    const con = await mongoose.connect(url);
    console.log(`mongodb is connected : ${con.connection.host}`);
};

module.exports= connectDB;  