var http = require('http');
var url = require('url')
var formidable = require("formidable");
/**
 * 请求处理程序->请求路由->服务器 请求处理程序返回的内容传递给http服务器 再返回给浏览器端
 */
/*
function start(router,handle){
    http.createServer((req,res)=>{
        var pathName = url.parse(req.url).pathname;
        console.log('请求来自'+pathName + '接收')
        console.log('req对象'+ req)

        var content = router(handle,pathName)
        console.log('接口返回值',content)
        res.writeHead(200,{"Content-Type":"text/plain"});//返回http状态和http头的内容
        res.write(content);
        res.end();
    }).listen(8888)
    
    console.log('8888端口服务中')
}
*/
/**
 * 处理服务器接收的请求
 * @param {function} route 
 * @param {function} handle 
 */
/* function start(route,handle){
    http.createServer((req,res)=>{
        var pathname = url.parse(req.url).pathname;
        console.log("request for" +pathname + 'received');
        var postData = "";
        req.setEncoding("utf8"); // 设置接收数据编码格式为UTF-8
        // 监听数据事件然后赋值给postData变量
        req.addListener("data",(postDataChunk)=>{
            postData += postDataChunk;
            console.log("正在接收提交数据" + postDataChunk + ".");
        })
        req.addListener("end",()=>{
            route(handle,pathname,res,postData);
        })
        
    }).listen(8888);
} */
function start(route, handle) {
    function onRequest(request, response) {
      var pathname = url.parse(request.url).pathname;
      console.log("Request for " + pathname + " received.");
      route(handle, pathname, response, request);
    }
  
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
  }
console.log("8888服务器启动中")
exports.start = start
