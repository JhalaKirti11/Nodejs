import fs from "fs";

console.log("At the start.....");
fs.writeFile("./data.txt", "Node js is develop by Ryan Dahl. It is not a programming language. It provide javascript runtime environment.", (err) => {
    err ? console.log(err) : console.log("Operation success....");
});
console.log("At the end....");
