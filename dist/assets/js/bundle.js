/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Header/Header.ts":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const template = document.createElement('template');
template.innerHTML = `
    <style>
        #header{
            width: 100%;
            display: flex;
            background-color: red;
            justify-content: space-between;
        }
    </style>
    <div id='header'>
        <nav-menu></nav-menu>
    </div>
`;
class Header extends HTMLElement {
    constructor() {
        var _a;
        super();
        this.attachShadow({ mode: 'open' });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(template.content.cloneNode(true));
    }
}
exports["default"] = Header;


/***/ }),

/***/ "./src/components/NavMenu/Navmenu.ts":
/*!*******************************************!*\
  !*** ./src/components/NavMenu/Navmenu.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const template = document.createElement('template');
template.innerHTML = `
    <style>
    .menu__icon{
        background-image: url('/src/img/Menu.svg');
        background-repeat: no-repeat;
        background-position: center;
        width: 55px;
        height: 55px;
        display: inline-block;
    }

    .logo__titulo{
        display: none;
    }

    .menu__button{
        display: none;
    }

    .list__menu{
        display: none;
        list-style: none;
    }

    .menu__button:checked~.list__menu{
        display: block;
        position: absolute;
        top: 2.5em;
        left: 0;
        width: 15em;
        box-shadow: 0px 2px 2px black;
        background-color: var(--branco);
        z-index: 2;
        padding: 0;
    }

    .list__menu-options{
        margin-top: 1em;
        text-transform: uppercase;
        padding: 1em;
    }

    .list__menu-title{
        color: var(--laranja);
        font-weight: 700;
    }

    .list__menu-links{
        background: var(--azul-degrade);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        cursor: pointer;
        font-weight: 400;
    }

    .list__menu-options:not(:first-child):hover {
       background-color: rgb(176, 227, 237);
    }

    .menu__button:checked~.rotulo__menu>.menu__icon{
        background-image: url("/img/Menu-Aberto.png");
        background-repeat: no-repeat;
        background-position: center;
        width: 55px;
        height: 55px;
        display: inline-block;

    }

    .titulo__button{
        display: none;
    }

    @media screen and (min-width: 1024px) {

        .menu__icon{
           display: none;
        }

        .list__menu-title{
            display: none;
        }

        .titulo__button{
            display: block;
        }
    }

    </style>

    <input type="checkbox" id="menu" class="menu__button">
    <label for="menu">
        <span class="menu__icon"></span>
    </label>
    <ul class="list__menu">
        <li class="list__menu-options">
            <span class="list__menu-title">Categorias</span>
        </li>
        <li class="list__menu-options">
            <a class="list__menu-links" href="#">Programação</a>
        </li>
        <li class="list__menu-options">
            <a class="list__menu-links" href="#">Front-end</a>
        </li>
        <li class="list__menu-options">
            <a class="list__menu-links" href="#">Infraestrutura</a>
        </li>
        <li class="list__menu-options">
            <a class="list__menu-links" href="#">Business</a>
        </li>
        <li class="list__menu-options">
            <a class="list__menu-links" href="#">Design & UX</a>
        </li>
        <li class="desktop__menu-options">
            <a class="desktop__menu-links" href="#">Favoritos</a>
        </li>
        <li class="desktop__menu-options">
            <a class="desktop__menu-links" href="#">Minha estante</a>
        </li>
    </ul>
`;
class NavMenu extends HTMLElement {
    constructor() {
        var _a;
        super();
        console.log('criado');
        this.attachShadow({ mode: 'open' });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(template.content.cloneNode(true));
    }
}
exports["default"] = NavMenu;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Header_1 = __importDefault(__webpack_require__(/*! ./components/Header/Header */ "./src/components/Header/Header.ts"));
const Navmenu_1 = __importDefault(__webpack_require__(/*! ./components/NavMenu/Navmenu */ "./src/components/NavMenu/Navmenu.ts"));
customElements.define('header-top', Header_1.default);
customElements.define('nav-menu', Navmenu_1.default);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map