var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'node'
})

connection.connect();
// 新增sql语句及新增的字段信息
var delSql = "DELETE FROM user where id = 2";

// 连接sql并实施语句

connection.query(delSql,function(err,res){
    if(err){
        console.log("删除错误");
        console.log(err);
        return;
    } else {
        console.log("删除成功");
        console.log(res)
    }
})

connection.end()