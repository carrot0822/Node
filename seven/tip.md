## 包管理工具
### npm
命令行
npm help 查看命令的详细帮助
npm update 更新当前目录 node_module至最新模块
npm update -g 更新全局模块
npm cache clear 可以情况NPM本地缓存 用于对付使用相同版本
npm unpublish @ 撤销发布自己发布过的某个版本代码




2. yarn
## node版本控制

## 简述
解析器 编译器 运行环境

## 路径解析规则
1. 内置模块 不做路径解析 直接返回
2. node_module 路径查找会逐渐在本层文件夹向上查找 并且是查找node_modules的文件
3. NODE_PATH环境变量 暂时不会

## 包
默认入口和package.json的解释问题 package.json的main是入口文件（webpack知识）


## 模块

### 一 fs模块


### 二 path模块

fs模块和path模块可以针对电脑中各个文件做操作
### 文本编码与buffer
