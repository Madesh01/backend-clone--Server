
const jwt = require("jsonwebtoken");


function verifyToken(req,res,next){
  const token = req.headers["authorization"];
  if(token){
    jwt.verify(token,"secretKey",(err, decoded)=>{
      if(err){
        return res.json({msg:"Access is Deniedddd"});
      }else{
        req.userId = decoded.id;
        next();
      }
    })
  }else{
    return res.json({msg:"Token is Missing"});
  }
};

module.exports=verifyToken;