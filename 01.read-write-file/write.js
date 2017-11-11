// var fs=require("fs");
// var msg='鸭王 的双十一快递'
// fs.writeFile('./data.txt',msg,function(err){
//     if(err){
//         throw err
//     }
//     console.log('写入成功')
// })
// console.log("回来了")


var fs=require('fs');
var msg='小兵成长记';
fs.writeFile('data.txt',msg,function(err){
    if(err){
        throw err
    }
    console.log('成功')
})
console.log('你快回来')
