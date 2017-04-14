(function  (exports) {
// Default global properties.
var doc = exports.document || document;
function REO (element, options ) {
    this.options = new order(element, options ) || {};
    return this.options;
};
// Add a val in the method. it is Okay.
var order = function ( element, options ) {};
order.prototype = {
    dom : function(options) {
        return document.querySelector(options)
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

    msg : function () {},

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
        return new exports.hook(options,this)
    },

    // return a chain method.
    chain : function  (options) {
        return new exports.chain(options,this)
    }
};

if(typeof module !== 'undefined' && module.exports && window.module !== module){
    module.exports = REO;
}
else if( typeof define === 'function' && define.amd){
    define('REO',[],'REO');
}
else{
    exports.reo = REO;
}
})(typeof window !== 'undefined' ? this : global);
