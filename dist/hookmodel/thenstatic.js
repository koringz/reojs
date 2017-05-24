import hook_static from "./hookstatic";


// 创建一个hook_static返回值

let hook_static_then = hook_static
.then(function ( msg1 ) {
    this.bool = true;
    this.msg1 = msg1;
    this.callOnce = 'YES';
    msg1 += 0;
    return msg1
},function  (msg2) {
    msg2 += 10;
    return  msg2
});

export default hook_static_then;
