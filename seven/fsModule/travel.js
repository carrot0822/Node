
var fs = require('fs')
var path = require('path')
function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);

        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}
console.log('dirname',__dirname)
travel(__dirname,function(pathname){
    console.log(pathname)
})
// 获取当前路径
function getNowFile(){
    //let result = process.cwd()
    //let result = __dirname
    let result = path('./')
    return path
}
// 检测当前路径是否是文件夹 是否是文件