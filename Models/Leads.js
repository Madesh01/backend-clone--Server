const mongoose = require("mongoose");

const leadsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
   mobileNo:{
    type:Number,
    required:true,
   },
   saleInfo:{
    type:String,
    required:true,
   },
},
{timestamps:true}
);
const Leads = mongoose.model("leads-data",leadsSchema);
module.exports=Leads;
