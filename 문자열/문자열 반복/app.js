let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = fs.readFileSync(file, { encoding: "utf-8" }).split("\n");
let caseCount = Number(input[0]);
let result = '';

for (let i = 1; i <= caseCount; i++) {
  let count = Number(input[i].split(' ')[0]);  
  let cases = input[i].split(' ')[1]; 
  for (let j = 0; j < cases.length; j++) {
    for (let k = 0; k < count; k++) {
      result += cases[j];
    }
  }
  result += '\n';
}

console.log(result);