//1차**************************************************
// function selfNumber(n) {
//     let sum = n;
//     while (n > 0) {
//       sum += n % 10;
//       n = parseInt(n / 10);
//     }
//     return sum;
//   }
//   let arr = new Array(10000).fill(0).map((v, i) => (v = i + 1));
//   let n = 1;
//   let temp;
//   while (n < 10000) {
//     temp = selfNumber(n);
//     arr = arr.filter((v)=>v!==temp)
//     n++;
//   }
//   arr.map(v=>console.log(v))
//****************************************** */


//2차**************************************************
// function selfNumber(n) {
//     let sum = n;
//     while (n > 0) {
//       sum += n % 10;
//       n = parseInt(n / 10);
//     }
//     return sum;
//   }
//   let arr = new Array(10000).fill(0).map((v, i) => (v = i + 1));
//   let n = 1;
//   let temp;
//   while (n < 10000) {
//     temp = selfNumber(n);
//   if(arr.includes(temp))arr.splice(arr.indexOf(temp),1)
//     n++;
//   }
//   let answer=""
//   arr.map(v=>answer+=v+"\n")
//   console.log(answer.trim())
//****************************************** */
//최종 176ms
function selfNumber(n) {
  let sum = n;
  while (n > 0) {
    sum += n % 10;
    n = parseInt(n / 10);
  }
  return sum;
}
let arr = new Array(10001).fill(true)
arr[0]=false
let n = 1;
let temp;
while (n < 10000) {
  temp = selfNumber(n);
  arr[temp]=false;
  n++;
}
let answer=""
arr.map((v,i)=>{if(arr[i])answer+=i+"\n"})
console.log(answer.trim())

