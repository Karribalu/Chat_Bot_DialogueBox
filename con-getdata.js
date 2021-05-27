var express = require("express");
var app=express();
var port=3000;
var mongoose = require("mongoose");
var Users=require("./schemas/user");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/mydb",{useUnifiedTopology:true,useNewUrlParser:true});




app.listen(port,()=>{
console.log("Server listening on port "+port);
});
