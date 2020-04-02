const querystring = require('querystring')
// 字符串序列化
const obj = {
    url:'https://developer.mozilla.org/',
    name:"null"
}
console.log(querystring.stringify(obj),'序列化字符串')
// 字符串解析为对象
console.log(querystring.parse(`url=github.com%2Fwebfansplz&name=null`),'又解析回来了') 

const str = querystring.escape(`url=github.com%2Fwebfansplz&name=null`)
console.log(str,'编码查询字符串中的参数')
// 编码过后需要解码之后才能解析
console.log(querystring.parse(str),'？')
console.log(querystring.parse(querystring.unescape(str)),'那么差距在哪')