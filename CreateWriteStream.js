import fs from "fs";
let ws = fs.createWriteStream('file1.txt');

ws.write("this is your file kirti!");
ws.end();
console.log("file written!");
