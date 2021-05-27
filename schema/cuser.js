const mongoose = require("mongoose")
var CuserSchema = new mongoose.Schema({
    cid:String,
    name:Number
  
   });
   module.exports=mongoose.model("current_user",CuserSchema)