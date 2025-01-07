import fs from "fs";

fs.readFile("./data.txt", (err, data) => {
    let content = "";
    let count = 0;
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
        content = (data.toString()).toLowerCase();
    }
    let l = content.length;
    console.log("Length of the file : " + l);
    let input = content.split(" ");
    console.log(input);
    let n = input.length;
    for (let i = 0; i < n; i++) {
        let char = input[i].charAt(0);
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
            console.log(input[i]);
        }
    }
    console.log("vowel characters : " + count);
});
