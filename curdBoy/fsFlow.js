// fs 流 steam
const fs = require('fs')
// 流的方式读取文件
let fileReadStream = fs.createReadStream('index.js');
// 读取次数
let count = 0;

//保存数据
let str= ''
// 开始读取
fileReadStream.on('data',(chunk) => {
    console.log(`${++count} 接收到：${chunk.length}字节吗`);
    str += chunk;
})

// 读取完成 看来是异步函数
fileReadStream.on('end',()=>{
    console.log('结束');
    console.log(count);
    console.log(str);
})

// 读取失败

fileReadStream.on('error',(err) =>{
    console.log(err);
})

// 流的存入
let data = '存入数据';
// 创建一个可以写入的流 写入到文件index.js中
let writeStream = fs.createWriteStream('index.js');

writeStream.write(data,'utf8');
// 开始写入
writeStream.end();
// 写入完成
writeStream.on('finish',() => {
    console.log('写入完成');
    
}) 