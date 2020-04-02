var http = require('http')
// 创建 server多选 添加事件监听器
var server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('hellojs')
})

// 
var server2 = new http.Server()
server2.on('request',(req,res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('hellojs')
})