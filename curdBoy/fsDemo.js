


/**
 * 1. fs.stat 检测是文件还是目录
 * 2. fs.mkdir 创建目录
 * 3. fs.writeFile 创建写入文件
 * 4. fs.appendFile 追加文件
 * 5. fs.readFile 读取文件
 * 6. fs.readdir 读取目录
 * 7. fs.rename 重命名
 * 8. fs.rmdir 删除目录
 * 9. fs.unlink 删除文件
 */
let fs = require('fs');
/* 
 fs.stat('upload',(err,stats) => {
     if(err){
         console.log(err)
         fs.mkdir('upload', (err)=>{
             if(err){
                 console.log(err);
                 return false;
             }else{
                 console.log('创建目录成功')
             }
         })
     } else {
         console.log(stats)
        console.log(stats.isDirectory())
        console.log("这样没有判定目录或者多个相同文件会怎么样")
     }
 }) */

 // 读取目录所有文件
// 这个递归写的有问题
 fs.readdir('node_modules', (err, files) => {
     if(err){
         console.log(err);
         return false;
     } else {
         console.log(files)
         
         let filesArr = []
         (function getFile(i) {
      
            // 循环结束
            if(i == files.length) {
              // 打印出所有目录
              console.log("目录：");
              console.log(filesArr);
              return false;
            }
      
            // 判断目录是文件还是文件夹
            fs.stat('node_modules/' + files[i], (error, stats) => {
      
              if(stats.isDirectory()) {
                filesArr.push(files[i]);
              }
      
              // 递归调用
              getFile(i+1);
              
            })
          })(0)
     }
 })