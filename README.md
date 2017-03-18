# Reo.js
部分api更新中...
## API

- `hook` 实现钩子调用机制，简单的hook一下，即可调用到原型链的对象或方法，并且传递参数。

超多Reo.js方法正在赶往的途中...

## Documentation文档

通过`hook`钩子的调用机制，能够轻松的帮你调用到构造模块，注意：这个模块是自定义的构造函数，比如：`var bug = function () {}`或者`function bug () {}`。接着获取模块的原型链对象，原型链的写法主要参照原生javascript写法。最后我们可以向原型链的方法里面传递参数。
如果调用一个模块module时，没有手动定义`next()`方法，就会失去调用模块的原型链对象，所以，在调用的时，一定要有原型链。
多次调用的时候，为了不改变模块内部`this`指针，你需要自定义`hook`方法。自定义方法如：`var hook = Reo.hook()`。可以在不同的地方随时调用不同的模块，方便快捷。
```html
<div class="container">
    <div class="top">
        return value : <code class="test01">8</code>
    </div>
</div>
```

```js

var $test01 = document.querySelector('.test01'), // dom节点
    cout = 2;

var Reo = new Reo();

var hook = Reo.hook({
        el : $test01,
        assign : { // 配置数据 assign
            module : 'static', // 模块 function bug() {}
            val : 3 // 原始值 3
        }
    });
var val = hook.next(function ( msg ) {return msg + 3 }).success( msg1, $test01 ); // 输出 return : 8
    $test01.innerText = val;
// 注：msg 为初始值 3，msg1是next的第一个函数的结果 6
```
调用模块(invoking module)：
```js
var static = function  () {};
static.prototype.success = function  (a,b) {
		return a + b;
}
```
