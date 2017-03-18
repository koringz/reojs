# Reo.js
部分api还在更新中...
## Reo API
更多Reo.js方法在路上...
### hook()

实现钩子调用机制，简单的hook一下构建构造模块，即可调用到原型链的对象或方法，并且接收外部传递的参数。

```html
<div class="container">
    <div class="top">
        return value : <code class="test">53</code>
    </div>
</div>
```

```js
var $node = document.querySelector('.test'); // dom节点

var 
    Number_one = 5,
    Number_two = 10,
    Number_three = 25;


var Reo = new Reo();

Reo.hook({
    el:$node,
    assign:{ // 配置数据 assign
        module:'bug', // 模块 function bug() {}
        val:Number_one // 原始值 5
})
.next(function ( msg ) { // msg = 5
    return msg + 3; // 8
},function ( msg ) {
    return msg + Number_two;  //  15
},function ( msg ) {
    return msg + Number_three;  // 30
},function ( msg ) {
    return $node;
})
.success( msg1 , msg2 , msg3 , msg4 );

```
调用模块(invoking module)：
```js
var bug = function  (options) {};
bug.prototype = {
    success: function  (a,b,c,dom) {
        dom.innerHTML = a + b + c; // 8 + 15 +30
        // 输出 return : 53
    }
}
```
