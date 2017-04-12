# chain

在调用`chain()`方法时，方法内部只接收一个对象{...}。此对象内部默认属性为可读、可写，布尔值为true。对象的属性val值是一个数组，对象的module属性值是一个调用的模块名称。

<a name="chain" href="#chain">#</a> reo.<b>chain</b>(object)

Create a chained chain method.
```js
var Chain = reo.chain({
    module : 'costom_module',
    val: [22,3,5] // mes1 = 22 ,mes2 = 3, mes3 = 5
});
```
<a name="then" href="#then">#</a> chain.<b>then</b>(fn(api,msg,total))

When the `then ()` method is called, the argument is obtained from the val array in turn, and the first argument in `then ()` is required. The second parameter message is not required, but the message must start from the second `then ()` method. Because the message only captures the output value of a `then ()`. Then, the third argument is the `api ()` method, which is primarily a callback, and the `api (...)` parentheses will be output.

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

Finally, call the `next` method,` next` as the default method is called the chain of output results, followed by the implementation of the results of the output chain.

```js
var first = Chain.next(), // 25
    second = Chain.next(), // 15
    third = Chain.next(); // 20
```

<a name="all" href="#all">#</a> chain.<b>all</b>()

`All` output all for a one-time call, and then output the` then` method.

```js
Chain.all(); // 25,15,20 
```

<a name="costom_module" href="#costom_module">#</a> chain.<b>costom_module</b>()

`The costom_module` custom module and next, according to the individual custom name` costom_module`, in turn call the `then` method.

```js
Chain.costom_module(); // 25
Chain.costom_module(); // 15
Chain.costom_module(); // 20
```