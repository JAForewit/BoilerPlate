(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        root.MyName = factory();
    }
}(this, function () {

    'use strict';

    // PRIVATE VARIABLES

    // PRIVATE FUNCTIONS

    /*
    usage:

    new MyName (element, options)
      - or -
    new MyName (element)
    */
    function MyName(element, options) {
        var me = this;

    }

    return MyName;
}));
