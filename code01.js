import express from "express";
const app = express();
app.get('/' ,(req, res, next)=>{
    res.write("res send");
    res.end();
});
app.get('/home',(req,res,next)=>{
    res.write("home page");
    res.end();
})
app.listen(3000, ()=>{
    console.log("Server started!");
})
