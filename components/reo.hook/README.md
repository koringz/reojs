# hook()
通过`hook`钩子的调用机制，能够轻松的帮你调用到构造模块。

创建一个组织构造模块，原型链的写法主要参照原生JavaScript写法，方便钩子调用此模块的原型链对象。注意：这个模块是自定义的构造函数，比如：`var static = function () {}`或者`function static () {}`。
```js
function static () {};
static.prototype.success = function  (a,b) {
    b.innerText = a;
}
```

<a name="hook" href="#hook">&lg;</a> reo.<b>hook</b>(object)
如果调用一个模块module时，没有手动定义`then()`方法，就会失去调用模块的原型链对象，所以，在调用模块时，一定要有then方法。
多次调用模块的时候，为了不改变模块内部`this`指针，你需要自定义`hook`方法。自定义方法如：`var hook = Reo.hook()`。
```js
var hook = reo.hook({
    module : 'static', 
    val : 3 
});
```
<a name="then" href="#then">&lg;</a> hook.<b>then</b>(fn(api,msg,total))
通过自定义hook钩子，通过then传入参数到模块里面。
```js
var own_then = hook.then(function ( msg ) {
    return msg + 3;  //  6
},function ( msg ) {
    return msg + 5;  //  8
});
```js

<a name="on" href="#on">&lg;</a> own_then.<b>on</b>(fn(api,msg,total))
获取then返回的参数，通过on方法调用success模块，然后把参数传入到success模块里面。
```js
own_then.on('success', function (api, msg1, msg2){
	api(msg1, msg2);
});
```