import reoinit from "./reo.init";
import reowarn from "./reo.warn";


let 
    blank = reoinit.blank,
    dom = reoinit.dom,
    isStr = reoinit.isStr,
    isObj = reoinit.isObj,
    isFun= reoinit.isFun,
    isNum = reoinit.isNum,
    msg = reoinit.msg,
    trim = reoinit.trim,
    indexof = reoinit.indexof,
    extend = reoinit.extend;

let doc = window.document || document,
    coutARRAY = !coutARRAY ? [] : null,
    vir = coutARRAY,
    mains = coutARRAY,
    orders = coutARRAY,
    convOrders = coutARRAY,
    ARRSLICE,
    arraySlice = ARRSLICE = Array.prototype.slice,
    debug, hookModel = [];

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
            },
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
    mains.push(this)
};

order.prototype = {
        set: function() {
            let args = arguments[0];
            for (let prop in args) {
                if (/module|val/i.test(prop)) {
                    this.other.useToExtend[prop] = args[prop];
                    continue
                } else {
                    return '?'
                }
            }
        },
        chain: function() {
            let options = (function(f) {
                [options = (options === undefined) - 1, options ? 0 : options = f];
                return options[options ? 0 : 1]
            })(options ? 0 : arguments);
            if (isObj(options)) {
                var getOutside = extend(this.acceptCallInherit.initailizationStatus, options);
                if (this.acceptCallInherit.initailizationStatus.readable && this.acceptCallInherit.initailizationStatus.enable && !this.acceptCallInherit.initailizationStatus.writable && !getOutside.writable) {
                    this.set(options);
                    this.rebuild();
                    var firstInherits = this['acceptCallInherit'],
                        getStatus = firstInherits.initailizationStatus;
                    if (isObj(getStatus)) {
                        firstInherits.acceptinfo = getStatus.val || getStatus['text']
                    }
                    this.recieving();
                    getStatus = null;
                    firstInherits = null;
                    orders.push(this)
                } else {
                    this.debug()
                }
            } else {
                this.debug()
            }
            return this
        },
        rebuild: function() {
            return this.group(function(previousScope, attr) {
                var that = previousScope,
                    getGroups = attr.groups;
                if (getGroups instanceof Array) {
                    getGroups.push(extend(attr.initailizationStatus, that.other.useToExtend));
                    that.other.useToExtend = {}
                }
                return getGroups
            })
        },
        recieving: function() {
            var acceptData = this.acceptCallInherit.acceptinfo;
            if (acceptData instanceof Array || acceptData instanceof String) {
                this.other.dynamicParameter = acceptData
            } else {
                return false
            }
        },
        group: function() {
            var getModuleName, len = arguments[0],
                args = len(this, this.acceptCallInherit);
            if (isFun(len)) {
                getModuleName = args.reverse()
            }
            this.acceptCallInherit.initailizationStatus = getModuleName[0]
        },
        defineInvoking: function() {
            var customInvokingModel = this.acceptCallInherit.initailizationStatus.module;
            this.userModel[customInvokingModel] = this.next;
            for (let prop in this.userModel) {
                if (this.userModel.hasOwnProperty(prop) && !this.hasOwnProperty(prop)) {
                    this[prop] = this.userModel[customInvokingModel]
                }
            }
            return this
        },
        then: function(fn) {
            var that = this,
                output = null,
                shiftFirstParamater = null,
                options = this.thenCallInherit.chainStorage || options || undefined;
            shiftFirstParamater = this.observerDynamicData('dynamicParameter').shift();
            this.thenCallInherit.station.push(shiftFirstParamater);
             
            this.getArguments(fn).forEach(function(methods) {
                that.thenCallInherit.storage.push(methods)
            });
            var getModuleStringName = this.acceptCallInherit.initailizationStatus.module;
            if (getModuleStringName === '') {
                return this
            } else if (/^next$/i.test(getModuleStringName)) {
                return this
            } else {
                return this.defineInvoking()
            }
        },
        observerDynamicData: function(options) {
            if (options in this.other) {
                var param = this.other[options]
            }
            return param = param ? param : null
        },
        getArguments: function() {
            var args = arraySlice.call(arguments);
            return args
        },
        backUpInvoking: function(options) {
            if (options.length > 0) {
                this.thenCallInherit.backUpStorage.push(options)
            }
        },
        all: function() {
            var params, i = 0;
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
                        this.thenCallInherit.chainStorageApi = []
                    }
                }
            }
            return this.thenCallInherit.backUpStorage
        },
        getShift: function() {
            var getShift;
            if (arguments[0].length > 0) {
                getShift = arguments[0].shift()
            }
            return getShift
        },
        task: function() {
            var that = this;
            (function(getStationValue, getChainStorageValue, fn) {
                fn.forEach(function(methods) {
                    methods(function() {
                        that.thenCallInherit.chainStorageApi.push(arguments)
                    }, getStationValue, getChainStorageValue)
                })
            })(this.getShift(this.thenCallInherit.station), this.getShift(this.thenCallInherit.chainStorage), arraySlice.call([this.getShift(this.thenCallInherit.storage)]))
        },
        next: function() {
            var that = this;
            this.task();
            return function(empty, params) {
                if (!params) {
                    params = that.thenCallInherit.chainStorageApi;
                    if (params.length > 0) {
                        that.thenCallInherit.chainStorage.push(params[0][0]);
                        that.backUpInvoking(that.thenCallInherit.chainStorage);
                        that.thenCallInherit.chainStorageApi = empty
                    }
                    return that.thenCallInherit.chainStorage[0]
                }
            }([])
        },
        fail: function(options) {
            return this.debug(options)
        },
        final: function() {
            if (this.thenCallInherit.backUpStorage.length > 0) {
                this.thenCallInherit.backUpStorage = []
            }
        },
        debug: reowarn,
        extend: extend,
        indexof: indexof
    };



module.exports = order;