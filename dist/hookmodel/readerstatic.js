import on_static from "./onstatic";

// 渲染模块获得输出值
var results = on_static.reader();

document.querySelector(".test01").innerHTML = results.val;

