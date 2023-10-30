
const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../Middleware/Verify");
const secretKey = "abcdefg";

router.get("/",(req,res)=>{
    res.send("User router is working")
});

router.post("/signup", async(req,res)=>{
try {
    const salt = await bcrypt.genSalt(10);
    const password = await  bcrypt.hash(req.body.password,salt);
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password,
    });
    const data = await user.save();
     
    const token = jwt.sign({id:data._id}, secretKey);

    res.json({msg:"Signed Up Successfully"});

} catch (error) {
    res.json({msg:error.message})
}
});

router.post("/login", async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(user){
        const result = await bcrypt.compare(req.body.password,user.password);
        if(result){
            const token = jwt.sign({id:user._id},"secretKey");
            res.json(token);
        }else{
            return res.json({msg:"Wrong password"});
        }
        }else{
            return res.json({msg:"no user found"});
        }
    } catch (error) {
        return res.json({msg:error.message});
    }
});

router.get("/data",verifyToken,async(req,res)=>{
    try {
        const userId = req.userId;
       const user = await User.findById(userId);
       res.json(user);
    } catch (error) {
        return res.json({msg:error.message});
    }
});

module.exports= router;
