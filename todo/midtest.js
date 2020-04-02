var express = require('express')
var app = express()

var indexRouter = require('./routes/index')
var userRouter = require('./routes/user')
app.use('/',indexRouter)
app.use('/user',userRouter)

app.use(function(req,res,next){
    console.log('第一个中间件')
    next()
    console.log('第一个中间件后面')
})

app.use(function(req,res,next){
    console.log('第二个中间件')
    next()
})



app.listen(4000)
console.log('正在监听端口4000')