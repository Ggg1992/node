// var http=require('http');
// http.createServer(function(req,res){
// console.log(req.url);
// res.setHeader("content-type",'text/plain;charset=utf8');
// if(req.url==='/index'||req.url==='/'){
//     res.end("这是首页");
// }
// else if(req.url==='/login'){
//     res.end('这是login登录页')
// }else if(req.url==='/register'){
//     res.end('这是 register 注册页')
// }else{
//     res.end('404 no found page')
// }


// }).listen(8088,function(){
//     console.log('服务器开启,http://localhost:8088')
// })


  var http=require('http');
  http.createServer(function(req,res){
        console.log(req.url)
        res.setHeader('content-type','text/plain;charset=utf8');
        if(req.url==='/index'){
             res.end("这是首页");
        }else if(req.url==='/login'){
            res.end('这是登陆页');
        }else{
            res.end("404 no found");
        }


  }).listen(8989,function(){
      console.log('http://locahost:8989')
  })