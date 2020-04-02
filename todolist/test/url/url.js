const {URL} = require("url")

const myURL = new URL("https://juejin.im/post/5e0006c251882512795675f9#heading-52")
console.log(myURL,'属性')
console.log(myURL.href) 

console.log(myURL.toString()) 

console.log(myURL.toJSON()) 
/**
 * URL {
  href: 'https://juejin.im/post/5e0006c251882512795675f9#heading-52',序列化的url
  origin: 'https://juejin.im', //  只读
  protocol: 'https:', // 协议 
  username: '', // url用户名
  password: '', // url密码
  host: 'juejin.im', // url的主机
  hostname: 'juejin.im', // 主机名
  port: '', // url的端口
  pathname: '/post/5e0006c251882512795675f9', // url的路径
  search: '', // 序列化查询参数
  searchParams: URLSearchParams {}, URL 查询参数的 URLSearchParams 对象
  hash: '#heading-52' // url的参数
}
 */