(function  (foctory) {
    !function(factory) {
        if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
            var target = module['exports'] || exports; 
            factory(target);
        } else if (typeof define === 'function' && define['amd']) { // AMD
            define(['exports'], factory);
        } else { // no module loader
            factory(window['reo'] = {});
        }
    }(function(exports) {

        var reo = typeof exports !== "undefined" ? exports : {};
        var doc = exports.document || document;
        var ARRSLICE_CHAIN = Array.prototype.slice;
        // call init the methods.

        // Add a val in the method. it is Okay.
        function promiseCompile ( options, previous ) {
            this._previous = previous;
            this._options = options;
            
            this.init();
        };

        promiseCompile.prototype.init = function  (options) {
            this.acceptCallInherit = {
                acceptinfo : null,
                // set init status.
                initailizationStatus : {
                    writable : false,
                    readable : true,
                    text : 'writer non supported!' || null,
                    enable :true,
                    base : ''
                },
                reactStatus : {
                    flowing : {
                        readable : false,
                        enable : false,
                        storage : null,
                        size :''
                    },
                },
                groups :[]
            };

            // save shift val
            this.thenCallInherit = {
                storage :[],
                station :[],
                // call then() chain. the result of get previous. 
                chainStorage :[],
                chainStorageApi :[],
                // remove this storage array.
                // # put out
                backUpStorage :[]
            };

            // define other inherit.
            this.other = {
                getContainers : null,
                // this.orders = [];
                defaultOrders : [],
                // virtual val parameter.
                virtualVal : [],
                // dynamic array
                dynamicParameter : [],
                // defined a viod object.
                useToExtend :{}
            };

            this.userModel = {};
            this.orders = [];

            this._previous.extend(this.__proto__,this._previous);
            this.injectData(this._options);
        };

        // select transfer DATA binding on this object.
        promiseCompile.prototype.set = function  () {

            var args = arguments[0];
            // if there are object prototype contains 'text' and 'val'.  options = { text : '' , val : ''}
            for(var prop in args){
                // if there. save val and text information.
                if(/module|val/i.test(prop)){
                    // copy text|val as key val.
                    this.other.useToExtend[prop] = args[prop];
                    continue;
                }
                else{ return '?'; }
            }
        };

        // Receiving user's container.
        promiseCompile.prototype.injectData = function  () {
            var options = (function (f) {
                [options = (options === undefined) - 1, options? 0 : options = f];
                return options[options?0:1];
            })(options?0:arguments);

            if ( this.isObj(options) ) {
                var getOutside = this.extend(this.acceptCallInherit.initailizationStatus, options);
                // if there are writable.
                // this is default writable status.
                if ( this.acceptCallInherit.initailizationStatus.readable
                     && this.acceptCallInherit.initailizationStatus.enable // default false
                     && !this.acceptCallInherit.initailizationStatus.writable
                     && !getOutside.writable ) { // default false
            
                    // get a new this.initailizationStatus object.
                    this.set(options);

                    // rebulid this.initailizationStatus object of prototype.
                    this.rebuild();

                    // delete and remove this.useToExtend information.
                    var firstInherits = this['acceptCallInherit'],
                        getStatus = firstInherits.initailizationStatus;
                    // accept (object or text) by this.acceptinfo.
                    if( this.isObj(getStatus) ){
                        firstInherits.acceptinfo = getStatus.val || getStatus['text'];
                    }
                    // this must is an array.
                    // this.acceptinfo = [ 'a', 'b', 'c', 'd',...];
                    this.recieving();

                    // delete getStatus;
                    // delete firstInherits;
                    // ******** call changed  ********
                    this.orders.push(this);
                }
                // else it is no writable. user's only input an object. 
                // options = { val : array | object | function}
                else{ this.debug(); }
            }
            else{ this.debug(); }
            
            return this;
        };

        promiseCompile.prototype.rebuild = function  () {
            var that = this;
            return this.group(function (previousScope,attr) {
                var that = previousScope,
                    getGroups = attr.groups;
                if ( getGroups instanceof Array ) {
                    getGroups.push(that.extend(attr.initailizationStatus, that.other.useToExtend));
                    that.other.useToExtend = {};
                }

                return getGroups;
            });
        };

        promiseCompile.prototype.recieving = function  () {
            var acceptData =  this.acceptCallInherit.acceptinfo;
            if( acceptData instanceof Array
                || acceptData instanceof String ){
                this.other.dynamicParameter = acceptData;
            }
            else{
                return false;
            }
        };

        promiseCompile.prototype.group = function  () {
            var 
                getModuleName,
                len = arguments[0],
                args = len( this, this.acceptCallInherit );
            if ( this.isFun(len) ) {
                // get a return value. [val1 ,val2 ,val3]
                getModuleName = args.reverse();
            }
            this.acceptCallInherit.initailizationStatus = getModuleName[0];
        };

        promiseCompile.prototype.defineInvoking= function  () {
            // the user puts costom module in this object invoking.
            var customInvokingModel = this.acceptCallInherit.initailizationStatus.module;
                
            this.userModel[customInvokingModel] = this.next;
            for(prop in this.userModel){
                if( this.userModel.hasOwnProperty(prop)
                    && !this.hasOwnProperty(prop)){

                    this[prop] = this.userModel[customInvokingModel];

                }
            }
            return this;
        };

        promiseCompile.prototype.then = function  (fn) {
            // [1,fun,..]

            var that = this,
                output = null,
                shiftFirstParamater = null,
                options = this.thenCallInherit.chainStorage || options || undefined; 

            // release an array every time.
            shiftFirstParamater = this.observerDynamicData('dynamicParameter').shift();

            // push into this.station.
            this.thenCallInherit.station.push(shiftFirstParamater);

            // scope var must be removed.
            // delete shiftFirstParamater;
            // this.getArguments(fn) only this is arguments Object.
            // * param [(fun),(fun2)...]
            // * param [1, 2, 3]

            this.getArguments(fn).forEach(function  (methods) {
                // push function in storage.
                that.thenCallInherit.storage.push(methods);
            });

            var getModuleStringName = this.acceptCallInherit.initailizationStatus.module;
            if (getModuleStringName === '') {
                return this;
            }
            else if (/^next$/i.test(getModuleStringName)) {
                return this;
            }
            else{
                return this.defineInvoking();
            }
        };

        promiseCompile.prototype.observerDynamicData = function  (options) {
            if(options in this.other){
                var param = this.other[options];
            }
            return param = param ? param : null;
        };

        promiseCompile.prototype.getArguments = function  () {
            // get the specified array object.
            var args = ARRSLICE_CHAIN.call(arguments);
            return args;
        };

        promiseCompile.prototype.backUpInvoking = function  (options) {
            if(options.length>0){
                this.thenCallInherit.backUpStorage.push(options);
            }
        };

        promiseCompile.prototype.all = function  () {
            var params,i=0;
            // must be check the then() method from this.thenCallInherit.storage length. is or not resize of avalible invoking function.
            var checkThenArgument = this.thenCallInherit.storage;
            this.final();
            if(checkThenArgument.length > 0){
                var waitData;
                // return then method total nums.
                while(i < checkThenArgument.length){
                    // auto done callback.
                    this.task();
                    // auto output match info.
                    params = this.thenCallInherit.chainStorageApi;
                    if( params.length > 0){
                        // if return callback value in array. got all then pattern. // params[0] = [val1,val2,val3]
                        this.thenCallInherit.chainStorage.push(params[0][0]);
                        var waitData = this.thenCallInherit.chainStorage;
                        // backup return value and Data.
                        this.thenCallInherit.backUpStorage.push(waitData[0]);
                        // return value select call next methods from [[one],,,]
                        this.thenCallInherit.chainStorageApi = [];
                    }
                }
            }
            return this.thenCallInherit.backUpStorage;
        };

        promiseCompile.prototype.getShift = function  () {
            var getShift;
            if(arguments[0].length >0){
                getShift = arguments[0].shift();
            }
            return getShift;
        };

        promiseCompile.prototype.task =function  () {
            // rebuild distribute mechaniam and task.
            // getChainStorageValue,getStationValue,getStorageFunctionArgument, // this is the result of the chain query return to previous done.
            var that = this;

            (function  (getStationValue,getChainStorageValue,fn) {
                // call the first task.
                fn.forEach(function (methods) {
                    // var results = function  (y, massages, api) { var two = y; api( 'total:'+ two + massages );}
                    methods( function () { // api = function  () {var d = arguments;return d}
                        // return value storage within the Array or [];
                        that.thenCallInherit.chainStorageApi.push(arguments);
                    }, getStationValue, getChainStorageValue );
                });

            })(this.getShift(this.thenCallInherit.station)
            ,this.getShift(this.thenCallInherit.chainStorage)
            ,ARRSLICE_CHAIN.call([this.getShift(this.thenCallInherit.storage)]));
        };

        promiseCompile.prototype.next = function  () {
            // call the first then(..). # api method within function. we must be save the results first.
            // get the result msg of put it into the function( msg ). first save within chain storage api method.
            // rebuild assign chain storage api []. recieve message , return then(...)
            var that = this;
            this.task();
            return function (empty,params) {
                if(!params){
                    params = that.thenCallInherit.chainStorageApi;
                    if( params.length > 0){
                        // if return callback value in array. got all then pattern. // params[0] = [val1,val2,val3]
                        that.thenCallInherit.chainStorage.push(params[0][0]);
                        // backup return value and Data.
                        that.backUpInvoking(that.thenCallInherit.chainStorage);
                        // return value select call next methods from [[one],,,]
                        that.thenCallInherit.chainStorageApi = empty;
                        // var params = this.thenCallInherit.chainStorageApi[0][0];
                    }
                    return that.thenCallInherit.chainStorage[0];
                }
            }([]);
        };

        // if invoked next() methods extra then() method. require fail.
        promiseCompile.prototype.fail=function  (options) {
            return this.debug(options);
        };

        promiseCompile.prototype.final=function  () {
            if(this.thenCallInherit.backUpStorage.length > 0){
                this.thenCallInherit.backUpStorage = [];
            }
        };


        var ARRSLICE_HOOK = Array.prototype.slice;

        function queueCompile (options,previous) {
            this.model = options.module;
            this.value = options.val;
            this._previous = previous;
            this.init();
        };

        queueCompile.prototype.init = function  () {
            this.eventType = 'hook';
            this.recievHookModel = null || '?';
            this.protoName = null;
            this.prototypeMethod = null;
            this.addPrototypeToPreviousProtoMthods = {};
            this._previous.extend(this.__proto__,this._previous);
        };

        // initalization hook data.
        queueCompile.prototype.then = function () {
                // get array methods.
                var getQueueMethod = this.storageQueueMethod(arguments);
                // get module prototype object.
                var getPrototypeObject = this.assignPrototypeChain();
                // execute evey method and return he.
                var getBindObjectValue = this.executeEveryMethod(getQueueMethod);

                var geteveryModuleAcceptValue = this.everyModuleAcceptValue(getPrototypeObject,getBindObjectValue);
                this.bindDataPrototypeMethod = geteveryModuleAcceptValue;

                // return prototype chain.
                return this;
        };

        // get prototype name callback this.
        queueCompile.prototype.on = function  (options, patterns) {
            var that = this;
            var protoName = this.protoName,
                methods = this.bindDataPrototypeMethod,
                reuslts = this.outputValue,
                num = null,
                val = null,
                promise,
                arr=[];
            // check call object name.
            for(var d = 0; d < protoName.length; d++){
                if(options === protoName[d]){
                    num = d;
                    promise = methods[num];
                    val = reuslts[num];
                    break;
                }
            }
            // if reader no parameters.
            if(!options){
                options = 'get model';
                // push a new name replace the expression.
                protoName.push(options);
                for(var g = 0; g < protoName.length; g++){
                    // if not, there would return the last method.
                    if(options === protoName[g]){
                        num = g;
                        promise = methods[num] ? methods[num] : function (options) {return options};
                        val = reuslts[num] ? reuslts[num] : null;
                        break;
                    }
                }
            }
            // call my self. the prototype of original inheritance expression function, complate the return of the context into arguments first.
            for (var i = 0; i < protoName.length; i++) {
                arr.push(that[protoName[i]]);
            }
            if(patterns){
                this.handlerChainMethod(patterns,promise,protoName,val,num,arr);
            }
            // so we are add a model methods in last.
            else{
                this.handlerChainMethod((function (fn,value) {fn(value)}),promise,protoName,val,num,arr);
            }
            return this
        };

        /*  
            handler output prototype chain model.
            @patterns => function(){}
            @promise  => (fun,fun...)
            @protoName => [name1,name2,name3]
            @val => then()
            @num => 1,2,3..
            @arr => [this[name]]  bind chain method.
        */
        queueCompile.prototype.handlerChainMethod = function  (patterns,promises,protoName,val,num,arr) {
            var savePrototypeMethod=[],
                intoQueue=[],
                that = this;

            if(this.isFun(patterns)){
                // execute invoker on the method.
                [patterns].forEach(function  (methods) {
                    // output api method.
                    methods( function  () { //  = api
                        // output chain method into transfer parameters. when execute api() auto implement promise(). promise() == chain()
                        promises( (function  (v) { // this (v) can be used auto call as first param.
                            var there = this;

                            return function  (arrProtoModel) {
                                var allName = protoName;
                                // if num do not call first method.
                                if(num){
                                    var len = arrProtoModel.length;
                                    // arrProtoModel is all prototype medel.
                                    if(len > 0){
                                        for (var j = 0; j < len; j++) {
                                            // call forward method.  < num
                                            if(j < num){
                                                if(!that.addPrototypeToPreviousProtoMthods.hasOwnProperty(allName[j])){
                                                    var pre = j;
                                                    // save all the prototype chain methods.
                                                    if(j) savePrototypeMethod.push(new arrProtoModel[j]((that.addPrototypeToPreviousProtoMthods[allName[--pre]]),v));
                                                    // else it's first methods.
                                                    else savePrototypeMethod.push(new arrProtoModel[j](v));
                                                    pre = 0;
                                                    break;
                                                }
                                            }
                                            else{
                                                return false;
                                            }
                                        }
                                        // add forward method into void object.
                                        for (var n = 0; n < allName.length; n++) {
                                            if(n < num){
                                                // if the object is null then add a new object.
                                                if(!that.addPrototypeToPreviousProtoMthods.hasOwnProperty(allName[n])){
                                                    // add a wild methods.
                                                    // output this method as the replace first parameters.
                                                    that.addPrototypeToPreviousProtoMthods[allName[n]] = savePrototypeMethod.shift();
                                                    break;
                                                }
                                            }
                                        }
                                    }

                                    return that.addPrototypeToPreviousProtoMthods;
                                }
                                // else it is call first method.
                                else{
                                    // first non transfer param.
                                    that.outputValue.unshift(0);
                                    return false;
                                }
                                
                            }.call(this,
                            // get other methods.
                            arr);
                        // implement the auto execute function as a parameters.
                        })(val),val);
                    },val)
                })
            }
        }

        // realize reader model.
        queueCompile.prototype.reader = function  (options) {
            var searchChain,lastName,allName = this.protoName;
            lastName = allName.reverse().shift();
            allName = allName.reverse();
            // if not option select that add a string replace hook method. 'get model'
            if(!options){
                options = 'get model';
            }
            if(this.isStr(options)){
                if( this.indexof(allName, options) > 0 ){
                    if(options in this.addPrototypeToPreviousProtoMthods) searchChain = this.addPrototypeToPreviousProtoMthods[options];
                }
                else {
                    var lastMaybeInvoker = lastName;
                    allName.push(lastName);
                    this.on();
                    searchChain = this.addPrototypeToPreviousProtoMthods[lastMaybeInvoker];
                }
            }

            return searchChain;
            // this.outputResult = ;
        };

        // give the prototype chain bind value. 
        queueCompile.prototype.everyModuleAcceptValue = function  (options,patterns) {
            /*
                use V8 engine add object values to function and method.
                call default javascript type.  value = function || object || number || string
                last banding data on the peototype chain.
                exmple: bug1(value[1]) bug2(value[2])
            */
            var finallyInjectDataToPrototypeChain,
                i = 0,
                everyPrototypeChain = options,
                getValue = patterns,
                saveInjectDateOfMethod = [];

            // loop every chain method.
            while(i < everyPrototypeChain.length){
                // inject data and pattern to every prototype chain of the methods.
                finallyInjectDataToPrototypeChain = everyPrototypeChain[i].bind.apply(everyPrototypeChain[i],[getValue[i]]);

                saveInjectDateOfMethod.push(finallyInjectDataToPrototypeChain);
                i++;
            }
            return saveInjectDateOfMethod;
        }

        // execute each methods.
        queueCompile.prototype.executeEveryMethod = function  (options) {
            var outputEveryMethods = [],getArgumentMethods = options,val = this.value;
            // return the result Binding to Function. [fun1(options[0]),fun2(options[1])]
            for (var j = 0; j < getArgumentMethods.length; j++) {
                // at every method binding a values. Value = {0 : val01, 1 : val02};
                outputEveryMethods[j]  = [val].reduce(getArgumentMethods[j],val);
            }
            this.outputValue = outputEveryMethods;
            return outputEveryMethods;
        }

        // save queue function and methods.
        queueCompile.prototype.storageQueueMethod = function  (options) {
            var args,outputReceivesMethod;
            args = ARRSLICE_HOOK.call(options);
            if (args.length > 0) {
                outputReceivesMethod = this.preparedListenMethods(args);
            }
            return outputReceivesMethod;
        }

        // reset preototype chain methods in this pointer.
        queueCompile.prototype.assignPrototypeChain = function  () {
            var getPrototypeChain,savePrototypeObject=[],saveChainName=[];

            // get children origin chain. getPrototypeChain
            getPrototypeChain = this.getModelPrototypeInheritance();

            // remove current prototype chain. reset assign prototype chain.
            for (var prop in getPrototypeChain.__proto__){
                this.__proto__[prop] = getPrototypeChain[prop];
                saveChainName.push(prop);
                savePrototypeObject.push.call(savePrototypeObject,getPrototypeChain[prop]);
            }
            // save prototype inherit name.
            this.protoName = saveChainName;
            // cache storage.
            // delete saveChainName;
            this.prototypeMethod = savePrototypeObject;
            return savePrototypeObject;
        }

        // get prototype chain methods.
        queueCompile.prototype.getModelPrototypeInheritance = function  () {

            function blank () {};

            function queueApply () {};

            // create a new constructor.
            var createConstructorModel = this.parseStringAsObjectAndMethos();
            
            // if true i can try catch in the method.
            if(!createConstructorModel) return false;

            blank.prototype = createConstructorModel.prototype;

            // get instance inherit.
            queueApply.prototype = new blank;

            // get instance inherit again.
            var childrenModel = new queueApply();

            // put childrenModel inheritance in constructor.
            queueApply.prototype.constructor = childrenModel;

            // changed constructor menthod pointer to parse object and function.
            var getPrototypeChain = queueApply.prototype;

            return getPrototypeChain;
        }

        // ready listener mothods.
        queueCompile.prototype.preparedListenMethods = function  () {
            var preparedArray = [],
                args,
                getArgs;
            // rebuild Array function method binding mechanism.
            for (var k = 0,args = arguments[0]; k < args.length; k++){
                getArgs = queueCompile.bind.call(args[k], args[k]);
                preparedArray.push(getArgs);
            }
            return preparedArray;
        };

        // relize parse model.
        queueCompile.prototype.parseStringAsObjectAndMethos = function  (param) {
            param = param ? param : this.model;
            if (this.isStr(param)){
                param = eval(param);
                if(this.isFun(param)){
                    return param;
                }
                else {
                    return false;
                }
            } 
            return param;
        };

        // Default global properties.
        var doc = exports.document || document;
        function REO (element, options ) {
            this.options = (new order(element, options )) || {};
            return this.options;
        };
        // Add a val in the method. it is Okay.
        var order = function ( element, options ) {};
        order.prototype = {

            version : "0.0.4",

            dom : function(options) {
                return document.querySelector(options)
            },

            append : function  (dom, options) {
                return dom.appendChild(options);
            },

            text : function  (dom, options) {
                return dom.innerHTML = options;
            },

            blank : function () {},

            isStr : function(options) {
                return typeof(options) === 'string'
            },

            isObj : function(options) {
                return typeof(options) === 'object'
            },

            isFun : function(options) {
                return typeof(options) === 'function'
            },

            isNum : function(options) {
                return typeof(options) === 'number'
            },

            isArr : function(options) {
                return typeof(options) === 'array'
            },

            trim : function(options) {
                return  options.replace(/(\s*)/g,'');
            },

            extend : function(prop, options) {
                for (var pop in options) {
                    if (pop in prop) {
                        prop[pop] = options[pop]
                    }
                    prop[pop] = options[pop]
                }
                return prop
            },

            indexof : function (prop , options) {
                for (var i = 0; i < prop.length; i++) {
                    if( prop[i] === options ){
                        return 1;
                    }
                }
                return -1;
            },

            debug : function (options) {
                function warn (options, log) {
                    options.call(this, log.options);
                }
                return warn(function  (options) {
                    window.console.warn(options);
                },{ options : options ? options : 'disable write. call function error'})
            },

            // return hook method that output hook prototype chain.
            hook : function  (options) {
                // instance a hook method for recieving original chain.
                return new queueCompile(options,this)
            },

            // return a chain method.
            chain : function  (options) {
                return new promiseCompile(options,this)
            },
            
            // got template function 
            template : function  (options) {
                return new template(options,this)
            }
        };


        var _build = new REO();
        /*simply api*/
        reo.version = _build.version;
        reo.dom = _build.dom;
        reo.append = _build.append;
        reo.text = _build.text;
        reo.blank = _build.blank;
        reo.isStr = _build.isStr;
        reo.isObj = _build.isObj;
        reo.isFun = _build.isFun;
        reo.isNum = _build.isNum;
        reo.isArr = _build.isArr;
        reo.trim = _build.trim;
        reo.extend = _build.extend;
        reo.indexof = _build.indexof;
        reo.debug = _build.debug;
        /*multi api*/
        reo.hook = _build.hook;
        reo.chain = _build.chain;
        reo.template = _build.template;
    });
})(typeof window !== 'undefined' ? this : global);