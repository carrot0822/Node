// 传入一个app实例
var data = [{item:'写node'},{item:"学数据库"},{item:'学网络'}]
var bodyParser = require('body-parser')
var urllendParser = bodyParser.urlencoded({extended:false})
module.exports = function(app){
    app.get('/todo',function(req,res){
        res.render('todo',{todos: data})
    })
    app.post('/todo',urllendParser,function(req,res){
        console.log(req.body)

        data.push(req.body)
        res.json(data)
    })
    app.delete('/todo/:item',function(req,res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g,'-') !== req.params.item
        })
        res.json(data)
    })
}