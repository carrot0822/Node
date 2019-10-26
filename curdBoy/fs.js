/*
fs.stat 检测是文件还是目录
fs.mkdir 创建目录
fs.readdir 读取目录
fs.rmdir 删除目录

fs.writeFile 创建写入文件
fs.appendFile 追加文件
fs.readFile 读取文件
fs.rename 重命名 怎么还能剪切的
fs.unlink 删除文件
*/
let fs = require('fs');
console.log('几个回事')
fs.stat('./index.js', (error, stats) => {
    if (error) {
        console.log(error);
        return false
    } else {
        console.log(stats);

        console.log(`文件：${stats.isFile()}`)

        console.log(`目录:${stats.isDirectory()}`);

        return false;
    }
})
/** mkdir 创建目录
 * 接收参数
 * path - 即将创建的文件目录 这个目录看来是当前目录
 * mode - 目录权限（读写权限） 默认权限 0777？？？
 * callback 回调函数
 * 封装的函数如何确保传入的参数 获取参数 解析
 */
/* fs.mkdir('css',(err)=>{
    if(err){
        console.log(err);
        return false;
    } else {
        console.log('创建目录成功')
    }
    
}) */
/**
 * rmdir 删除目录
 * 
 */
/* fs.rmdir('css',(err) => {
    if(err){
        console.log(err);
        return false;
    } else {
        console.log('删除目录成功')
    }
}) */

/**
 * 创建 writeFile
 * filename (String) 文件名称
 * data (String | Buffer) 将要写入的内容，可以是字符串或者 buffer 数据。
 * · encoding (String) 可选。默认 'utf-8'，当 data 是 buffer 时，该值应该为 ignored。
 * · mode (Number) 文件读写权限，默认 438。
 * · flag (String) 默认值 'w'。
 * callback { Function } 回调，传递一个异常参数 err。
 * 
 * 这里的写入 是清空原文件所有数据 再进行添加 存在即覆盖 不存在再创建
 */

fs.writeFile('indexs.js', "写入文件是已有的吗", (err) => {
    if (err) {
        console.log(err)
        return false
    } else {
        console.log('写入成功')
    }
})
/**
 * 清除文件
 *  fs.unlink('indexs.js', (err)=>{
    if(err){
        console.log(err)
        return false
    } else {
        console.log('清除成功')
    }
})
 */

 /**
  * 追加文件内容 appendFile
  */
 fs.appendFile('index.js', '这段文本是添加到后面的',(err) =>{
     if(err){
         console.log(err)
         return false
     }else{
         console.log('追加成功')
     }
 })
 /**
  * 读取文件 写入顺序嘛。。。
  */
 fs.readFile('index.js', (err,data) =>{
     if(err){
         console.log(err)
     } else{
         console.log('读取文件成功');
         console.log(data )
     }
 })

 fs.readdir('node_modules', (err, data) => {
     if(err){
         console.log(err);
         return false;
     } else {
         console.log("读取目录成功");
         console.log(data);
     }
 })
// 这个重命名机制是
/*  fs.rename('index.js','test.js', (err) => {
     if(err){
         console.log(err);
         return false;
     } else {
         console.log('重命名成功')
     }
 }) */

 fs.rename('test.js','node_modules/test.js',(err)=>{
     if(err){
         console.log(err);
         return false;
     } else {
         console.log('剪切成功')
     }
 })