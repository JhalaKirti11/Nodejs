import fs from "fs";

let rs = fs.createReadStream("file1.txt");
rs.on('data', (chunks) => {
    console.log(chunks.toString());
});
rs.on('end', () => {
    console.log("read successfully!");
})
