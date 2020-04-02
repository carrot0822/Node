var fs = require('fs')

function copy(src, dst){
    fs.writeFileSync(dst,fs.readFileSync(src))
}

function main(argv){
    copy(argv[0],argv[1])
}

// process 全局变量 process.argv命令参数
// argv[0]NodeJS执行程序的绝对路径
// argv[1] 固定等于主模块的绝对路径
// 拷贝从2开始
// 这里的使用 是需要跟 命令行参数的 涉及到process模块
// 举例 如果我 输入 node copyFiles.js 地址1 地址2
/* 那么打印的结果为[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\Code\\Node\\seven\\test\\copyFile.js',
  '地址1',
  '地址2',
]
这样拷贝文件的命令才能走 这是命令行程序 跟应用不一样
*/
console.log(process.argv)
//main(process.argv.slice(2))

function copyBig(src, dst){
  fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}

function mainCopy(argv){
  copyBig(argv[0],argv[1])
}