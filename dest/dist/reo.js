"use strict";

var _reo = require("./reo.order");

var _reo2 = _interopRequireDefault(_reo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reo(element, options) {
        this.options = new _reo2.default(element, options) || {};
        return this.options;
};

window.reo = reo;
//# sourceMappingURL=reo.js.map
