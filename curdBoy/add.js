var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'node'
})

connection.connect();

let addSql = "INSERT INTO user(id,name,age) VALUES(0,?,?)";
let addSqlParams = ["jswang","23"]

connection.query(addSql,addSqlParams,(err, res)=>{
    if(err){
        console.log('新增错误');
        console.log(err);
    } else {
        console.log("新增成功");
        console.log(res);
    }
})

connection.end();