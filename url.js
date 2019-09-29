var url = require("url");
var http = require("http");

console.log(url);

/**
 * Console：
 { 
   Url: [Function: Url],
    parse: [Function: urlParse], // 获取地址信息
    resolve: [Function: urlResolve], // 追加或者替换地址 参数第一个为原网址/query  第二个为替换参数 console.log(url.resolve("http://www.baidu.com/jsliang", "梁峻荣"))
    resolveObject: [Function: urlResolveObject],
    format: [Function: urlFormat], // 逆向 parse，根据地址信息获取原 url 信息 参数为 parse出来的对象
    URL: [Function: URL],
    URLSearchParams: [Function: URLSearchParams],
    domainToASCII: [Function: domainToASCII],
    domainToUnicode: [Function: domainToUnicode] 
  }
 */


// http模块创建服务
/**
 * req获取url信息
 * res浏览器返回响应信息
 */
http.createServer(function(req, res){
    if(req.url !="/favicon.ico"){
        /**
         * url模块的parse方法 
         * 第一个参数为地址
         * 第二个参数为true 就把get传值转换成对象
         */
        var result = url.parse(req.url, true);
        console.log(result)
        
        res.writeHead(200,{
            "Content-Type":"text/html;charset=UTF-8"
        })
        res.write('<h1 style="text-align:center>测试吧</h1>');
        res.end();
        console.log('正在监听3000')
    }
}).listen(3000)
