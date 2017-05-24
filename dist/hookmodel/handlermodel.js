
// 管理组织模块
function _static () {};
_static.prototype.success2 = function  (v) {
    return {
        val : v,
    }
}
_static.prototype.caches = function  (a,v) {
    var pre = a;

    return {
        twice : a,
        self : caches,
        val : v+a.val
    }
}


export default _static;