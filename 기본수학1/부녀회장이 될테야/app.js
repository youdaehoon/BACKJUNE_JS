let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = fs.readFileSync(file, { encoding: "utf-8" }).split("\n");

//3층 1     5    15     35      70       126    210
//2층 1     4    10     20      35       56      84
//1층 1     3    6      10      15       21      28
//0층 1     2    3      4       5        6        7

let len = +input.shift();
let kArr = [];
let nArr = [];
input.map((v, i) => {
  if (i % 2 == 0) {
    kArr.push(+v);
  } else {
    nArr.push(+v);
  }
});

let ans=[]
//[[],[],[...k층 n호 사람].....]
function sol(i) {
  let apartArr = [];
  let temp = [];
  temp = new Array(14).fill(0).map((v, i) => (v = i + 1));
  apartArr.push(temp);
  for (let k = 0; k < kArr[i]; k++) {
    for (let n = 1; n < nArr[i]; n++) {
      temp[0] = 1;
      temp[n] = temp[n - 1] + temp[n];
    }
  }
  return(temp[nArr[i] - 1]);
}

kArr.map((v, i) => ans.push(sol(i)));
let sol2=ans.join("\n")
console.log(sol2)
