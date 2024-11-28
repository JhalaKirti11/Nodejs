import http from "http";
let ser = http.createServer((req, res)=>{
    res.write("hello world!");
    res.end();
});

ser.listen(4000, ()=>{
    console.log("Server created!");
});
