let user = require('./User');
let xx = require('path');
console.log(`userName:${user.userName} I say ${user.sayHello()} ${xx.toLocaleString()}`);

let http = require('http');
let url = require('url');
let util = require('util');
let fs = require('fs');
let server = http.createServer((req,res)=>{
    // res.statusCode = 200;
    // res.setHeader("Content-Type","text/plain; charset=utf-8");
    var pathname = url.parse(req.url).pathname;
    fs.readFile(pathname.substring(1),function (err,data) {
        // console.log(pathname.substring(1));
        // console.log(data.toString());
        if(err){
            res.writeHead(404,{
                'Content-Type':'text/html'
            });
        }else{
            res.writeHead(200,{
                'Content-Type':'text/html'
            });
            res.write(data.toString());
        }
        res.end();
    })


});

server.listen(3000,'127.0.0.1',(req,res)=>{
    console.log("服务器已启动，请在浏览器输入'http：//localhost:3000/ 来访问'");
});