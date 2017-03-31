'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HandlebarsEnvironment = HandlebarsEnvironment;


var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};
}
//# sourceMappingURL=es.common.js.map
