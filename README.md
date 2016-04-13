# obj-mirror
#### 函数执行替代new关键字

## 目的

在得到一个新对象实例，往往需要使用new关键字和构造函数一起使用。有时候我们在写插件的时候，用户往往不知道需要使用new关键字获取一个实例。
那么如果我们直接从构造函数中返回一个其他对象，在使用instanceof关键字判断总是返回false。
现在我们只需要在构造函数中这样子写：

``` JavaScript
var m = require("obj-mirror");
function F(){
  var f = m( F );
  return f;
}
f instanceof F; //>>> true
```

## 安装
`npm install`

## 测试
`npm test`
