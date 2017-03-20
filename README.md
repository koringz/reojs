# Reo.js
部分api更新中...

## Idea
Fast visibale

Simple Call

## API

- `hook` 钩子调用机制，只要调用hook()方法，就能调用原型链的对象或方法，还可传递参数。
- `chain` 链式调用机制，通过chain()入口传递参数，然后用then实现链式调用。
- 超多Reo.js方法正在赶往的途中...

## Documentation

    在调用Reo API方法之前，需要实例一个Reojs库方便调用。
```js

// 创建一个Reo对象
var Reo = new Reo();

```
### hook
  通过`hook`钩子的调用机制，能够轻松的帮你调用到构造模块，注意：这个模块是自定义的构造函数，比如：`var static = function () {}`或者`function static () {}`。接着获取模块的原型链对象，原型链的写法主要参照原生JavaScript写法。最后我们可以向原型链的方法里面传递参数。
如果调用一个模块module时，没有手动定义`next()`方法，就会失去调用模块的原型链对象，所以，在调用模块时，一定要有原型链。

  多次调用的时候，为了不改变模块内部`this`指针，你需要自定义`hook`方法。自定义方法如：`var hook = Reo.hook()`。可以在不同的地方随时调用不同的模块，方便快捷。

例如：

```js

// 管理组织模块
function static () {};
static.prototype.success = function  (a,b) {
    b.innerText = a;
}
```

```js
// 定义一个元素
var test01 = document.querySelector('.test01');

// 创建一个管理模块的钩子
var hook = Reo.hook({
    // 模块 function static() {}
    module : 'static', 
    // 原始值 3
    val : 3 
});

// 创建一个返回值
var own_next = hook.next(function ( msg ) {
    // msg 为val初始值 = 3
    return msg + 3; 
});

// 获得一个组织对象
own_next.success( msg1, test01 );
// return: 6 

```
### chain

  在调用`chain()`方法时，方法内部只接收一个对象{...}。此对象内部默认属性为可读、可写，属性布尔值为true。对象的属性val值是一个数组，对象的module属性值是一个调用的模块名称。
  
  所以，当调用`then()`方法时，会依次从val数组获得参数，并且`then()`内部的第一个参数为必填项。第二个参数message非必填，但是message必须从第二个`then()`方法开始记录。因为message只捕捉上一个`then()`的输出值。然后，第三个参数是`api()`方法，主要是回调作用，REO.js库会自动获取传入`api(...)`括号的参数或值。
  
  最后，依次执行`next()`输出`then()`链式的结果。 
  
例如：
```js
// 定义一个元素
var fontAlgo = document.querySelector('.fontAlgo');

// 创建一个链式方法
var Chain = REO.chain({
    module : 'next',
    val: [2,3,5] // mes1 = 2 ,mes2 = 3, mes3 = 5
});

// 使用链式调用
Chain.then(function ( mes1 ) {
    return mes1+3;
})
.then(function  ( mes2, massages, api ) {
    api( mes2 + 12);
})
.then(function  ( mes3, massages, api ) {
    api( mes3 + massages );
});

// 一次获得then的返回值
var first = Chain.next(), // 25
    second = Chain.next(), // 15
    third = Chain.next(); // 20

fontAlgo.innerText = first + ',' + second + ',' + third;
// 25,15,20

```

## License：
Copyright (c) 2017-2025 koringz <ok234@foxmail.com> https://koringz.github.io
