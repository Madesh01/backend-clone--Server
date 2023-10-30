const jwt = require("jsonwebtoken");

function verifyToken(req,res,next){
const token =req.headers["authorization"];
console.log(token);
if(token){
   jwt.verify(token,"secretKey",(err,decoded)=>{
    if(err){
        res.json({msg:"Access is Dennied"});
    }else{
        req.userId=decoded.id;
        next();
    }
   });
}else{
    return res.json({msg:"Invalid Token"});
}
}
module.exports=verifyToken;