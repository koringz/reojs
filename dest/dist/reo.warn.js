'use strict';

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
