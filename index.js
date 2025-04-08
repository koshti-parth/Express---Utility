const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();
const PORT = 8003;

//Set Template Engine
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))


app.get("/",(req,res)=>{
    return res.render("home.ejs");
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`);
})