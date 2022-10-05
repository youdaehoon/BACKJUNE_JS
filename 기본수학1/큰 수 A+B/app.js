let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = fs.readFileSync(file, { encoding: "utf-8" }).split(" ")

let A=BigInt(input[0])
let B=BigInt(input[0])
console.log(A+B)