// 文件操作系统fs模块 方法与返回值
const fs = require("fs")
// 读取文件模块
fs.readFile('./index.txt','utf-8',(err, data)=>{
    console.log(data)
})
// 数据流
const data = fs.readFileSync('./index.txt','utf8')
const stream = fs.createReadStream('./index.txt', 'utf8')
stream.on('data',(data)=>{
    console.log(data,'文件流')
})
//

// 写入文件模块 文件符？Node是否存在 写入的话是全部覆盖 而不是加上去
fs.writeFile('./test.txt',"hello node",'utf8', err=>{
    console.log('写入试试看')
    if(err) throw err
})

fs.writeFileSync('./test.txt', 'Hello Nodejs')

const ws = fs.createWriteStream('./test.txt','utf8')
// 
ws.write('文件流')
ws.end()

// 删除文件/文件夹 都有同步与异步
fs.unlink('./test.txt',err=>{
    console.log('删除文件')
    if(err) throw err
})