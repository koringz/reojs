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
首先，我们需要进入`chain`，`chain(...)`入口recieving一个对象。此对象默认属性default可读、可写，也可以认为`writable`和`readable`布尔值返回`true`。value是一个数组对象，接收值以数组的形式存在(arguments，array，null)。调用`then`方法传入value第一个参数值，并且每次调用`then(...)`方法时，都会依次从value数组内部获取一个参数值。于是，我们可以使用左侧var定义的变量名money_totals输出结果，输出结果调用的方法为`next(...)`。
`then()`方法内部的第一个参数为自定义，必填选项。第二个参数message不是必填，但是参数message需要从第二个`then`方法开始记录。因为message捕捉上一个then方法的输出值，因此从第二个then链式开始就必须定义才能拿到上一个then的return值。
then方法的第三个参数是api方法，主要是替代内部的return方法，api方法主要还是一个arguments数组对象的形式。所以，我们在then内部只能有一个api方法，调用的then时，REO.js会自动输出传入api括号的值。最后，通过next方获取到then链式的结果，实现的方法按照顺序的方式执行，还可以通过for循环一次执行获得指定的then结果。
例如：
```js

var fontAlgo = document.querySelector('.fontAlgo');

var REO = new Reo();

var Chain = REO.chain({
    module : 'next',
    val: [2,3,5] // mes1 = 2 ,mes2 = 3, mes3 = 5
});

Chain.then(function ( mes1 ) {
    return mes1+3;
})
.then(function  ( mes2, massages, api ) {
    api( mes2 + 12);
})
.then(function  ( mes3, massages, api ) {
    api( mes3 + massages );
});

var first = Chain.next(),
    second = Chain.next(),
    third = Chain.next();

fontAlgo.innerText = first + ',' + second + ',' + third;
// 25,15,20
```

## License：
Copyright (c) 2017-2025 koringz <ok234@foxmail.com> https://koringz.github.io
