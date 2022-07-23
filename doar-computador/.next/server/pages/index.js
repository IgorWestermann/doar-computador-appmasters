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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/ApiStatus/index.tsx":
/*!********************************************!*\
  !*** ./src/components/ApiStatus/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/igorwestermann/Dev/appmasters/doar-computador-appmasters/doar-computador/src/components/ApiStatus/index.tsx\";\n\n\n\n\n\n\nconst ApiStatus = () => {\n  const {\n    0: status,\n    1: setStatus\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const statusApi = async () => {\n      const {\n        data: res\n      } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get('https://doar-computador-api.herokuapp.com');\n      setStatus(res.alive);\n      return console.log('debug: ', res.alive);\n    };\n\n    statusApi();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().highlight),\n        children: \"Doa\\xE7\\xE3o\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, undefined), \" de computadores usados\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, undefined), status ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      className: \"teste\",\n      children: \"API Online\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 21\n    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      className: \"teste\",\n      children: \"API Offline\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 21\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiStatus);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcGlTdGF0dXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFPQSxNQUFNSSxTQUFtQixHQUFHLE1BQU07RUFDOUIsTUFBTTtJQUFBLEdBQUNDLE1BQUQ7SUFBQSxHQUFTQztFQUFULElBQXNCTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7RUFFQUQsZ0RBQVMsQ0FBQyxNQUFNO0lBQ1osTUFBTU8sU0FBUyxHQUFHLFlBQVk7TUFDMUIsTUFBTTtRQUFDQyxJQUFJLEVBQUVDO01BQVAsSUFBYyxNQUFNUCxnREFBQSxDQUFVLDJDQUFWLENBQTFCO01BQ0FJLFNBQVMsQ0FBQ0csR0FBRyxDQUFDRSxLQUFMLENBQVQ7TUFDQSxPQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixHQUFHLENBQUNFLEtBQTNCLENBQVA7SUFDSCxDQUpEOztJQUtBSixTQUFTO0VBQ1osQ0FQUSxFQU9OLEVBUE0sQ0FBVDtFQVNBLG9CQUNJO0lBQUEsd0JBQ0k7TUFBQSx3QkFDSTtRQUFNLFNBQVMsRUFBRUosMEVBQWpCO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBREo7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBREosRUFLUUUsTUFBTSxnQkFDRjtNQUFHLFNBQVMsRUFBQyxPQUFiO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBREUsZ0JBS0Y7TUFBRyxTQUFTLEVBQUMsT0FBYjtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxhQVZaO0VBQUEsZ0JBREo7QUFrQkgsQ0E5QkQ7O0FBZ0NBLGlFQUFlRCxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9hci1jb21wdXRhZG9yLy4vc3JjL2NvbXBvbmVudHMvQXBpU3RhdHVzL2luZGV4LnRzeD9kYTdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5cbmludGVyZmFjZSBTdGF0dXNQcm9wcyB7XG4gICAgYWxpdmU6IGJvb2xlYW5cbn1cblxuY29uc3QgQXBpU3RhdHVzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoe30gYXMgU3RhdHVzUHJvcHMpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdHVzQXBpID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2RhdGE6IHJlc30gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vZG9hci1jb21wdXRhZG9yLWFwaS5oZXJva3VhcHAuY29tJyk7IFxuICAgICAgICAgICAgc2V0U3RhdHVzKHJlcy5hbGl2ZSk7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ2RlYnVnOiAnLCByZXMuYWxpdmUpO1xuICAgICAgICB9IFxuICAgICAgICBzdGF0dXNBcGkoKTtcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaGlnaGxpZ2h0fT5Eb2HDp8Ojbzwvc3Bhbj4gZGUgY29tcHV0YWRvcmVzIHVzYWRvc1xuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlc3RlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBUEkgT25saW5lXG4gICAgICAgICAgICAgICAgICAgIDwvcD4gXG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGVzdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFQSSBPZmZsaW5lXG4gICAgICAgICAgICAgICAgICAgIDwvcD4pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvPlxuICAgICk7XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwaVN0YXR1czsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInN0eWxlcyIsIkFwaVN0YXR1cyIsInN0YXR1cyIsInNldFN0YXR1cyIsInN0YXR1c0FwaSIsImRhdGEiLCJyZXMiLCJnZXQiLCJhbGl2ZSIsImNvbnNvbGUiLCJsb2ciLCJoaWdobGlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ApiStatus/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ApiStatus_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ApiStatus/index */ \"./src/components/ApiStatus/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/igorwestermann/Dev/appmasters/doar-computador-appmasters/doar-computador/src/pages/index.tsx\";\n\n\n\n\nfunction Home() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"title\", {\n        children: \"Doar Computadores App Masters\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Doar computadores App Masters\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"main\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ApiStatus_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTRyxJQUFULEdBQWdCO0VBQzdCLG9CQUNFO0lBQUssU0FBUyxFQUFFRiwwRUFBaEI7SUFBQSx3QkFDRSw4REFBQyxrREFBRDtNQUFBLHdCQUNFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFFRTtRQUFNLElBQUksRUFBQyxhQUFYO1FBQXlCLE9BQU8sRUFBQztNQUFqQztRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkYsZUFHRTtRQUFNLEdBQUcsRUFBQyxNQUFWO1FBQWlCLElBQUksRUFBQztNQUF0QjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBSEY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsZUFNRTtNQUFNLFNBQVMsRUFBRUEscUVBQWpCO01BQUEsdUJBQ0UsOERBQUMsbUVBQUQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFORjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQWFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9hci1jb21wdXRhZG9yLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBBcGlTdGF0dXMgZnJvbSAnLi4vY29tcG9uZW50cy9BcGlTdGF0dXMvaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Eb2FyIENvbXB1dGFkb3JlcyBBcHAgTWFzdGVyczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJEb2FyIGNvbXB1dGFkb3JlcyBBcHAgTWFzdGVyc1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8QXBpU3RhdHVzIC8+XG4gICAgICA8L21haW4+XG4gICAgICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJBcGlTdGF0dXMiLCJIb21lIiwiY29udGFpbmVyIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"highlight\": \"Home_highlight__Kze_c\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"title-highlight\": \"Home_title-highlight__HFUXC\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvYXItY29tcHV0YWRvci8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJoaWdobGlnaHRcIjogXCJIb21lX2hpZ2hsaWdodF9fS3plX2NcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwidGl0bGUtaGlnaGxpZ2h0XCI6IFwiSG9tZV90aXRsZS1oaWdobGlnaHRfX0hGVVhDXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();