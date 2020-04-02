/**
 * process是全局对象 可以获取相关的执行事件。。我们的node命令检测是否是由这个模块涉及编写的
 */
// 外部输入 node --harmony index.js --version
console.log(process.execArgv) // 打印出 --harmony这部分的数组
console.log(process.argv); 
/**
 * [
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\Code\\Node\\todolist\\test\\process\\index.js',
  '--version'
]
第一个数组是node所在的位置
第二个是该执行文件的地址
第三个是执行时设置的参数列表
 */

 console.log(process.version,'版本号')
 console.log(process.pid,'当前进程ID')
 console.log(process.cwd(),'获取当前工作目录')

 // 操作 终止当前进程 这是监听 exit 说明内部有emit exit



 // nextTick() 放到了下一个执行进程 比定时器更优秀
 console.log('start')
 process.nextTick(()=>{
     console.log('下一个函数回调')
 })

 console.log('end')


// 终止进程后续的不会执行
/*  process.on('exit',(code)=>{
    console.log('进程退出码是:%d',code) 
 })
 // 不传参会返回一个参数0
 process.exit() */

 // 标准流对象
 process.stdin.setEncoding('utf8')
 process.stdin.on('readable',()=>{
     let chunk
     while ((chunk = process.stdin.read()) !== null){
         console.log(chunk,'读取数据')
         if(chunk === '/n'){
             process.stdin.emit('end')
             return
         }
         process.stdout.write(`收到数据:${chunk}`)
     }
 })

 process.stdin.on('end',()=>{
     process.stdout.write('结束监听')
 })