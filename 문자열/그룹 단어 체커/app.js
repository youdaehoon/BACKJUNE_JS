let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf-8"}).split("\n")
let len=input.shift();
let alpha
let newStr
for(let i=0;i<input.length;i++){
    newStr=input[i].trim()
    while(newStr.length>0){
        alpha=newStr.substring(0,1)
        newStr=newStr.substring(1)
  if(newStr.includes(alpha)&&alpha!==newStr[0]){
    len--
    break;
  }

    }

}
console.log(len)