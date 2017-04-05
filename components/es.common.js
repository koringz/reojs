const objectType = '[object Object]';

export function HandlebarsEnvironment(helpers, partials, decorators) {
	
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

}
