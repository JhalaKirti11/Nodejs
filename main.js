import express from "express";
const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views","./views");

app.get("/", (req, res,next)=>{
    res.render("home");
});

app.get("/home",(req, res, next)=>{
    res.render("home");
});

app.get("/about", (req,res,next)=>{
    res.render("about");
})

app.get("/contact", (req,res, next)=>{
    res.render("contact");
});

app.listen(2000, ()=>{
    console.log("server started!!");
})