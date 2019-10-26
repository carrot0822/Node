var http = require("http");
/**
 * req获取url信息
 * res浏览器返回响应信息
 */
http.createServer(function(req, res){
    res.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
    });
    // 往页面打印值
    res.write('<h1 style="text-align:center">Hello NodeJS</h1>')
    console.log('正在监听')
    // 结束响应
}).listen(3000); // 监听的端口