"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
var template = (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    <style>\n        #header{\n            width: 100%;\n            display: flex;\n            background-color: red;\n            justify-content: space-between;\n        }\n    </style>\n    <div id='header'>\n        <nav-menu></nav-menu>\n    </div>\n  "], ["\n    <style>\n        #header{\n            width: 100%;\n            display: flex;\n            background-color: red;\n            justify-content: space-between;\n        }\n    </style>\n    <div id='header'>\n        <nav-menu></nav-menu>\n    </div>\n  "])));
var NavMenu = /** @class */ (function (_super) {
    __extends(NavMenu, _super);
    function NavMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavMenu.prototype.render = function () {
        return template;
    };
    NavMenu = __decorate([
        (0, decorators_js_1.customElement)('nav-menu')
    ], NavMenu);
    return NavMenu;
}(lit_1.LitElement));
exports.default = NavMenu;
var templateObject_1;
