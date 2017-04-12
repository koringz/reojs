/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (args) {
	[1, 2, 3].map(function (m) {
		return m + 1;
	});
	return args;
};
//# sourceMappingURL=test.grunt.js.map


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var test_module = __webpack_require__(1);
var reoinit = __webpack_require__(0);

console.log(reoinit);
//# sourceMappingURL=test.results.js.map


/***/ })
/******/ ]);