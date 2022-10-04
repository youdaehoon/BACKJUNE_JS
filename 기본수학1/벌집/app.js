let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = +fs.readFileSync(file, { encoding: "utf-8" });
//1,7,19,37,61 계차수열
let left = 1;
let right = 7;
let n = 1;
function sol(num){
    if(num===1){
        return 1
    }
    while(left>=num||num>right){
        left+=6*n;
        n++
        right+=6*n;
       
    }
return n+1
}

let ans=sol(input)
console.log(ans);
