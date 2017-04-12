'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.blank = blank;
exports.dom = dom;
exports.isStr = isStr;
exports.isObj = isObj;
exports.isFun = isFun;
exports.isNum = isNum;
exports.isArr = isArr;
exports.msg = msg;
exports.trim = trim;
exports.extend = extend;
exports.indexof = indexof;
function blank() {};

function dom(options) {
    return document.querySelector(options);
};

function isStr(options) {
    return typeof options === 'string';
};

function isObj(options) {
    return (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object';
};

function isFun(options) {
    return typeof options === 'function';
};

function isNum(options) {
    return typeof options === 'number';
};

function isArr(options) {
    return typeof options === 'array';
};

function msg() {};

function trim(options) {
    return options.replace(/(\s*)/g, '');
};

function extend(prop, options) {
    for (var pop in options) {
        if (pop in prop) {
            prop[pop] = options[pop];
        }
        prop[pop] = options[pop];
    }
    return prop;
};

function indexof(prop, options) {
    for (var i = 0; i < prop.length; i++) {
        if (prop[i] === options) {
            return 1;
        }
    }
    return -1;
};

module.exports = {
    blank: blank,
    dom: dom,
    isStr: isStr,
    isObj: isObj,
    isFun: isFun,
    isNum: isNum,
    msg: msg,
    trim: trim,
    indexof: indexof,
    extend: extend
};
//# sourceMappingURL=reo.init.js.map
