import hook_static from "./thenstatic";



// 获得一个组织对象
let on_static = hook_static.on('success2',function  (api,a) {
    api(a)
}).on('caches',function  (api,a) {
    api(a)
});

export default on_static;
