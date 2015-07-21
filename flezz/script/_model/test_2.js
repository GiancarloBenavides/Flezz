(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        return define(['jquery'], function ($) {
            return factory($, window, document);
        });
    } else if (typeof exports === 'object') {
        return module.exports = factory(require('jquery'), window, document);
    } else {
        return factory(jQuery, window, document);
    }
})