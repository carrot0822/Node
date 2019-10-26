let http = require("http");
let fs = require("fs");
let url = require("url");
let path = require("path")

http.createServer((req,res)=>{
    // 获取响应
    let pathName = url.parse(req.url).pathname
    // 默认加载路径
    if(pathName == "/"){
        pathName = "index.html"
    }
    console.log(pathName)
    // 获取文件后缀名
    let extName = path.extname(pathName);
    // 过滤/favicon.icon
    if(pathName !="favicon.ico"){
        fs.readFile("./webServe/"+ pathName, (err, data) => {
            // 如果不存在这个文件
            console.log(err,data)
            if(err){
                console.log("404 Not Found!");
                fs.readFile('./webServe/404.html',(errNot,dataNot)=>{
                    if(errNot){
                        console.log(errNot)
                    } else {
                        res.writeHead(200, {
                            "Content-Type":"text/html; charset='utf-8'"
                        });
                        // 读取写入文件
                        res.write(dataNot);
                        res.end()
                    }
                })
                return
            } else{
                let ext = getExt(extName)

                res.writeHead(200, {
                    "Content-Type": ext + "; charset='utf-8'"
                })

                res.write(data);
                res.end();
            }
        })
    }

    getExt = (extName) =>{
        let data = fs.readFileSync('./08_ext.json');
        let ext = JSON.parse(data.toString());

        return ext[extName];
        /* switch(extName){
            case '.html': return 'text/html';
            case '.css': return 'text/css';
            case './js': return 'text/js';
            default: return 'text/html';
        } */
    }
}).listen(8080)

/* http.createServer((req,res) =>{
    // 获取响应路径
    let pathName = req.url;

    // 默认加载路径
    if(pathName == "/"){
        pathName = "index.html";
    }

    // 过滤 /favicon.ico 图标请求
    if(pathName != "favicon.ico"){
        fs.readFile("./webServe/" + pathName,(err, data)=>{
            if(err){
                // 不存在就进入404
                console.log('404 not found');
                fs.readFile('./webServe/404.html',(errorNotFound,dataNotFound)=>{
                    if(errorNotFound){
                        console.log(errorNotFound)
                    } else {
                        res.writeHead(200, {
                            "Content-Type":"text/html; charset='utf-8'"
                        });
                        // 读取写入文件
                        console.log(dataNotFound)
                        res.write(dataNotFound);
                        // 结束响应
                        res.end();
                    }
                })
                return
            } else {
                // 返回这个文件
                // 设置请求头
                res.writeHead(200, {
                    "Content-Type":"text/html;charset='utf-8"
                });

                res.write(data);

                res.end();
            }
        })
    }
    console.log('正在监听8080')
}).listen(8080) */