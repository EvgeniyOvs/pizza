webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/Info/info.module.scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/Orders/orders.module.scss":
false,

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
false,

/***/ "./src/img/empty.png":
false,

/***/ "./src/img/order_complete.png":
false,

/***/ "./src/shared/AppComponent/AppComponent.tsx":
/*!**************************************************!*\
  !*** ./src/shared/AppComponent/AppComponent.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AppComponent = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Layout_1 = __webpack_require__(/*! ../Layout */ \"./src/shared/Layout/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\r\nvar Home_1 = __webpack_require__(/*! ../Home */ \"./src/shared/Home/index.ts\");\r\n__webpack_require__(/*! ../../img/pizza/1.png */ \"./src/img/pizza/1.png\");\r\n__webpack_require__(/*! ../../img/pizza/2.png */ \"./src/img/pizza/2.png\");\r\n__webpack_require__(/*! ../../img/pizza/3.png */ \"./src/img/pizza/3.png\");\r\n__webpack_require__(/*! ../../img/pizza/4.png */ \"./src/img/pizza/4.png\");\r\n__webpack_require__(/*! ../../img/pizza/5.png */ \"./src/img/pizza/5.png\");\r\n__webpack_require__(/*! ../../img/pizza/6.png */ \"./src/img/pizza/6.png\");\r\n__webpack_require__(/*! ../../img/pizza/7.png */ \"./src/img/pizza/7.png\");\r\n__webpack_require__(/*! ../../img/pizza/8.png */ \"./src/img/pizza/8.png\");\r\n// import Orders from \"../Orders/Orders\";\r\nvar FullPizza_1 = __importDefault(__webpack_require__(/*! ../FullPizzas/FullPizza */ \"./src/shared/FullPizzas/FullPizza.tsx\"));\r\nvar NotFound_1 = __importDefault(__webpack_require__(/*! ../NotFound/NotFound */ \"./src/shared/NotFound/NotFound.tsx\"));\r\nvar Orders = (0, react_1.lazy)(function () {\r\n    return Promise.resolve().then(function () { return __importStar(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './screens/Products/List'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))); }).then(function (_a) {\r\n        var Orders = _a.Orders;\r\n        return ({ default: Orders });\r\n    });\r\n});\r\nfunction AppComponent() {\r\n    //определяем изменение в инпуте\r\n    //определяем есть ли добавленые карточки в корзине\r\n    return (react_1.default.createElement(react_router_dom_1.Routes, null,\r\n        react_1.default.createElement(react_router_dom_1.Route, { path: \"/\", element: react_1.default.createElement(Layout_1.Layout, null) },\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/\", element: react_1.default.createElement(Home_1.Home, null) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/orders\", element: react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(\"div\", null, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430 \") },\r\n                    react_1.default.createElement(Orders, null)) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/pizza/:id\", element: react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(\"div\", null, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430 \") },\r\n                    react_1.default.createElement(FullPizza_1.default, null)) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"*\", element: react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(\"div\", null, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430 \") },\r\n                    react_1.default.createElement(NotFound_1.default, null)) }))));\r\n}\r\nexports.AppComponent = AppComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/AppComponent/AppComponent.tsx?");

/***/ }),

/***/ "./src/shared/AppComponent/index.ts":
/*!******************************************!*\
  !*** ./src/shared/AppComponent/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AppComponent */ \"./src/shared/AppComponent/AppComponent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/AppComponent/index.ts?");

/***/ }),

/***/ "./src/shared/Icons/Add.tsx":
false,

/***/ "./src/shared/Icons/ArrowLeft.tsx":
false,

/***/ "./src/shared/Icons/BasketBlack.tsx":
false,

/***/ "./src/shared/Icons/DeleteButon.tsx":
false,

/***/ "./src/shared/Icons/Remove.tsx":
false,

/***/ "./src/shared/Icons/Trash.tsx":
false,

/***/ "./src/shared/Info/Info.tsx":
false,

/***/ "./src/shared/Info/index.ts":
false,

/***/ "./src/shared/Info/info.module.scss":
false,

/***/ "./src/shared/Orders/OrderItem/OrderItem.tsx":
false,

/***/ "./src/shared/Orders/OrderItem/index.ts":
false,

/***/ "./src/shared/Orders/Orders.tsx":
false,

/***/ "./src/shared/Orders/index.ts":
false,

/***/ "./src/shared/Orders/orders.module.scss":
false

})