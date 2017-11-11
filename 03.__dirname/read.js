var fs=require("fs");
var path=require("path");


console.log(__dirname);
// fs.readFile(__dirname+'/data.txt','utf8',function(err,data){
//     if(err){
//         throw err
//     }
//     console.log(data);
// })

fs.readFile(path.join(__dirname,'./data.txt'),'utf8',function(err,data){
    if(err){
        throw err
    }
    console.log(data);
})