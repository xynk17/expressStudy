let user = require('./User');
let xx = require('path');
console.log(`userName:${user.userName} I say ${user.sayHello()} ${xx.toLocaleString()}`);

let http = require('http');
let url = require('url');
let util = require('util');
let server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain; charset=utf-8");
    //res.end("Hello Baby");
console.log(req.url);
    console.log(url.parse(req.url));
    res.end(util.inspect(url.parse(req.url)));

});

server.listen(3000,'127.0.0.1',(req,res)=>{
    console.log("服务器已启动，请在浏览器输入'http：//localhost:3000/ 来访问'");
});