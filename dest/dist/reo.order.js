"use strict";

var _reo = require("./reo.init");

var _reo2 = _interopRequireDefault(_reo);

var _reo3 = require("./reo.warn");

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
