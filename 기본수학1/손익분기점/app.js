let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = fs.readFileSync(file, { encoding: "utf-8" }).split(" ");
//A+Bx=Cx
//x=A/(C-B)
//x가 정수이면 +1 아니면 반올림
//x가 음수이면 -1return
let [A, B, C] = input.map(Number);

function sol(A, B, C) {
    if(C==B){
        return -1
    }
  let temp = A / (C - B);
  //음수 체크
  if (temp < 0) {
    return -1;
  }
  if (temp % 1 == 0) {
    return temp + 1;
  } else {
    return temp+1-temp % 1;
  }
}

// 정수 체크
let ans=sol(A,B,C)
console.log(ans);
