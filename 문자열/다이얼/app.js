
// //**array만들고 작업하기 */
// let fs=require("fs")
// let file=process.platform=="linux"?0:__dirname+"/input.txt"
// let input=fs.readFileSync(file,{encoding:"utf-8"}).trim().split("")

// let arr=[];
// let num=2;
// function addNum(arr,rep){
//     for(let i=0;i<rep;i++){
//         arr.push(num)
//     }
//     ++num
// }
// for(let j=0;j<5;j++){
//     addNum(arr,3)
// }
// addNum(arr,4)
// addNum(arr,3)
// addNum(arr,4)


// // console.log(arr)
// let unicodeArr=input.map((v)=>v.charCodeAt(0)-65)
// // console.log(unicodeArr)

// let ans=unicodeArr.reduce((acc,cur)=>acc+=arr[cur],unicodeArr.length)
// console.log(ans)

// //******************************************************************* */

//**object 이용하기 */

let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf-8"}).trim().split("")
let ans=0
const dials={
    2:"ABC",
    3:"DEF",
    4:"GHI",
    5:"JKL",
    6:"MNO",
    7:"PQRS",
    8:"TUV",
    9:"WXYZ",
}
for(dial in dials){
    for(let i=0;i<input.length;i++){
if(dials[dial].includes(input[i])){
ans+=+dial
}
    }
   
}
ans+=input.length
console.log(ans)



//*******************************************************************

