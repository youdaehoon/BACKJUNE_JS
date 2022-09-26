let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n");
let currenTime = input[0].split(" ").map(Number);
let [hour, min] = currenTime;
let cookTime = +input[1];

function sol(hour, min, cookTime) {
  let tempH = parseInt(cookTime / 60);
  let tempM = cookTime - tempH * 60;
  hour = hour + tempH;
  min = min + tempM;
  if (min >= 60) {
    min = min - 60;
    ++hour
    
  }
  while(hour>=24){
    hour=hour-24
    
}
  
  console.log(hour,min);
}
sol(hour, min, cookTime);
