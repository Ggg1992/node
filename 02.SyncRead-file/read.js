var fs=require('fs');
console.log("老宫去老王家取快递了")
try{
   var data= fs.readFileSync("./data.txt",'utf8');
    console.log(data);
}catch(err){
    console.log("出错了",err)
}console.log("老宫回来了")