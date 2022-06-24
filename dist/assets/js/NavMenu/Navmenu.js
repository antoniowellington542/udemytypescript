"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var template = document.createElement('template');
template.innerHTML = "\n    <style>\n    .menu__icon{\n        background-image: url('/src/img/Menu.svg');\n        background-repeat: no-repeat;\n        background-position: center;\n        width: 55px;\n        height: 55px;\n        display: inline-block;\n    }\n\n    .logo__titulo{\n        display: none;\n    }\n\n    .menu__button{\n        display: none;\n    }\n\n    .list__menu{\n        display: none;\n        list-style: none;\n    }\n\n    .menu__button:checked~.list__menu{\n        display: block;\n        position: absolute;\n        top: 2.5em;\n        left: 0;\n        width: 15em;\n        box-shadow: 0px 2px 2px black;\n        background-color: var(--branco);\n        z-index: 2;\n        padding: 0;\n    }\n\n    .list__menu-options{\n        margin-top: 1em;\n        text-transform: uppercase;\n        padding: 1em;\n    }\n\n    .list__menu-title{\n        color: var(--laranja);\n        font-weight: 700;\n    }\n\n    .list__menu-links{\n        background: var(--azul-degrade);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        background-clip: text;\n        cursor: pointer;\n        font-weight: 400;\n    }\n\n    .list__menu-options:not(:first-child):hover {\n       background-color: rgb(176, 227, 237);\n    }\n\n    .menu__button:checked~.rotulo__menu>.menu__icon{\n        background-image: url(\"/img/Menu-Aberto.png\");\n        background-repeat: no-repeat;\n        background-position: center;\n        width: 55px;\n        height: 55px;\n        display: inline-block;\n\n    }\n\n    .titulo__button{\n        display: none;\n    }\n\n    @media screen and (min-width: 1024px) {\n\n        .menu__icon{\n           display: none;\n        }\n\n        .list__menu-title{\n            display: none;\n        }\n\n        .titulo__button{\n            display: block;\n        }\n    }\n\n    </style>\n\n    <input type=\"checkbox\" id=\"menu\" class=\"menu__button\">\n    <label for=\"menu\">\n        <span class=\"menu__icon\"></span>\n    </label>\n    <ul class=\"list__menu\">\n        <li class=\"list__menu-options\">\n            <span class=\"list__menu-title\">Categorias</span>\n        </li>\n        <li class=\"list__menu-options\">\n            <a class=\"list__menu-links\" href=\"#\">Programa\u00E7\u00E3o</a>\n        </li>\n        <li class=\"list__menu-options\">\n            <a class=\"list__menu-links\" href=\"#\">Front-end</a>\n        </li>\n        <li class=\"list__menu-options\">\n            <a class=\"list__menu-links\" href=\"#\">Infraestrutura</a>\n        </li>\n        <li class=\"list__menu-options\">\n            <a class=\"list__menu-links\" href=\"#\">Business</a>\n        </li>\n        <li class=\"list__menu-options\">\n            <a class=\"list__menu-links\" href=\"#\">Design & UX</a>\n        </li>\n        <li class=\"desktop__menu-options\">\n            <a class=\"desktop__menu-links\" href=\"#\">Favoritos</a>\n        </li>\n        <li class=\"desktop__menu-options\">\n            <a class=\"desktop__menu-links\" href=\"#\">Minha estante</a>\n        </li>\n    </ul>\n";
var NavMenu = /** @class */ (function (_super) {
    __extends(NavMenu, _super);
    function NavMenu() {
        var _this = this;
        var _a;
        _this = _super.call(this) || this;
        console.log('criado');
        _this.attachShadow({ mode: 'open' });
        (_a = _this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(template.content.cloneNode(true));
        return _this;
    }
    return NavMenu;
}(HTMLElement));
exports.default = NavMenu;
