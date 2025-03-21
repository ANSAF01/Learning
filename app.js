const express = require("express");
const app = express();

app.use("/test",(req,res)=>{
    res.send("<b>Hello guysss<b>")
});

app.use("/hello",(req,res)=>{
    res.send("You are on home page")
});



app.listen(7777,()=>{
    console.log("server is running on 7777")
});