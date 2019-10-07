// 连接 MySQL
var mysql = require('mysql');
// MySQL 的连接信息
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'node'
});

// 开始连接
connection.connect();

let readSql = "SELECT * FROM user";

connection.query(readSql,(err,res)=>{
    if(err) throw err;
    console.log(res);
})

connection.end();