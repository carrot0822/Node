var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
var app = express()
// 引用模板引擎
app.set('view engine', 'ejs')
// 创建文件夹
var createFolder = function(folder){
    try{
        fs.accessSync(folder)
    }catch(e){
        fs.mkdirSync(folder)
    }
}
var uploadFolder = './upload'
createFolder(uploadFolder)
// 文件上传中间件
var multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    console.dir(req,'文件名字')
      cb(null, uploadFolder)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  
  var upload = multer({ storage: storage })
// 数据处理中间件
var jsonParser = bodyParser.json()
var urllendParser = bodyParser.urlencoded({extended:false})
// 路由规则
app.get('/',function(req,res){
    console.dir(req.query)
    res.send('this is the homepage')
})
// 模板引擎
app.get('/form/:name',function(req,res){
    /* var form = fs.readFileSync('./form.html',{encoding: "utf8"})
    res.send(form) */
   // res.sendFile(__dirname + '/form.html')
   var person = req.params.name
   console.log(person,'请求应该是进来了的')
   res.render('form',{person:person})
})

app.post('/upload',upload.single('logo'),function(req,res){
    res.send({'ret_code':0})
})
/* app.get('/form',function(req,res){
    console.log(__dirname,'目录')
    res.sendFile(__dirname + 'form.html')
}) */



app.post('/',function(req,res){

})
app.get('/profile/:id',function(req,res){
    console.dir(req.params)
    res.send("请求的id"+ req.params.name)
})
app.get('/ab?cd',function(req,res){
    res.send('ab?cd')
})
app.listen(3000)