var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'node'
})
// 开始链接
connection.connect();

// 修改
let updataSql = "UPDATE user SET name =?,age= ? WHERE Id = ?" ;
let updateSqlParams = ["Liang", "23", 1];

connection.query(updataSql, updateSqlParams, (err, res)=>{
    if(err){
        console.log("修改错误");
        console.log(err)
    } else {
        console.log("修改成功");
        console.log(res)
    }
})

connection.end()
