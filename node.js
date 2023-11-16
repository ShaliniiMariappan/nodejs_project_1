const express = require("express");
const app=express();
const path=require("path");

app.get("/veg",(req,res)=>{
    res.sendFile(path.join(__dirname,"veg.html"));
})
app.get("/nonveg",(req,res)=>{
    res.sendFile(path.join(__dirname,"nonveg.html"));
})
app.get("/vegan",(req,res)=>{
    res.sendFile(path.join(__dirname,"vegan.html"));
})


app.listen(1622   , ()=>{
    console.log("Server is running");
})