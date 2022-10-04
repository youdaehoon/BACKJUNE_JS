let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = fs.readFileSync(file, { encoding: "utf-8" }).split("\n");
let len = input.shift();
let ans=[]
for (let i = 0; i < len; i++) {
  let testCase = input[i].split(" ").map(Number);
  let [height, width, n] = testCase;
  let roomFloor, roomNum;
  roomNum = 0;
  roomFloor = (n % height) + "";
  if(roomFloor=="0")roomFloor=height
  roomNum = (n - roomFloor) / height + 1 + "";
  if (roomNum.length == 1) roomNum = "0" + roomNum;
  ans.push((roomFloor + roomNum).trim())

}
console.log(ans.join("\n"))