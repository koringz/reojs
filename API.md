# REO API release

This is a reo.js API method library.

- Chain -链式调用机制，通过.chain()入口传递参数，然后用then实现链式调用。

- Hook -钩子调用机制，只要调用.hook()方法，就能调用原型链的对象或方法，还可传递参数。

REO method on the road...


## [Chain](https://github.com/koringz/reo.js/tree/master/components/reo.chain/README.md)
Methods for resizing chain invoker.
- [reo.chain](https://github.com/koringz/reo.js/tree/master/components/reo.chain/README.md#chain) - create a method chain.
- [*chain*.then](https://github.com/koringz/reo.js/tree/master/components/reo.chain/README.md#chain_then) - resize chain convertion then method.
- [*then*.next](https://github.com/koringz/reo.js/tree/master/components/reo.chain/README.md#then_next) - get then order.
- [*then*.all](https://github.com/koringz/reo.js/tree/master/components/reo.chain/README.md#then_all) - get all order.

## [Hook](https://github.com/koringz/reo.js/tree/master/components/reo.hook/README.md)
use Hook invoker.
- [reo.hook](https://github.com/koringz/reo.js/tree/master/components/reo.hook/README.md#hook)  - create a method hook.
- [*hook*.then](https://github.com/koringz/reo.js/tree/master/components/reo.hook/README.md#hook_then)  - resize hook invoking then.
- [*hook*.on](https://github.com/koringz/reo.js/tree/master/components/reo.hook/README.md#hook_on)  - get a module.


