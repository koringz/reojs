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
        var promiseCompile = function chain ( options, previous ) {
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

        var queueCompile = function hook (options,previous) {
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
                if( ~this.indexof(allName, options) ){
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


        var ARRSLICE_template = Array.prototype.slice,
            initializationAttribute,
            closureCollection = [],
            closureAttribute = {},
            put = {},
            _ = null,
            recyles,
            o,
            q = new(function (_={a:[],puts:put}) { // this ‘a’ is a array so you can be used that ‘o’ from wilds to be imported parameters.
                return function  ($_= {}) { // save my self in the parent '$_'.
                    $_.self = _.a;  // inherit original property bind to '$_'.
                    $_.puts = _.puts;
                    // save my self.
                    $_.self.push($_);

                    var childs;
                    for(var i = 0, iterator = $_.self[0], len = iterator.length; i<len; i++){
                        closureCollection[i] = [];
                        var child = iterator[i];
                        for (var j in child ) {
                            childs = child[j];
                            try{
                                if("function" !== typeof childs){
                                    throw "你没有选择函数！" //You are not define function mehtods.
                                }
                                // output function methods save to between one object and another object.
                                switch (i) {
                                    case 0 : 
                                        closureCollection[i][j] = (childs());
                                        break;
                                    case 1: 
                                        closureCollection[i][j] = (childs);
                                        break;
                                    case 2: 
                                        closureCollection[i][j] = (childs);
                                        break;
                                    case 3: 
                                        closureCollection[i][j] = (childs);
                                        break;
                                    default :
                                        break;
                                }
                            }
                            catch(e) {throw e};
                            
                        };
                    }
                    return closureCollection
                }([
                    {
                        // first ,reset the properties.
                        1 : function  () {
                            initializationAttribute = {
                                maybeInstead : [{
                                    lbs : "{",
                                    rbs : "}"
                                }], // symbol attribute
                                doubleMaybeInstead : ['{{','}}'], // resetting symbol
                                doubleMiddleMaybeInstead : ['[[',']]'], // resetting symbol
                                threeMiddleMaybeInstead : ['[[[',']]]'], // resetting symbol
                                passing : !1, // setting switch
                                symbolSelect : 0, // invoke symbol changed
                            }
                        },
                        2 : function  () {
                            closureAttribute = {
                                isopenDoor : !1,
                                htmlNodes : {},
                                dataVal : {},
                                escapeTemplate : {},
                                appearMethodId : !1, // store an num corrspondence to the object.
                                storageMethodProcessId : [], // recieving an output value
                                lockNumberOne : 1, // lock an num
                                storageMethodkeys : {} // store a val that is used to bind methods.
                            },
                            recyles = [];
                        }
                    },

                    {
                        1 : function  () {
                            this.name = "signCompile";
                        },

                        4 : function  () {
                            this.name = 'start';
                        },

                        11 : function  () {
                            this.name = "el";
                        },

                        21 : function  () {
                            this.name = 'appendTemplate'
                        },

                        33 : function  () {
                            this.name = 'symbols'
                        },

                        50 : function  () {
                            this.name = 'transferStation';
                            // by this 'getsource' recieving 'el' method of properties.
                            this.getSource = "get data";
                        },

                        // implementing inheritance with function methods.
                        99 : function  () {
                            this.name = 'plugins';
                            /**/
                            /**/
                        },

                        // implementing inheritance with function methods.
                        100 : function  () {
                            this.name = 'complateAndEscapeAndInstead';
                            /**/
                            /**/
                        },

                        // implementing inheritance with function methods.
                        134 : function  () {
                            this.name = 'dataEscape';
                            /**/
                            /**/
                        },

                        144 : function  () {
                            this.name = 'escapeTemplate';
                            /**/
                            /**/
                        },

                        // implementing inheritance with function methods.
                        174 : function  () {
                            this.name = 'replaceEscape';
                            /**/
                            /**/
                        },

                        999 : function  ( id, options ) {
                            this.name = 'cache';
                            /**/
                            /**/
                            this._injectionId = id;
                            this._pieces = options;

                            // recyling waste.
                            if( this._injectionId !== void this._injectionId, recyles[this._injectionId] = Array.prototype ) recyles[this._injectionId].push(this._pieces);
                        },

                        1000 : function  ( id, options ) {
                            this.name = 'cleanCache';
                        },
                    },

                    {
                        1 : function  () {
                            this.name = 'get';
                            // used gesture pointer.
                        },
                        2 : function  () {
                            this.name = 'set';
                            // used gesture pointer.
                        },
                        3 : function  () {
                            this.name = 'add';
                            // used gesture pointer.
                        },
                        4 : function  () {
                            this.name = 'on';
                            // used gesture pointer.
                        }
                    },

                    {
                        6 : function  () {
                            this.name = 'gesture';
                            // used gesture pointer.
                            return {
                                linear : function  (argument) {
                                },
                                easein : function  (argument) {
                                },
                                easeout : function  (argument) {
                                }
                            }
                        }
                    }
                ])
            });


        // bind function mehtod in rename var.
        // eleven with data and el document.
        // first : properties; second : closure; third : prototype chain; fourth : __proto__ ; fivth : this gesture[6]
        o = [
            Object, /* default properties*/
            { 1: 'signCompile', 4: 'start', 11: 'el' , 21: 'appendTemplate', 33: 'symbols', 50: 'transferStation', 99: 'plugins', 100: 'complateAndEscapeAndInstead', 
            134: 'dataEscape', 144: 'escapeTemplate', 174: 'replaceEscape', 999: 'cache', 1000: 'cleanCache'}/*closure*/, 
            { 1: 'get', 2: 'set', 3:'add', 66: 'on'}/*prototype chain*/,
            { 1: 'click', 3: 'mouseover', 6: 'gesture', 11: 'atach'}/*gesture events*/
        ];


        /*
        ^ @ options is an obj.
        ^ @ The 'previous' will be proto methods by reo target.
        */
        function signCompile ( options, previous ) {
            // Extend previous method of preotype chain properties.
            // inject parameters;
            return (new o[1][99]()).instance(options,previous), put._o = o, this;
        }


        // Rename variable.
        // Get a function mehtod give rename var.
        // this is a plugins methods.
        // gets the prototype property from the parent element.
        q[1][99].prototype.constructor = o[1][99];
        o[1][99] = q[1][99];
        o[1][99].prototype.instance = function  (data,options) {
            // manager all object.
            var target = signCompile.prototype;

            if ( options !== void 0 ) {
                Object.assign(target,options);
            }
            return o[1][999](99,{parentTarget:options}), initializationAttribute.passing = !0, (new o[1][11]()).el(data), (new o[1][4]()).start();
        }

        // cache methods.
        q[1][999].prototype.constructor = o[1][999];
        o[1][999] = q[1][999];
        o[1][999].prototype.get = function  (id) {
            return recyles[id]
        }


        // this is cleanCache methods.
        q[1][1000].prototype.constructor = o[1][1000];
        o[1][1000] = q[1][1000];
        o[1][1000].prototype.cleanCache = function  (head,options) {

            var target = signCompile.prototype;
            var regs = new RegExp(/^([a-z]*([\[\d\]]*)\.)/,"i");

            // clean whitespace of the part.
            options = target.trim(options);
            //  Passing find children attr.
            var selections = Array.prototype.slice.call(Array,options).length >> 0 ? options.toLocaleLowerCase().replace(regs,"").slice(0) : null;
            // debugger;
            try{
                if(head[selections] !== void !0 || head[selections] ){
                    delete head[selections];
                }
                else {
                    throw 'no may clean waste.'
                }
            }catch(e){throw e}
        }


        // this is start game.
        q[1][4].prototype.constructor = o[1][4];
        o[1][4] = q[1][4];
        o[1][4].prototype.start = function  () {
            if( initializationAttribute.passing ){
                return (new o[1][21]()).appendTemplate(),initializationAttribute.passing = !1;
            }
        }


        // this is el and data and target.
        q[1][11].prototype.constructor = o[1][11];
        o[1][11] = q[1][11];
        o[1][11].prototype.el = function  (options) {
            var target = signCompile.prototype;
            // you need to think somethings, with a few things example
            // receving parameters and dist data and got data and reset data
            if(target.isObj(options)) put._data = options;

            return {
                init : function  (options) {
                    this.acceptMessage = put._data;
                    return this.acceptMessage
                },
                // if you are outside, that you are reset data and changed message.
                reset : function  (options) {

                },
                getdefault : function  (options) {

                },
                // with several froms preduct: {{name}} and {{if name}} {{/if}} and {{ method(name) }} and {{other}}
                dist : function  () {

                },
                source : function  (options) {
                }
            }
        }


        // this is a transfer station. be used to get data.
        // middle station setting inheritance and getting data.
        q[1][50].prototype.constructor = o[1][50];
        o[1][50] = q[1][50];
        o[1][50].prototype.set = function  (options) {

            var getEl = (new o[1][11]()).el();
            // passing init properties.
            var inheritance = getEl.init();

            this.transferData = [inheritance];

            return this
        }
        o[1][50].prototype.get = function  () {
            var params;

            // storage parameters.
            this.__proto__.get = {
                built : [],
                complate : false,
                extend : {}
            };

            // if it's true , that you will get data.
            if(closureAttribute.isopenDoor){
                params = this.transferData.pop();
            }

            // rebuilt data chain.
            this.__proto__.get.built.push({
                _target : params.target,
                _template: params.template,
                _val : params.val
            });

            return this
        }


        // put data and value add to template.
        q[1][21].prototype.constructor = o[1][21];
        o[1][21] = q[1][21];
        o[1][21].prototype.appendTemplate = function  (options) {
            var target = signCompile.prototype;

            var nodes,
                getStation = new o[1][50]();

            // setting inheritance.
            getStation.set();
            // in future got the data.
            closureAttribute.isopenDoor = !0;
            var getTotalProperties = getStation.get();

            // get a times data.
            var getData = getTotalProperties.get.built;
            // accept complate.
            getTotalProperties.get.complate = true;

            var tags = getData[0]['_target'];

            // save html node.
            return closureAttribute.htmlNodes.nodes = tags, nodes = this.node(tags), this.inner(nodes);
        }
        o[1][21].prototype.node = function  (tagName) {
            var target = signCompile.prototype;

            if(target.isStr( tagName ) ){
                tagName = target.dom(tagName)
            }
            return tagName
        }
        o[1][21].prototype.inner = function  (nodes) {
            var target = signCompile.prototype;

            var invokerResults = new o[1][100]();
            // insert module into html template.
            if( target.isStr(nodes.innerHTML) ) {
                nodes.innerHTML += invokerResults.complateAndEscapeAndInstead()
            }
        }

        // output result and complate escape.
        q[1][100].prototype.constructor = o[1][100];
        o[1][100] = q[1][100];
        o[1][100].prototype.complateAndEscapeAndInstead = function  (options) {

            var target = signCompile.prototype;

            var getStation = new o[1][50]();
            var getTotalProperties;
            // this object promise public data information. if true or else false ( personal infor).
            if(closureAttribute.isopenDoor){
                // again got the data.
                getTotalProperties = getStation.get.built;
            }

            // transfer data : this.val
            var data = getTotalProperties[0]._val;

            // save data.
            closureAttribute.dataVal.val = data;

            var resetDataForCorrent = function () {
                return (new o[1][134]()).dataEscape();
            }();

            // Immediate update informations.
            var outputResults = function () {
                return (new o[1][174]()).replaceContent(resetDataForCorrent);
            }();

            return outputResults
        }


        // construction val data for legal and may instead data example : {{name}} = {name}
        q[1][134].prototype.constructor = o[1][134];
        o[1][134] = q[1][134];
        o[1][134].prototype.dataEscape = function  (data) {
            var target = signCompile.prototype;
            var that = this;
            var getData = closureAttribute.dataVal.val;

            initializationAttribute.symbolSelect = !0;
            // about symbol.
            var con = (new q[1][33]()).symbols().getContent();

            // excute data and bind data with export this arguments.
            function constructionBindExport (options, pop, title) {

                var parent = options, publicData = pop, arr = [],contains;
                // contains = { name } or {{ name }} or [[ name ]] ...
                if(target.isStr(parent[publicData]) || target.isNum(parent[publicData]) || target.isNULL(parent[publicData]) || target.isFun(parent[publicData]) ){
                    contains = con[0] + (title ? title : publicData) + con[1];
                    // there are function method start binding parameters.
                    if( target.isFun(parent[publicData]) ){
                        closureAttribute.storageMethodProcessId[contains] = closureAttribute.lockNumberOne++;
                        closureAttribute.appearMethodId = !0;
                    }
                }

                // storage attribute value.
                arr[contains] = that.dataEscape.expressionMethods(parent[publicData],contains)

                return arr
            }

            // ready last each every object.
            function startForeachFromIterator (thirdData, concatParentElement, translateExportOfTtypeAsArguments) {

                var _thirdData = thirdData,
                    _concatTitle = concatParentElement,
                    _refreshData = translateExportOfTtypeAsArguments;

                // If the pipe in the object that condition is true.
                for( var pipe in _thirdData ){
                    // if it is a string.
                    if(target.isStr(_thirdData[pipe]) || target.isNum(_thirdData[pipe]) || target.isNULL(_thirdData[pipe]) || target.isFun(_thirdData[pipe]) ){
                        // Every times push a arguments. 
                        _refreshData.push(constructionBindExport(_thirdData,pipe,_concatTitle +'.' + pipe))
                    }
                    // Else with an object.
                    else if(target.isObj(_thirdData[pipe])){
                        var fouthData = _thirdData[pipe];
                        _concatTitle +='.' + pipe;

                        // Until all object loops final.
                        startForeachFromIterator(fouthData, _concatTitle,_refreshData)
                    }
                    else {
                        return "?"
                    }
                }
                var createAnotherResults = _refreshData;
                return createAnotherResults
            }

            // Output inject of value.
            this.dataEscape['expressionMethods'] = function  (parameters,keys) {
                // will reset data when there is function method.
                var results = parameters;
                if(closureAttribute.appearMethodId > 0){
                    results = function  () {
                        return parameters.bind.apply(parameters,[closureAttribute.storageMethodProcessId[keys]]);
                    }
                    closureAttribute.appearMethodId = !1;
                }
                return results
            }

            // Begin to bind value on the mehtod.
            this.dataEscape['group'] = function  () {

                var changePublicData,translateExportOfTtypeAsArguments=[],concatTatolParentElement;

                if(target.isObj(getData)){

                    for ( var pop in getData ){
                        // Only export value is a string.

                        if(target.isStr(getData[pop]) || target.isNum(getData[pop]) || target.isNULL(getData[pop]) || target.isFun(getData[pop]) ){
                            // storage every data and as an arguments.
                            translateExportOfTtypeAsArguments.push(constructionBindExport(getData,pop))
                        }
                        // Else pop is an object.
                        else if(target.isObj(getData[pop])){
                            // it need to first title name.
                            var secondData = getData[pop];
                            // This child is very important.
                            var child = pop;

                            for( var prop in secondData ){
                                if( target.isStr(secondData[prop]) || target.isNum(secondData[prop]) || target.isNULL(secondData[prop]) || target.isFun(secondData[prop]) ){
                                    // Reciving parameter, concat all title and bind data.
                                    translateExportOfTtypeAsArguments.push(constructionBindExport(secondData,prop,child +'.'+ prop ))
                                }
                                else if(target.isObj(secondData[prop])){

                                    var thirdData = secondData[prop]; 
                                    concatTatolParentElement = child +'.'+ prop ;
                                    // Final export all arguments.
                                    translateExportOfTtypeAsArguments = startForeachFromIterator(thirdData, concatTatolParentElement, translateExportOfTtypeAsArguments)
                                }
                            }
                        }
                    }
                }

                that.dataEscape['storage'] = translateExportOfTtypeAsArguments;

                delete translateExportOfTtypeAsArguments;
            }

            this.dataEscape['setSource'] = function  () {

                that.dataEscape['storage'] = null;

                return that.dataEscape.group(), that.dataEscape.storage
            }

            this.dataEscape['getSource'] = function () {

                return that.dataEscape.setSource()
            }

            return this.dataEscape
        }


        // Output by the complate escape content.
        q[1][174].prototype.constructor = o[1][174];
        o[1][174] = q[1][174];
        o[1][174].prototype.replaceEscape = function  (options) {
            var target = signCompile.prototype;
            var that = this;
            var results = null,complate = 1;
                // <span>{{ part }}</span>
                // <span>{{ part }}</span>
            var getEscapeTemplate = (new o[1][144]()).escapeTemplate();
            do{
                if( target.isStr(getEscapeTemplate) ){
                    getEscapeTemplate = this.extraEscape(getEscapeTemplate);

                    for(var i = 0; i < options.length; i++){

                        // Alone each object in array.
                        var eachEveryType = options[i];
                        for( var prop in eachEveryType ){
                            // If this string have a message.
                            if( getEscapeTemplate.search(prop) ){
                                // Export results.
                                getEscapeTemplate = getEscapeTemplate.replace(/(\/\/\/\/)({[a-zA-Z\d\.]+})(\/\/\/\/)/gm, function (s,d,f,g) {
                                    // Get the data we need.
                                    // If it exits. That compare data.
                                    if(f === prop){
                                        s = "";
                                        d = "";
                                        g = "";
                                        ;
                                        return f=eachEveryType[prop],f=that.handleMethodEscape(options,prop,f),that.plus(s,d,f,g);
                                    }
                                    // Else back original data.
                                    return s
                                });
                            }
                        }
                    }
                }

                complate--;
            }
            while(complate === !0);

            return this.restore(/(\/\/\/\/\{+?)([a-zA-Z\d\.]+)(\}\/\/\/\/)/gm,getEscapeTemplate),this
        }
        // handle function method.
        o[1][174].prototype.handleMethodEscape = function  (options,prop,f) {
            var target = signCompile.prototype;
            var keys,borrow;

            if(target.isFun(f)){
                // this is keys.
                keys = closureAttribute.storageMethodkeys[prop];

                // output data and value.
                for(var j = 0; j < options.length; j++){

                    // Alone each object in array.
                    var chat = options[j];

                    // get borrow data. keys == child array object
                    if( keys in chat){
                        // now i got it. real data
                        borrow = chat[keys];

                        // import data and value from foo bind and call method.
                        closureAttribute.storageMethodProcessId[prop] = borrow;

                        f = f()(closureAttribute.storageMethodProcessId[prop])
                    }
                }
            }

            return f
        }
        // handle over part of data.
        o[1][174].prototype.extraEscape = function  (options) {
            var REG = RegExp(/(\$group)/,'gm');
            if( REG.exec(options) !== null){
                options = options.replace(REG,"");
            }
            return options

        }
        o[1][174].prototype.replaceContent = function  (options) {
            var target = signCompile.prototype;
            // options = reader = {
            //  {name} : input
            // }
            if( target.isFun(options) ){
                options = options.getSource();
            }

            return this.replaceEscape(options), this._getEscapeTemplate
        }
        // no search no handling.
        o[1][174].prototype.restore = function  (options,tmpl) {
            var that = this;
            if(options.exec(tmpl)){
                tmpl = tmpl.replace( options,function  (j,k,d,e) {
                    k = initializationAttribute.doubleMaybeInstead[0];
                    e = initializationAttribute.doubleMaybeInstead[1];
                    return that.plus(k,d,e)
                })
            }
            this._getEscapeTemplate = tmpl;
        }
        o[1][174].prototype.plus = function () {
            var total='';
            for(var args = arguments,len=arguments.length,j=0; j<len;j++){
                total += args[j]
            }
            return total
        }


        // as a special symbol of reconstruction methods.
        q[1][33].prototype.constructor = o[1][33];
        o[1][33] = q[1][33];
        o[1][33].prototype.symbols = function  (vir, options = {}) {
            // difne attr via
            var target = signCompile.prototype,
                isEmpty = vir,
                i = 0,
                that = this;

            // setting an empty object is used to store.
            this.spacialSymbol = options;
            // override via in the new obj.
            target.extend( this.spacialSymbol ,initializationAttribute.maybeInstead[0] );

            // rebuild a new arr store the spacial symbol.
            this.spacialSymbol.store = [];

            // on the object push symbols.
            function merge(){

                var args = arguments;

                // push in array store.
                that.spacialSymbol.store.unshift( args );

                var outputSymbolByStorageObj = that.spacialSymbol.store.pop();

                // if the args is an string for true.
                if( !target.isArr( vir ) && !target.isObj( vir ) && target.isStr( vir ) ){
                    vir = isEmpty || [];
                }

                // usable in other options.
                that.spacialSymbol.store.push(vir);

                return outputSymbolByStorageObj;
            }

            return {
                // set first the custom symbol.
                getSource : function  (options) {
                    that.spacialSymbol['lbs'] = options[0],
                    that.spacialSymbol['rbs'] = options[1]
                },
                // if need to update symbol.
                updateData : function  (options) {
                    
                    var getStorageSymbol = that.spacialSymbol.store.shift();
                    (new o[1][1000]()).cleanCache("signCompile.spacialSymbol.store");

                    // resetting spacial symbol of tools name.
                    this.getSource(getStorageSymbol);
                },

                /*
                * @ it is Prototype of the target attr.
                * @ exmple :
                * @ this.spacialSymbol.lbs And this.spacialSymbol.rbs
                */
                mergeContent : function ( options ) {

                    // check it is or not.
                    options = that.spacialSymbol = (function () {

                        if ( !(options !== void 0) ){
                            options = that.spacialSymbol;
                            return options;
                        }

                        return options;
                    })();

                    return merge.call( this.mergeContent, options.lbs, options.rbs )
                },
                // only a single symbol.
                getContent : function  (options) {
                    return this.mergeContent(options)
                }
            }
        }
        o[1][33].prototype.customSymbol = function  (options) {

            var target = signCompile.prototype;
            var reGetSymbol = this.symbols(options);
                reGetSymbol.mergeContent();

                // once update data
                reGetSymbol.updateData();

            return reGetSymbol.mergeContent();
        }
        // personal automatic regulating switch.
        o[1][33].prototype.autoAcceptSymbol = function  (options, selection) {

            var target = signCompile.prototype;
            // default set false.
            if(initializationAttribute.symbolSelect){
                selection = options
            }

            if(selection === void 0 || selection !== !0){
                // if null. into default.
                if(selection === void 0){
                    selection = null;
                }
                switch (selection){
                    case options :
                        initializationAttribute.symbolSelect = !1;
                        break;
                    default:
                        selection = initializationAttribute.doubleMaybeInstead;
                }
            }

            return this.customSymbol(selection)
        }
        o[1][33].prototype.emitSymbol = function  (options) {
            return this.autoAcceptSymbol(options)
        }


        // Got template escape content.
        q[1][144].prototype.constructor = o[1][144];
        o[1][144] = q[1][144];
        o[1][144].prototype.escapeTemplate = function () {

            var target = signCompile.prototype;
            var getStation = new o[1][50]();
            var getTotalProperties;

            // this object promise public template information. if true or else false ( personal infor).
            if(closureAttribute.isopenDoor){
                // again got the template.
                getTotalProperties = getStation.get.built;
            }

            // transfer template : this.template
            var template = this.getData(getTotalProperties);

            var getEscTpl,str,tpl,train;

            if( tpl = this.node(template), closureAttribute.escapeTemplate.tpl = tpl, getEscTpl = this.inner(tpl), target.isStr(getEscTpl) ){// save template.
                // Export results : $group///{ value ///}
                str = this.WordReplaceCharacters(getEscTpl)
            }
                
            return train = this.spacialReplaceCharacters(str('$group')),train();
        }
        o[1][144].prototype.WordReplaceCharacters = function (template) {
            var that = this;

            return function  (options, last, next ) {
                return template.replace( /(\{\{+?)([a-zA-Z].*?)(\}\})/gm ,function  (a,B,C,D) {

                    a = options,B = '////{',D = '}////';
                    return that.plus(a,B,C,D)
                });
            }
        }
        /*complateTrain*/
        o[1][144].prototype.spacialReplaceCharacters = function (template) {
            var that = this;

            function observerCharArguments (keys, arrObjString) {
                // string : (name1,name2)
                var value = arrObjString.replace( /^(\()([a-zA-Z]+.*)(\))$/i,function  (c,v,x,z) {

                    return v=initializationAttribute.maybeInstead[0].lbs,z=initializationAttribute.maybeInstead[0].rbs,that.plus(v,x,z)
                })
                return closureAttribute.storageMethodkeys[keys] = value, value
            }

            return function (options) {

                return template.replace(  /(up\/\/\/\/)(\{+?[a-zA-Z].*?)(\([a-zA-Z].*?\))(\})(\/\/\/\/)/gm ,function  (j,k,d,e,t,w) {

                    var args = e, originalChars = d + t;

                    return observerCharArguments(originalChars,args), that.plus(k,d,t,w)
                })
            }
        }
        o[1][144].prototype.node = function (template) {
            var target = signCompile.prototype;

            if(target.isStr( template ) ){
                template = target.dom(template)
            }
            return template
        }
        o[1][144].prototype.inner = function  (nodes) {
            var target = signCompile.prototype, getInerHTML;

            if( target.isStr(nodes.innerHTML) ) {
                getInerHTML = nodes.innerHTML
            }
            return getInerHTML
        }
        o[1][144].prototype.getData = function  (options, temp) {
            var target = signCompile.prototype,nodes;
            nodes = options[0]['_template'];
            return nodes
        }
        o[1][144].prototype.plus = function () {
            var total='';
            for(var args = arguments,len=arguments.length,j=0; j<len;j++){
                total += args[j]
            }
            return total
        }



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
                return doc.querySelector(options)
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

            isNULL : function  (options) {
                return typeof(options) === 'null'
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
                function dd (options) {
                    window.console.warn(options);
                }
                function warn (options, log) {
                    options.call(this, log.options);
                }
                return warn(dd,{ options : options ? options : 'disable write. call function error'})
            },

            // return hook method that output hook prototype chain.
            hook : function  (options) {
                // instance a hook method for recieving original chain.
                return new queueCompile(options,this)
            },

            // return a chain methods.
            chain : function  (options) {
                return new promiseCompile(options,this)
            },
            
            // get a template methods.
            template : function  (options) {
                return new signCompile(options,this)
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
        reo.isNULL = _build.isNULL;
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