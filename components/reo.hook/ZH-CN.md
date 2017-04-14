# hook()
通过`hook`钩子的调用机制，能够轻松的帮你调用到构造模块。

创建一个组织构造模块，原型链的写法主要参照原生JavaScript写法，方便钩子调用此模块的原型链对象。注意：这个模块是自定义的构造函数，如下:
```js
function static () {};
static.prototype.success = function (a) {
    return a+'yes';
}
```

<a name="hook" href="#hook">#</a> reo.<b>hook</b>(object)

如果调用一个模块module时，没有手动定义`then()`方法，就会失去调用模块的原型链对象，所以，在调用模块时，一定要有then方法。
多次调用模块的时候，为了不改变模块内部`this`指针，你需要自定义`hook`方法。自定义方法如下：
```js
var hook = reo.hook({
    module : 'static', 
    val : 3 
});
```
<a name="then" href="#then">#</a> hook.<b>then</b>(fn())

自定义hook钩子，通过then传入参数到模块里面。
```js
var own_then = hook.then(function ( msg ) {
    return msg + 3;  //  6
},function ( msg ) {
    return msg + 5;  //  8
});
```

<a name="on" href="#on">#</a> own_then.<b>on</b>(params,fn())

获取then返回的参数，通过on方法调用success模块，然后把参数传入到success模块里面。
```js
own_then.on('success', function (api, msg){
	api(msg);
});
```
<a name="reader" href="#reader">#</a> own_then.<b>reader</b>()

渲染的方式是通过`reader()`方法传入一个字符串，这个字符串是在`on`方法里面的字符串，如果你未设置字符串，默认情况下，将会输出最后一个模块。
```js
var ret = own_then.reader('success'); // => ret = 8yes
或者: 
var ret = own_then.reader(); // => ret = 8yes
```