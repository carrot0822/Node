const EventEmitter = require('events')
class Application extends EventEmitter{}
const app = new Application()
// 监听 hello事件

app.on('hello', data =>{
    console.log(data)
})

app.emit('hello','hello nodeJS')

// emit this指向
class Person extends EventEmitter{
    constructor(){
        super()
    }
}
const mrNull = new Person()
mrNull.on('play',function(data){
    console.log('play')
    console.log(this,'this指向')
})
mrNull.emit('play','hello nodeJS')

// 同步异步 按照顺序同步调用 process的执行顺序在setImmediate前面？ 这里有个循环队列
const developer = new Person()
developer.on('dev',function(data){
    setImmediate(()=>{
        console.log(data,'定时器')
    })
})
developer.on('dev',function(data){
    process.nextTick(()=>{
        console.log(data,'下一个进程')
    })
})
developer.emit('dev','触发异步')
console.log('develooper')

// 只调用一次的event 
const mrOnce = new Person()
mrOnce.once('once',()=>{
    console.log('只调用一次')
})
mrOnce.emit('once')
mrOnce.emit('once')

// 事件触发顺序 在注册事件前是不会被触发的

// 事件监听器的移除
const remove = new Person()
remove.on('test',(data)=>{
    console.log(data,'测试')
})
remove.on('test2',()=>{
    console.log('执行第二次，移除所有监听事件 应该是移除绑定在本对象的 这应该是 实例对象的好处')
})
remove.emit('test')
remove.removeListener('test',()=>{
    console.log('移除的时候也会触发对应的时间')
})

remove.removeAllListeners()
app.emit('hello','收尾')
remove.emit('test2')