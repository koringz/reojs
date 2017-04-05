import order_model from "./reo.order";

function REO(element, options) {
        this.options = new order_model(element, options) || {};
        return this.options
    };

window.REO = REO;

