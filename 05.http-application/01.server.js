// var http=require("http");
// var server=http.createServer();
// server.on('request',function(req,res){

//     console.log('有人请求了');
//     res.setHeader("content-type",'text/html;charset=utf8');
//     res.write("你好啊");
//     res.end();
// });
// server.listen(8090,function(){
//     console.log('http://localhost:8090')
// })


var http=require('http');
http.createServer(function(req,res){
    console.log("有人请求了");
    res.setHeader('content-type','text/html;charset=utf8');
    res.end('<h1>小兵成长记</h1>')
}).listen(8090,function(){
    console.log('服务器开启,http://localhost:8090');
})