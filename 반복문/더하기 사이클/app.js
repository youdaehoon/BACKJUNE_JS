let input = +require("fs").readFileSync(__dirname + "/input.txt", {
  encoding: "utf-8",
});

let temp = -1;
let count = 0;
let ten = 0;
let one = 0;
while (input !== temp) {
  if (temp == -1) temp = input;
  ten = parseInt(temp / 10);
  one = temp % 10;
  temp = one * 10 + ((one + ten) % 10);
  count++;
}
console.log(count);
