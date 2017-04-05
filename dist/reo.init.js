export function blank () {};

export function dom(options) {
        return document.querySelector(options)
    };

export function isStr(options) {
        return typeof(options) === 'string'
    };

export  function isObj(options) {
        return typeof(options) === 'object'
    };

export  function isFun(options) {
        return typeof(options) === 'function'
    };

export  function isNum(options) {
        return typeof(options) === 'number'
    };

export  function isArr(options) {
        return typeof(options) === 'array'
    };

export  function msg() {};

export  function trim(options) {
        return options.replace(/(\s*)/g, '')
    };

export  function extend(prop, options) {
        for (var pop in options) {
            if (pop in prop) {
                prop[pop] = options[pop]
            }
            prop[pop] = options[pop]
        }
        return prop
    };

export function indexof(prop, options) {
        for (var i = 0; i < prop.length; i++) {
            if (prop[i] === options) {
                return 1
            }
        }
        return -1
    };

module.exports = {
    blank : blank,
    dom : dom,
    isStr : isStr,
    isObj : isObj,
    isFun : isFun,
    isNum : isNum,
    msg : msg,
    trim : trim,
    indexof : indexof,
    extend : extend
}