"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/context/ThemeContext.js":
/*!********************************************!*\
  !*** ./components/context/ThemeContext.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext),\n/* harmony export */   \"ThemeProvider\": () => (/* binding */ ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/guinho/REST-Countries-API-with-color-theme-switcher-challenge/components/context/ThemeContext.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst ThemeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n\nconst themeReducer = (state, action) => {\n  switch (action.type) {\n    case \"CHANGE_COLOR\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        color: action.payload\n      });\n\n    case \"CHANGE_MODE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mode: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\nfunction ThemeProvider({\n  children\n}) {\n  const {\n    0: state,\n    1: dispatch\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(themeReducer, {\n    color: \"#F9F9F9\",\n    mode: \"dark\"\n  });\n\n  const changeColor = color => {\n    dispatch({\n      type: \"CHANGE_COLOR\",\n      payload: color\n    });\n  };\n\n  const changeMode = mode => {\n    dispatch({\n      type: \"CHANGE_MODE\",\n      payload: mode\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ThemeContext.Provider, {\n    value: _objectSpread(_objectSpread({}, state), {}, {\n      changeColor,\n      changeMode\n    }),\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvVGhlbWVDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRU8sTUFBTUUsWUFBWSxnQkFBR0Ysb0RBQWEsRUFBbEM7O0FBRVAsTUFBTUcsWUFBWSxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUN0QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGNBQUw7QUFDRSw2Q0FBWUYsS0FBWjtBQUFtQkcsUUFBQUEsS0FBSyxFQUFFRixNQUFNLENBQUNHO0FBQWpDOztBQUNGLFNBQUssYUFBTDtBQUNFLDZDQUFZSixLQUFaO0FBQW1CSyxRQUFBQSxJQUFJLEVBQUVKLE1BQU0sQ0FBQ0c7QUFBaEM7O0FBQ0Y7QUFDRSxhQUFPSixLQUFQO0FBTko7QUFRRCxDQVREOztBQVdPLFNBQVNNLGFBQVQsQ0FBdUI7QUFBRUMsRUFBQUE7QUFBRixDQUF2QixFQUFxQztBQUMxQyxRQUFNO0FBQUEsT0FBQ1AsS0FBRDtBQUFBLE9BQVFRO0FBQVIsTUFBb0JYLGlEQUFVLENBQUNFLFlBQUQsRUFBZTtBQUNqREksSUFBQUEsS0FBSyxFQUFFLFNBRDBDO0FBRWpERSxJQUFBQSxJQUFJLEVBQUU7QUFGMkMsR0FBZixDQUFwQzs7QUFLQSxRQUFNSSxXQUFXLEdBQUlOLEtBQUQsSUFBVztBQUM3QkssSUFBQUEsUUFBUSxDQUFDO0FBQUVOLE1BQUFBLElBQUksRUFBRSxjQUFSO0FBQXdCRSxNQUFBQSxPQUFPLEVBQUVEO0FBQWpDLEtBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsUUFBTU8sVUFBVSxHQUFJTCxJQUFELElBQVU7QUFDM0JHLElBQUFBLFFBQVEsQ0FBQztBQUFFTixNQUFBQSxJQUFJLEVBQUUsYUFBUjtBQUF1QkUsTUFBQUEsT0FBTyxFQUFFQztBQUFoQyxLQUFELENBQVI7QUFDRCxHQUZEOztBQUlBLHNCQUNFLDhEQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssa0NBQU9MLEtBQVA7QUFBY1MsTUFBQUEsV0FBZDtBQUEyQkMsTUFBQUE7QUFBM0IsTUFBNUI7QUFBQSxjQUNHSDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9jb21wb25lbnRzL2NvbnRleHQvVGhlbWVDb250ZXh0LmpzP2M3ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IHRoZW1lUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkNIQU5HRV9DT0xPUlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY29sb3I6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiQ0hBTkdFX01PREVcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1vZGU6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHRoZW1lUmVkdWNlciwge1xyXG4gICAgY29sb3I6IFwiI0Y5RjlGOVwiLFxyXG4gICAgbW9kZTogXCJkYXJrXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNvbG9yID0gKGNvbG9yKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQ0hBTkdFX0NPTE9SXCIsIHBheWxvYWQ6IGNvbG9yIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZU1vZGUgPSAobW9kZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIkNIQU5HRV9NT0RFXCIsIHBheWxvYWQ6IG1vZGUgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgLi4uc3RhdGUsIGNoYW5nZUNvbG9yLCBjaGFuZ2VNb2RlIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsIlRoZW1lQ29udGV4dCIsInRoZW1lUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNvbG9yIiwicGF5bG9hZCIsIm1vZGUiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsImNoYW5nZUNvbG9yIiwiY2hhbmdlTW9kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/context/ThemeContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var _components_context_ThemeContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/context/ThemeContext */ \"./components/context/ThemeContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/guinho/REST-Countries-API-with-color-theme-switcher-challenge/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_context_ThemeContext__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFZSxTQUFTRyxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBeUM7QUFDdEQsc0JBQ0UsOERBQUMsMkVBQUQ7QUFBQSwyQkFDRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVtZUNvbnRleHQsIHtcbiAgVGhlbWVQcm92aWRlcixcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dC9UaGVtZUNvbnRleHRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJUaGVtZUNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwidXNlU3RhdGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();