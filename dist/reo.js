import order_model from "./reo.order";

function reo(element, options) {
        this.options = new order_model(element, options) || {};
        return this.options
    };

window.reo = reo;

