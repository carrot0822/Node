var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:"test"
})

connection.connect();

const http = require("http");

const url = require("url");

const qs = require('querystring');

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Origin','Content-Type');
    res.setHeader('Content-Type', 'application/json');

    if(req.method == "POST"){
        console.log('\n【posT】');
        // 获取前端发来的路由地址
        let pathName = req.url;
        console.log("\n接口为",pathName)
        // 接收发送过来的参数
        let tempResult = "";

        // 数据接入
        req.addListener("data",(chunk)=>{
            tempResult += chunk
            console.log(chunk,'来看看接收的数据')
        })

        // 数据接收完成
        req.addListener("end",()=>{
            var result = JSON.stringify(qs.parse(tempResult));
            console.log("\n参数为");
            console.log(result);
            if(pathName == "/sendMessage"){
                console.log("\n【API-提交留言信息】");
            } else if(pathName == "/login"){
                console.log("\n【API-登陆】");
            } else if(pathName == "/register"){
                console.log("\n【API - 注册】")
            }
        })

    } else if(req.method == "GET"){
        console.log("\n【get形式】");
        let pathName = url.parse(req.url).pathname;
        console.log("\n接口为" + pathName);
        if(pathName == "/getMessage"){
            console.log("\n【API-获取留言信息】")
        } else if(pathName == "/"){
            res.writeHead(200,{
                "Content-Type":"text/html;charset=UTF-8"
            });
            res.write('<h1 style="text-align:center">jsliang 前端有限公司服务已开启！</h1><h2 style="text-align:center">详情可见：<a href="https://github.com/LiangJunrong/document-library/blob/master/other-library/Node/NodeBase.md" target="_blank">Node 基础</a></h2>')
            res.end();
        }
    }
}).listen(8888); // 监听端口
console.log("正在检讨")
function getNowFormatDate(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var strDate = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if(month>=1 && month <+9){
        month = "0" + month
    }
    if(strDate >=0&& strDate <=9){
        strDate = "0" + strDate
    }

    var currentDate = year + "-" + month + "-" + strDate + hour + ":" + minute + ":" +second
    return currentDate
}