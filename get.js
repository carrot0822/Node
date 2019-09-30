var http = require('http');
// 模拟SQL读取出来的数据
var items = []
// 异步过程
http.createServer((req,res) =>{
    // 设置跨域域名
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 设置header类型
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // 跨域允许的请求方法
    res.setHeader('Content-Type', 'application/json')

    // 判断请求
    switch(req.method){
        //post请求时 浏览器会发一次optionss请求 如果请求通过， 则继续发送正式的post请求
        case 'OPTIONS':
            res.statusCode = 200;
            res.end();
            break;
        case 'GET':
            let data = JSON.stringify(items);
            res.write(data);
            res.end();
            break;
        case 'POST':
            let item = '';
            // 读取每次发送的数据 on函数?
            req.on('data', (chunk) =>{
                item += chunk
            })

            req.on('end',()=>{
                item = JSON.parse(item); // ???
                items.push(item.item)
                // 将数据返回到客户端
                let data = JSON.stringify(items);
                res.write(data);
                res.end();
            })
            break;
    }
}).listen(3000)

console.log('服务器启动')