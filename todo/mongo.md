### moogoDb
### 数据库分类
1. 关系型数据库(RDBMS)

2. 非关系型数据库
### MongoDB
在mongodb中 数据库和集合都不需要手动创建 创建文档时 如果文档所在集合或数据库不存在就会自动创建
数据库和集合
### 基本操作
1. 数据库
2. 文档

3. 集合


## 基本指令
## 进入数据库
### 数据库
#### 查看类指令
+  显示当前的所有数据库 show dbs // show databases
+  表示当前所在的数据库 db
+  删除数据库 db.dropDatabase() 先进到对应的数据库才能删吗 - -在1号数据库删2号
#### 进入到指定的数据库 use 数据库名
1. use 数据库 有就会进入 没有就会创建一个新的 如果该库无数据就不会显示出来
2. 
数据库 表 数据
#### CRUD类指令
1. 数据库插入db.<collection>.insert(doc)
+  db.student.insert({name:'小孙',age:'28',gender:'male'})
+ 插入的时候 如果没有指定ID会自动生成一个_id的标识 确认数据唯一 唯一主键
+ insertOne(json) insertMany([{}]) json对象数组
2. 数据库查找 db.<collection>.find({})
+ find 查询条件{key:value} 范围查询? 复合条件查询?
+ find().count 得到查询数据的数量
3. 数据库修改
+ db.<collection>.update({查询条件},新对象)  默认情况会用新对象替代查询对象
+ 修改指定属性 使用修改操作符$set db.<collection>.({查询条件},{
    $set:{ 替换属性
        key：value
    },
    $unset:{ 删除属性
        key1:value2
    }
})
+ 修改单个 updateOne
+ 修改多个 updateMany()
4. 删除 delete deleteOne deleteMany
#### 集合
1. 显示所有的集合 show collections 