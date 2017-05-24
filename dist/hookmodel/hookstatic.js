import _static from "./handlermodel";
const reo = require('./reo.0.0.4');

// // 创建一个管理模块的钩子
let hook_static = reo.hook({
//     // 模块 function static() {}
    module : _static,
//     // 原始值 3
    val : 5
});


export default hook_static;