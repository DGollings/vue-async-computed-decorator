"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var vue_class_component_1 = require("vue-class-component");
function AsyncComputed(computedOptions) {
    return vue_class_component_1.createDecorator(function (options, key) {
        options.asyncComputed = options.asyncComputed || {};
        if (options.methods === undefined) {
            throw new Error("methods is undefined");
        }
        var method = options.methods[key];
        options.asyncComputed[key] = __assign({ get: method }, computedOptions);
        delete options.methods[key];
    });
}
exports["default"] = AsyncComputed;
