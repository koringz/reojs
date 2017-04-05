# chain

在调用`chain()`方法时，方法内部只接收一个对象{...}。此对象内部默认属性为可读、可写，布尔值为true。对象的属性val值是一个数组，对象的module属性值是一个调用的模块名称。

<a name="chain" href="#chain">#</a> reo.<b>chain</b>(object)

创建一个chain链式方法。
```js
var Chain = reo.chain({
    module : 'next',
    val: [22,3,5] // mes1 = 22 ,mes2 = 3, mes3 = 5
});
```
<a name="then" href="#then">#</a> chain.<b>then</b>(fn(api,msg,total))

当调用`then()`方法时，会依次从val数组获得参数，并且`then()`内部的第一个参数为必填项。第二个参数message非必填，但是message必须从第二个`then()`方法开始记录。因为message只捕捉上一个`then()`的输出值。然后，第三个参数是`api()`方法，主要是回调作用，`api(...)`括号里面的参数将会被输出。

```js
Chain.then(function ( api, mes1 ) {
    api( mes1 + 3 );
})
.then(function  ( api, mes2, massages ) {
    api( mes2 + 12);
})
.then(function  ( api, mes3, massages ) {
    api( mes3 + massages );
});
```

<a name="next" href="#next">#</a> chain.<b>next</b>()

最后，调用`next`方法，`next`为默认调用方法，输出链式的结果，依次执行输出链式的结果。 

```js
var first = Chain.next(), // 25
    second = Chain.next(), // 15
    third = Chain.next(); // 20
```

<a name="all" href="#all">#</a> chain.<b>all</b>()

`all`为一次性调用输出所有，依次输出`then`方法。

```js
Chain.all(); // 25,15,20 
```

<a name="costom_module" href="#costom_module">#</a> chain.<b>costom_module</b>()

`costom_module`自定义模块和next一样，根据个人自定义名称`costom_module`，依次调用`then`方法。

```js
Chain.costom_module(); // 25
Chain.costom_module(); // 15
Chain.costom_module(); // 20
```