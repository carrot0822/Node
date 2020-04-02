### event
1. event模块的事件绑定，触发，移除
+ on emit once removeListener removeAllListener 继承模块对象的好处就在于可以动态移除和分别维护 不同的对象触发不同的事件 同一个名字的事件可以绑多个触发 就是不知道是共存还是覆盖
2. 事件触发的顺序 
+ 顺序根据从上到下执行 其中 process.nextTick比setImmediate前一步执行
3. event模块的指向