// path模块 处理文件路径和目录路径 不同操作系统稍有区别
const path = require('path')

// 获取路径目录名
const index = path.dirname('/path/path.js')
console.log(index,'路径目录名')

// 获取路径的扩展名
const extname = path.extname('../path/path.js')
console.log(extname,'文件扩展名')

// 检测是否是绝对路径
 const isAb = path.isAbsolute('/path/path.js')
 console.log(isAb,'是否绝对路径')

 // 拼接路径片段
 const join = path.join('/path','example','./index.js')
 console.log(join,'拼接路径片段')

 // 将路径片段序列解析为绝对路径

 console.log(path.resolve('/foo/bar','./baz'),'常规解析')
 console.log('/foo/bar','/tem/file','两者都是目录')
 console.log(path.resolve('wwwroot','static_files/png','../gif/image.gif'),'没有绝对路径') // 直接解析到根目录了

 // 规范化路径
 const normal = path.normalize('/path////ex/indeex.js')
 console.log(normal,'规范化路径')

 // 解析路径
 const parse = path.parse('/path/path.js')
 console.log(parse,'解析路径')

 // 序列化路径
 const format = path.format({
     root:'/',
     dir:'/path/example',
     base:'index.js',
     ext:'.js',
     name:'index'
 })
 console.log(format,'序列化路径')

 // 获取from到to的相对路径
 const relative = path.relative('/path/example/index.js','/path')
 console.log(relative,'相对路径获取')
