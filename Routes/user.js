const router = require("express").Router();

const verifyToken = require("../Middleware/Auth");
const Leads = require("../Models/Leads");
const jwt = require("jsonwebtoken");



router.get("/",async(req,res)=>{
    res.send("user route is working");
});
router.get("/all", verifyToken,async(req,res)=>{
  try {
      const data = await Leads.find();
      // res.json({users:data});
      res.json(data);
  } catch (error) {
      res.json({msg:error.message});
  }
});

router.post("/add",verifyToken, async(req,res)=>{
try {
    const data = await Leads.create(req.body);
    res.json({msg:"User added Successfully"});

} catch (error) {
return res.json({msg:error.message});
    }
});

router.get("/userid/:id",verifyToken,async(req,res)=>{
  try {
    const data= await Leads.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.json({msg:error.message})
  }
});

router.put("/update/:id",verifyToken, async(req,res)=>{
  try {
    const data = await Leads.findByIdAndUpdate(req.params.id,req.body);
    res.json({msg:"User Updated Successfully"});
  } catch (error) {
    return res.json({msg:error.message});
  }
});


router.delete("/delete/:id",verifyToken, async(req,res)=>{
    try {
        const data = await Leads.findByIdAndDelete(req.params.id);
        res.json({msg:"User Deleted  Successfully"});
    } catch (error) {
        return res.json({msg:error.message});
    } 
});
 module.exports=router;