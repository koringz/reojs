
export function HandlebarsEnvironment(helpers, partials, decorators) {

  return {
  	defaults : 'output handle function object',
  	helpers : helpers,
  	partials : partials,
  	decorators : decorators
  }
}
