(function(exports) {
    var doc = exports.document || document,
    vir = [],
    mains = [],
    convOrders = [],
    arraySlice = ARRSLICE = Array.prototype.slice,
    orders = [];

    function blank() {};

    function dom(options) {
        return document.querySelector(options)
    };

    function isStr(options) {
        return typeof(options) === 'string'
    };

    function isObj(options) {
        return typeof(options) === 'object'
    };

    function isFun(options) {
        return typeof(options) === 'function'
    };

    function isNum(options) {
        return typeof(options) === 'number'
    };

    function isArr(options) {
        return typeof(options) === 'array'
    };

    function extend(prop, options) {
        for (var pop in options) {
            if (pop in prop) {
                prop[pop] = options[pop]
            }
            prop[pop] = options[pop]
        }
        return prop
    };

    function REO(element, options) {
        this.options = new order(element, options) || {};
        return this.options
    };

    var order = function(element, options) {
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
            backUpremoveStorage: []
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
            var args = arguments[0];
            for (var prop in args) {
                if (/module|val/i.test(prop)) {
                    this.other.useToExtend[prop] = args[prop];
                    continue
                } else {
                    return '?'
                }
            }
        },

        chain: function(options) {
            var options = options ? options: undefined;
            if (isObj(options)) {
                var getOutside = extend(this.acceptCallInherit.initailizationStatus, options);
                if (this.acceptCallInherit.initailizationStatus.readable && this.acceptCallInherit.initailizationStatus.enable && !this.acceptCallInherit.initailizationStatus.writable && !getOutside.writable) {
                    this.set(options);
                    var firstInherits = this['acceptCallInherit'];
                    this.rebuild();
                    if (isObj(firstInherits.initailizationStatus)) {
                        var getStatus = firstInherits.initailizationStatus;
                        firstInherits.acceptinfo = getStatus.val || getStatus['text']
                    }
                    this.recieving(firstInherits.acceptinfo);
                    delete getStatus;
                    delete firstInherits;
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
            var args = arguments[0];
            if (args instanceof Array || args instanceof String) {
                this.other.dynamicParameter = args
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
            for (prop in this.userModel) {
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
            delete shiftFirstParamater;
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
            return param = param ? param: null
        },

        getArguments: function() {
            var args = arraySlice.call(arguments);
            return args
        },

        saveDelayRemoveData: function(options) {
            this.thenCallInherit.backUpremoveStorage.push(options)
        },

        all: function() {
            return false
        },

        getShift: function() {
            if (arguments.length > 0) {
                return arguments[0].shift()
            }
        },

        next: function() {
            var getStorageFunction = this.getShift(this.thenCallInherit.storage),
            getStorageFunctionArgument = arraySlice.call([getStorageFunction]),
            getchainStorageValue = this.getShift(this.thenCallInherit.chainStorage),
            getStationValue = this.getShift(this.thenCallInherit.station),
            results = null,
            that = this;
            this.saveDelayRemoveData(getStationValue);
            getStorageFunctionArgument.forEach(function(methods) {
                results = methods(getStationValue, getchainStorageValue,
                function() {
                    that.thenCallInherit.chainStorageApi.push(arguments)
                })
            });
            if (results === undefined) {
                var chainStorageApiValue = this.thenCallInherit.chainStorageApi[0][0];
                this.thenCallInherit.chainStorage.push(chainStorageApiValue);
                this.thenCallInherit.chainStorageApi = [];
                return chainStorageApiValue
            } else {
                this.thenCallInherit.chainStorage.push(results);
                this.saveDelayRemoveData(results)
            }
            return results
        },

        debug: debug
        
    };

    function warn(options, log) {
        return function() {
            options.call(this, log)
        }
    };

    var debug = warn(function(options) {
        window.console.warn(options)
    },
    'disable write. call function err.');

    if (typeof module !== 'undefined' && module.exports && window.module !== module) {
        module.exports = REO
    } else if (typeof define === 'function' && define.amd) {
        define('REO', [], 'REO')
    } else {
        exports.Reo = REO
    }

})(typeof window !== 'undefined' ? this: global);