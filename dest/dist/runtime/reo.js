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


var _reo = __webpack_require__(1);

var _reo2 = _interopRequireDefault(_reo);

var _reo3 = __webpack_require__(3);

var _reo4 = _interopRequireDefault(_reo3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blank = _reo2.default.blank,
    dom = _reo2.default.dom,
    isStr = _reo2.default.isStr,
    isObj = _reo2.default.isObj,
    isFun = _reo2.default.isFun,
    isNum = _reo2.default.isNum,
    msg = _reo2.default.msg,
    trim = _reo2.default.trim,
    indexof = _reo2.default.indexof,
    extend = _reo2.default.extend;

var doc = window.document || document,
    coutARRAY = !coutARRAY ? [] : null,
    vir = coutARRAY,
    mains = coutARRAY,
    orders = coutARRAY,
    convOrders = coutARRAY,
    ARRSLICE = void 0,
    arraySlice = ARRSLICE = Array.prototype.slice,
    debug = void 0,
    hookModel = [];

function order(element, options) {

    this._element = element;
    this._content = options;
    this.acceptCallInherit = {
        acceptinfo: null,
        initailizationStatus: {
            writable: false,
            readable: true,
            text: 'writer non supported!' || null,
            enable: true,
            base: ''
        },
        reactStatus: {
            flowing: {
                readable: false,
                enable: false,
                storage: null,
                size: ''
            }
        },
        groups: []
    };
    this.thenCallInherit = {
        storage: [],
        station: [],
        chainStorage: [],
        chainStorageApi: [],
        backUpStorage: []
    };
    this.other = {
        getContainers: null,
        defaultOrders: [],
        virtualVal: [],
        dynamicParameter: [],
        useToExtend: {}
    };
    this.userModel = {};
    mains.push(this);
};

order.prototype = {
    set: function set() {
        var args = arguments[0];
        for (var prop in args) {
            if (/module|val/i.test(prop)) {
                this.other.useToExtend[prop] = args[prop];
                continue;
            } else {
                return '?';
            }
        }
    },
    chain: function chain() {
        var options = function (f) {
            [options = (options === undefined) - 1, options ? 0 : options = f];
            return options[options ? 0 : 1];
        }(options ? 0 : arguments);
        if (isObj(options)) {
            var getOutside = extend(this.acceptCallInherit.initailizationStatus, options);
            if (this.acceptCallInherit.initailizationStatus.readable && this.acceptCallInherit.initailizationStatus.enable && !this.acceptCallInherit.initailizationStatus.writable && !getOutside.writable) {
                this.set(options);
                this.rebuild();
                var firstInherits = this['acceptCallInherit'],
                    getStatus = firstInherits.initailizationStatus;
                if (isObj(getStatus)) {
                    firstInherits.acceptinfo = getStatus.val || getStatus['text'];
                }
                this.recieving();
                getStatus = null;
                firstInherits = null;
                orders.push(this);
            } else {
                this.debug();
            }
        } else {
            this.debug();
        }
        return this;
    },
    rebuild: function rebuild() {
        return this.group(function (previousScope, attr) {
            var that = previousScope,
                getGroups = attr.groups;
            if (getGroups instanceof Array) {
                getGroups.push(extend(attr.initailizationStatus, that.other.useToExtend));
                that.other.useToExtend = {};
            }
            return getGroups;
        });
    },
    recieving: function recieving() {
        var acceptData = this.acceptCallInherit.acceptinfo;
        if (acceptData instanceof Array || acceptData instanceof String) {
            this.other.dynamicParameter = acceptData;
        } else {
            return false;
        }
    },
    group: function group() {
        var getModuleName,
            len = arguments[0],
            args = len(this, this.acceptCallInherit);
        if (isFun(len)) {
            getModuleName = args.reverse();
        }
        this.acceptCallInherit.initailizationStatus = getModuleName[0];
    },
    defineInvoking: function defineInvoking() {
        var customInvokingModel = this.acceptCallInherit.initailizationStatus.module;
        this.userModel[customInvokingModel] = this.next;
        for (var prop in this.userModel) {
            if (this.userModel.hasOwnProperty(prop) && !this.hasOwnProperty(prop)) {
                this[prop] = this.userModel[customInvokingModel];
            }
        }
        return this;
    },
    then: function then(fn) {
        var that = this,
            output = null,
            shiftFirstParamater = null,
            options = this.thenCallInherit.chainStorage || options || undefined;
        shiftFirstParamater = this.observerDynamicData('dynamicParameter').shift();
        this.thenCallInherit.station.push(shiftFirstParamater);

        this.getArguments(fn).forEach(function (methods) {
            that.thenCallInherit.storage.push(methods);
        });
        var getModuleStringName = this.acceptCallInherit.initailizationStatus.module;
        if (getModuleStringName === '') {
            return this;
        } else if (/^next$/i.test(getModuleStringName)) {
            return this;
        } else {
            return this.defineInvoking();
        }
    },
    observerDynamicData: function observerDynamicData(options) {
        if (options in this.other) {
            var param = this.other[options];
        }
        return param = param ? param : null;
    },
    getArguments: function getArguments() {
        var args = arraySlice.call(arguments);
        return args;
    },
    backUpInvoking: function backUpInvoking(options) {
        if (options.length > 0) {
            this.thenCallInherit.backUpStorage.push(options);
        }
    },
    all: function all() {
        var params,
            i = 0;
        var checkThenArgument = this.thenCallInherit.storage;
        this.final();
        if (checkThenArgument.length > 0) {
            var waitData;
            while (i < checkThenArgument.length) {
                this.task();
                params = this.thenCallInherit.chainStorageApi;
                if (params.length > 0) {
                    this.thenCallInherit.chainStorage.push(params[0][0]);
                    var waitData = this.thenCallInherit.chainStorage;
                    this.thenCallInherit.backUpStorage.push(waitData[0]);
                    this.thenCallInherit.chainStorageApi = [];
                }
            }
        }
        return this.thenCallInherit.backUpStorage;
    },
    getShift: function getShift() {
        var getShift;
        if (arguments[0].length > 0) {
            getShift = arguments[0].shift();
        }
        return getShift;
    },
    task: function task() {
        var that = this;
        (function (getStationValue, getChainStorageValue, fn) {
            fn.forEach(function (methods) {
                methods(function () {
                    that.thenCallInherit.chainStorageApi.push(arguments);
                }, getStationValue, getChainStorageValue);
            });
        })(this.getShift(this.thenCallInherit.station), this.getShift(this.thenCallInherit.chainStorage), arraySlice.call([this.getShift(this.thenCallInherit.storage)]));
    },
    next: function next() {
        var that = this;
        this.task();
        return function (empty, params) {
            if (!params) {
                params = that.thenCallInherit.chainStorageApi;
                if (params.length > 0) {
                    that.thenCallInherit.chainStorage.push(params[0][0]);
                    that.backUpInvoking(that.thenCallInherit.chainStorage);
                    that.thenCallInherit.chainStorageApi = empty;
                }
                return that.thenCallInherit.chainStorage[0];
            }
        }([]);
    },
    fail: function fail(options) {
        return this.debug(options);
    },
    final: function final() {
        if (this.thenCallInherit.backUpStorage.length > 0) {
            this.thenCallInherit.backUpStorage = [];
        }
    },
    debug: _reo4.default,
    extend: extend,
    indexof: indexof
};

module.exports = order;
//# sourceMappingURL=reo.order.js.map


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reo = __webpack_require__(0);

var _reo2 = _interopRequireDefault(_reo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reo(element, options) {
        this.options = new _reo2.default(element, options) || {};
        return this.options;
};

window.reo = reo;
//# sourceMappingURL=reo.js.map


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function warn(options, log) {
    return function () {
        options.call(this, log);
    };
};
var debug = warn(function (options) {
    window.console.warn(options);
}, 'disable write. call function err.');

module.exports = debug;
//# sourceMappingURL=reo.warn.js.map


/***/ })
/******/ ]);