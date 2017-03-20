# Reo.js
部分api更新中...

## Idea
Fast visibale

Simple Call

## API

- `hook` 钩子调用机制，只要调用`.hook()`方法，就能调用原型链的对象或方法，还可传递参数。
- `then` 链式调用机制，通过`access(param)`入口传递参数，实现链式调用`.then()`获得调用的函数方法。
- 超多Reo.js方法正在赶往的途中...

## Documentation

  通过`hook`钩子的调用机制，能够轻松的帮你调用到构造模块，注意：这个模块是自定义的构造函数，比如：`var static = function () {}`或者`function static () {}`。接着获取模块的原型链对象，原型链的写法主要参照原生JavaScript写法。最后我们可以向原型链的方法里面传递参数。
如果调用一个模块module时，没有手动定义`next()`方法，就会失去调用模块的原型链对象，所以，在调用模块时，一定要有原型链。

  多次调用的时候，为了不改变模块内部`this`指针，你需要自定义`hook`方法。自定义方法如：`var hook = Reo.hook()`。可以在不同的地方随时调用不同的模块，方便快捷。
```html
<div class="container">
    <div class="top">
        return value : <code class="test01">8</code>
    </div>
</div>
```
如果你已经写好了HTML样式，接下来使用Reo库的方法。

例如：

```js
var Reo = new Reo();
```
定义变量hook，调用static模块：
```js
var hook = Reo.hook({
        el : 'test01',
        assign : { // 配置数据 assign
            module : 'static', // 模块 function bug() {}
            val : 3 // 原始值 3
        }
    });
```
传参数并获得调用的方法(如:success())：
```js
var cout = 2;
var val = hook.next(function ( msg ) {return msg + 3 }).success( msg1, cout ); 
// 输出 return : 8
// 注：msg 为初始值 3，msg1是next的第一个函数的结果 6
```
显示结果：
```js
document.querySelector('.test01').innerText = val;  
```
调用依赖模块(invoking module)：
```js
var static = function  () {};
static.prototype.success = function  (a,b) {
		return a + b;
}
```

## License：
Copyright (c) 2017-2025 koringz <ok234@foxmail.com> https://koringz.github.io
