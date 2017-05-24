# chain

When calling `chain () ` method ', only one object {{}' is received inside the method. The default property inside this object is readable and writable and the Boolean value is true. The Val value of an object is an array, and the object's module property value is a module name of the call.

<a name="chain" href="#chain">#</a> reo.<b>chain</b>(object)

Create a chain chain method.
```js
var Chain = reo.chain({
    module : 'costom_module',
    val: [22,3,5] // mes1 = 22 ,mes2 = 3, mes3 = 5
});
```
<a name="then" href="#then">#</a> chain.<b>then</b>(fn(api,msg,total))

When calling `then () 'method, will turn to get the parameters from the Val array, and `then (mes1), internal parameters (the parameter name for the custom) is required. The parameters of message (parameter name custom) non required, but message must be from second (`then), began recording method. Because message captures only the output value of the last `then (). Then, the third argument is `api () \ method, which is primarily callback, and `api (...) ` parentheses' arguments will be output.

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

Finally, call the `next` method, `next` as the default calling method, and output the result of the chain, and then execute the output chain in turn.

```js
var first = Chain.next(), // 25
    second = Chain.next(), // 15
    third = Chain.next(); // 20
```

<a name="all" href="#all">#</a> chain.<b>all</b>()

`all` outputs all of the output for a single call and outputs the `then` method in turn.

```js
Chain.all(); // 25,15,20 
```

<a name="costom_module" href="#costom_module">#</a> chain.<b>costom_module</b>()

The `costom_module` custom module, like next, calls the `then` method in turn, according to the individual custom name `costom_module`.

```js
Chain.costom_module(); // 25
Chain.costom_module(); // 15
Chain.costom_module(); // 20
```