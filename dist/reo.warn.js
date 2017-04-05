function warn(options, log) {
        return function() {
            options.call(this, log)
        }
    };
const debug = warn(function(options) {
        window.console.warn(options)
    }, 'disable write. call function err.');

module.exports = debug;