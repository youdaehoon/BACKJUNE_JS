
// //**split&&join */
// let fs = require("fs");
// let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
// let input = fs.readFileSync(file, { encoding: "utf-8" }).trim();
// let croAlpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

// let ans
// for (let i = 0; i < croAlpha.length; i++) {

//     input=input.split(croAlpha[i]).join("O")

// }
// ans=input.length
// console.log(ans);


//**정규식 */
//** 정규식 보는 사이트 https://regexper.com/#%2Fc%5C%3D%7Cc%5C-%7Cdz%5C%3D%7Cd%5C-%7Clj%7Cnj%7Cs%5C%3D%7Cz%5C%3D%2Fg */

let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = fs.readFileSync(file, { encoding: "utf-8" }).trim();

let regExp=/c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g
// "/":시작과 끝 "\"특수기호앞
let ans=input.replace(regExp," ")
console.log(ans.length)
