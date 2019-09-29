var http = require("http");
var tools1 = require('toolMultiply')
var tools3 = require('ws-module')
http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-type":"text/html;charset=UTF-8"
    });
    
    res.write('<h1 style="text-align:center">Hello  NodeJS</h1>');
    
    console.log(tools3.add(2,3,4))
    console.log(tools3.multiply(2,3,4))
}).listen(3000)

/**
 * 模块包的导入导出机制 
 * 1.不放到node包内 在平常的文件夹 文件模块 不放工具类
 * 2.放在node包内 与放在node包下的命名包
 * 3.查找机制 平时目录查找 查找不到 去node包查找 node包后在细小的包内再查找 查找不到才会报错
 */

 /**
  * 模块记得export啊
 * 通过 package.json 来引用文件
 * 1. 通过在 wb-module 中 npm init --yes 来生成 package.json 文件
 * 2. package.json 文件中告诉了程序入口文件为 ："main": "tools.js",
 * 3. Node 通过 require 查找 jsliang-module，发现它有个 package.json
 * 4. Node 执行 tools.js 文件
 */
