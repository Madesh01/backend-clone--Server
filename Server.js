const express = require("express");
const connectDB = require("./Cofige/db");

const app = express();
const useRouter = require("./Routes/Users");
const userRouter = require("./Routes/user");
const cors = require("cors");


connectDB();
app.use(express.json()); 
app.use(cors());
app.use("/users",useRouter);
app.use("/leads",userRouter);
app.get("/",(req,res)=>{
    res.send("Api is Working")
});
 
app.listen(process.env.PORT || 4000,()=>{ 
    console.log("Server is up and Running") 
});























