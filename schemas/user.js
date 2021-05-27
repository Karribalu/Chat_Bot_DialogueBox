const mongoose = require("mongoose")
var VentilatorsSchema = new mongoose.Schema({
    UID: Number,
    Phno:Number,
    Uname:String,   
  
   });
   module.exports=mongoose.model("user",VentilatorsSchema)