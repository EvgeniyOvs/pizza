webpackHotUpdate("main",{

/***/ "./src/shared/AppComponent/AppComponent.tsx":
/*!**************************************************!*\
  !*** ./src/shared/AppComponent/AppComponent.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AppComponent = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Layout_1 = __webpack_require__(/*! ../Layout */ \"./src/shared/Layout/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\r\nvar Home_1 = __webpack_require__(/*! ../Home */ \"./src/shared/Home/index.ts\");\r\n__webpack_require__(/*! ../../img/pizza/1.png */ \"./src/img/pizza/1.png\");\r\n__webpack_require__(/*! ../../img/pizza/2.png */ \"./src/img/pizza/2.png\");\r\n__webpack_require__(/*! ../../img/pizza/3.png */ \"./src/img/pizza/3.png\");\r\n__webpack_require__(/*! ../../img/pizza/4.png */ \"./src/img/pizza/4.png\");\r\n__webpack_require__(/*! ../../img/pizza/5.png */ \"./src/img/pizza/5.png\");\r\n__webpack_require__(/*! ../../img/pizza/6.png */ \"./src/img/pizza/6.png\");\r\n__webpack_require__(/*! ../../img/pizza/7.png */ \"./src/img/pizza/7.png\");\r\n__webpack_require__(/*! ../../img/pizza/8.png */ \"./src/img/pizza/8.png\");\r\n// import Orders from \"../Orders/Orders\";\r\nvar FullPizza_1 = __importDefault(__webpack_require__(/*! ../FullPizzas/FullPizza */ \"./src/shared/FullPizzas/FullPizza.tsx\"));\r\nvar NotFound_1 = __importDefault(__webpack_require__(/*! ../NotFound/NotFound */ \"./src/shared/NotFound/NotFound.tsx\"));\r\nvar Orders = react_1.default.lazy(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ../Orders */ \"./src/shared/Orders/index.ts\")); }); });\r\nfunction AppComponent() {\r\n    //определяем изменение в инпуте\r\n    //определяем есть ли добавленые карточки в корзине\r\n    return (react_1.default.createElement(react_router_dom_1.Routes, null,\r\n        react_1.default.createElement(react_router_dom_1.Route, { path: \"/\", element: react_1.default.createElement(Layout_1.Layout, null) },\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/\", element: react_1.default.createElement(Home_1.Home, null) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/orders\", element: react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(\"div\", null, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430 \") },\r\n                    react_1.default.createElement(Orders, null)) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/pizza/:id\", element: react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(\"div\", null, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430 \") },\r\n                    react_1.default.createElement(FullPizza_1.default, null)) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"*\", element: react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(\"div\", null, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430 \") },\r\n                    react_1.default.createElement(NotFound_1.default, null)) }))));\r\n}\r\nexports.AppComponent = AppComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/AppComponent/AppComponent.tsx?");

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

/***/ "./src/shared/Orders/Orders.tsx":
/*!**************************************!*\
  !*** ./src/shared/Orders/Orders.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar orders_module_scss_1 = __importDefault(__webpack_require__(/*! ./orders.module.scss */ \"./src/shared/Orders/orders.module.scss\"));\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar empty_png_1 = __importDefault(__webpack_require__(/*! ../../img/empty.png */ \"./src/img/empty.png\"));\r\nvar order_complete_png_1 = __importDefault(__webpack_require__(/*! ../../img/order_complete.png */ \"./src/img/order_complete.png\"));\r\nvar Text_1 = __webpack_require__(/*! ../../shared/Text */ \"./src/shared/Text/index.ts\");\r\nvar BasketBlack_1 = __webpack_require__(/*! ../Icons/BasketBlack */ \"./src/shared/Icons/BasketBlack.tsx\");\r\nvar Trash_1 = __webpack_require__(/*! ../Icons/Trash */ \"./src/shared/Icons/Trash.tsx\");\r\nvar Info_1 = __webpack_require__(/*! ../Info */ \"./src/shared/Info/index.ts\");\r\nvar ArrowLeft_1 = __webpack_require__(/*! ../Icons/ArrowLeft */ \"./src/shared/Icons/ArrowLeft.tsx\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar OrderItem_1 = __webpack_require__(/*! ./OrderItem */ \"./src/shared/Orders/OrderItem/index.ts\");\r\nvar cartSlice_1 = __webpack_require__(/*! ../../redux/slices/cartSlice */ \"./src/redux/slices/cartSlice.tsx\");\r\nvar delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };\r\nfunction Orders() {\r\n    var _this = this;\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var _a = (0, react_redux_1.useSelector)(cartSlice_1.selectCart), items = _a.items, totalPrice = _a.totalPrice;\r\n    var totalCount = items.reduce(function (sum, item) { return sum + item.count; }, 0);\r\n    var onClickClear = function () {\r\n        if (window.confirm('Очистить корзину?')) {\r\n            dispatch((0, cartSlice_1.clearItem)());\r\n        }\r\n    };\r\n    //определяем состояние корзины\r\n    var _b = react_1.default.useState(false), isOrderComplete = _b[0], setOrderIsComplete = _b[1];\r\n    //меняем id заказа\r\n    var _c = react_1.default.useState(null), orderId = _c[0], setOrderId = _c[1];\r\n    //очищаем корзину через контекст\r\n    var onClickOrder = function () { return __awaiter(_this, void 0, void 0, function () {\r\n        var data, e_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 3, , 4]);\r\n                    return [4 /*yield*/, axios_1.default.post('http://localhost:3002/orders', { items: items })];\r\n                case 1:\r\n                    data = (_a.sent()).data;\r\n                    setOrderId(data.id);\r\n                    setOrderIsComplete(true);\r\n                    //     //очищаем визально добавление в корзину и корзину\r\n                    return [4 /*yield*/, delay(1000)];\r\n                case 2:\r\n                    //     //очищаем визально добавление в корзину и корзину\r\n                    _a.sent();\r\n                    dispatch((0, cartSlice_1.clearItem)());\r\n                    return [3 /*break*/, 4];\r\n                case 3:\r\n                    e_1 = _a.sent();\r\n                    alert('Не удалось создать заказ');\r\n                    return [3 /*break*/, 4];\r\n                case 4: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); };\r\n    return (react_1.default.createElement(\"div\", { className: orders_module_scss_1.default.orders }, items.length > 0\r\n        //если в корзине есть карточки рендерим их, если нет заглушку инфо\r\n        ? (react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(\"div\", { className: orders_module_scss_1.default.orders__top },\r\n                react_1.default.createElement(\"div\", { className: orders_module_scss_1.default.orders__title },\r\n                    react_1.default.createElement(\"div\", { className: orders_module_scss_1.default.orders__remove },\r\n                        react_1.default.createElement(BasketBlack_1.BasketBlack, null)),\r\n                    react_1.default.createElement(Text_1.Text, { As: 'h1', size: 24, color: Text_1.Ecolor.black, weight: 700 }, \"\\u041A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0430\")),\r\n                react_1.default.createElement(\"div\", { onClick: onClickClear, className: orders_module_scss_1.default.orders__clear },\r\n                    react_1.default.createElement(\"div\", { className: orders_module_scss_1.default.orders__trash },\r\n                        react_1.default.createElement(Trash_1.Trash, null)),\r\n                    react_1.default.createElement(Text_1.Text, { size: 16, color: Text_1.Ecolor.grey8D, weight: 400 }, \"\\u041E\\u0447\\u0438\\u0441\\u0442\\u0438\\u0442\\u044C \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443\"))),\r\n            react_1.default.createElement(\"div\", { className: orders_module_scss_1.default.orders__wrapper },\r\n                react_1.default.createElement(\"ul\", { className: orders_module_scss_1.default.list }, items.map(function (item) { return (react_1.default.createElement(OrderItem_1.OrderItem, __assign({ key: item.id }, item))); })),\r\n                react_1.default.createElement(\"div\", { className: orders_module_scss_1.default.price },\r\n                    react_1.default.createElement(\"ul\", { className: orders_module_scss_1.default.price__list },\r\n                        react_1.default.createElement(\"li\", { className: orders_module_scss_1.default.price__item },\r\n                            react_1.default.createElement(Text_1.Text, { size: 20, mobileSize: 16, color: Text_1.Ecolor.black }, \"\\u0412\\u0441\\u0435\\u0433\\u043E \\u043F\\u0438\\u0446\\u0446:\"),\r\n                            react_1.default.createElement(\"div\", { className: orders_module_scss_1.default.dashed }),\r\n                            react_1.default.createElement(Text_1.Text, { size: 20, mobileSize: 16, color: Text_1.Ecolor.black, weight: 700 },\r\n                                totalCount,\r\n                                \" \\u0448\\u0442.\")),\r\n                        react_1.default.createElement(\"li\", { className: orders_module_scss_1.default.price__item },\r\n                            react_1.default.createElement(Text_1.Text, { size: 20, mobileSize: 16, color: Text_1.Ecolor.black }, \"\\u0421\\u0443\\u043C\\u043C\\u0430 \\u0437\\u0430\\u043A\\u0430\\u0437\\u0430:\"),\r\n                            react_1.default.createElement(\"div\", { className: orders_module_scss_1.default.dashed }),\r\n                            react_1.default.createElement(Text_1.Text, { size: 20, mobileSize: 16, color: Text_1.Ecolor.orange, weight: 700 },\r\n                                totalPrice,\r\n                                \" \\u0440\\u0443\\u0431.\")))),\r\n                react_1.default.createElement(\"div\", { className: orders_module_scss_1.default.btn },\r\n                    react_1.default.createElement(react_router_dom_1.Link, { to: \"/\" },\r\n                        react_1.default.createElement(\"button\", { className: orders_module_scss_1.default.btn__back },\r\n                            react_1.default.createElement(\"span\", { className: orders_module_scss_1.default.arrow },\r\n                                react_1.default.createElement(ArrowLeft_1.ArrowLeft, null)),\r\n                            react_1.default.createElement(Text_1.Text, { size: 16, color: Text_1.Ecolor.greyCA, weight: 400 }, \"\\u0412\\u0435\\u0440\\u043D\\u0443\\u0442\\u044C\\u0441\\u044F \\u043D\\u0430\\u0437\\u0430\\u0434\"))),\r\n                    react_1.default.createElement(\"button\", { onClick: onClickOrder, className: orders_module_scss_1.default.btn__complete },\r\n                        react_1.default.createElement(Text_1.Text, { size: 16, color: Text_1.Ecolor.white, weight: 400 }, \"\\u041E\\u0444\\u043E\\u0440\\u043C\\u0438\\u0442\\u044C \\u0437\\u0430\\u043A\\u0430\\u0437\"))))))\r\n        : (react_1.default.createElement(Info_1.Info\r\n        //меняем данные в заглушке\r\n        , { \r\n            //меняем данные в заглушке\r\n            image: isOrderComplete ? order_complete_png_1.default : empty_png_1.default, title: isOrderComplete ? \"Заказ оформлен\" : \"Корзина пустая\", description: isOrderComplete ? \"\\u0412\\u0430\\u0448 \\u0437\\u0430\\u043A\\u0430\\u0437 \\u2116\".concat(orderId, \" \\u0441\\u043A\\u043E\\u0440\\u043E \\u0431\\u0443\\u0434\\u0435\\u0442 \\u043F\\u0435\\u0440\\u0435\\u0434\\u0430\\u043D \\u043A\\u0443\\u0440\\u044C\\u0435\\u0440\\u0441\\u043A\\u043E\\u0439 \\u0434\\u043E\\u0441\\u0442\\u0430\\u0432\\u043A\\u0435\") : \"Вероятней всего, вы не заказывали ещё пиццу.\\n\" +\r\n                \"Для того, чтобы заказать пиццу, перейди на главную страницу.\" }))));\r\n}\r\nexports.default = Orders;\r\n\n\n//# sourceURL=webpack:///./src/shared/Orders/Orders.tsx?");

/***/ }),

/***/ "./src/shared/Orders/index.ts":
/*!************************************!*\
  !*** ./src/shared/Orders/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Orders */ \"./src/shared/Orders/Orders.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Orders/index.ts?");

/***/ })

})