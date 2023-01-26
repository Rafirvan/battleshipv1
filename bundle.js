/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/leixo.ttf */ "./src/fonts/leixo.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pattern.jpg */ "./src/images/pattern.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/miss.jpg */ "./src/images/miss.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hit.png */ "./src/images/hit.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/attack.png */ "./src/images/attack.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"leixo\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\nbody {\n  background-color: rgb(1, 1, 50);\n  margin: 0;\n  height: 100vh;\n  box-sizing: border-box;\n}\n\n.title {\n  width: 100%;\n  height: 80px;\n  background-color: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 45px;\n  font-family: leixo;\n}\n.title .logo {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent;\n  background-size: contain;\n}\n\n.main {\n  height: calc(100% - 80px);\n  width: 100%;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 10% 80% 10%;\n  justify-items: center;\n  overflow-y: scroll;\n  padding: 10px;\n  box-sizing: border-box;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none;\n}\n.main::-webkit-scrollbar {\n  display: none;\n}\n.main .axis {\n  outline: black 1px solid;\n  background-color: white;\n  height: 40px;\n  width: 293px;\n  padding: 0 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  cursor: pointer;\n  grid-column: 1/3;\n}\n.main .announcement1,\n.main .announcement2 {\n  height: 100%;\n  width: 100%;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  color: white;\n  font-family: leixo;\n  text-align: center;\n}\n.main .grid1,\n.main .grid2 {\n  background-color: white;\n  border: 3px rgb(98, 98, 23) solid;\n  height: 500px;\n  aspect-ratio: 1;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 50px);\n  grid-template-rows: repeat(auto-fill, 50px);\n  padding: 0%;\n  color: transparent;\n}\n.main .grid1 .cell,\n.main .grid1 .cell2,\n.main .grid2 .cell,\n.main .grid2 .cell2 {\n  outline: 1px black solid;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n  cursor: pointer;\n}\n.main .name {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 30px;\n  color: white;\n  font-family: leixo;\n}\n\n.minimize {\n  scale: 0.85;\n}\n\n.newtext {\n  animation: textChange 0.4s;\n}\n\n@keyframes textChange {\n  0% {\n    color: yellow;\n  }\n  100% {\n    color: white;\n  }\n}\n.miss {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n}\n\n.hit {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: cover;\n}\n\n.attack {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: cover;\n}\n\n.ship {\n  background-color: green;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA;EACE,oBAAA;EACA,4CAAA;AACF;AAEA;EACE,+BAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;AAAF;AAEE;EACE,yDAAA;EACA,qBAAA;EACA,6BAAA;EACA,kBAAA;EACA,wBAAA;AAAJ;;AAIA;EACE,yBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,+BAAA;EACA,qBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,wBAAA,EAAA,gBAAA;EACA,qBAAA;AADF;AAEE;EACE,aAAA;AAAJ;AAGE;EACE,wBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AADJ;AAIE;;EAEE,YAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;AAFJ;AAKE;;EAEE,uBAAA;EACA,iCAAA;EACA,aAAA;EACA,eAAA;EACA,aAAA;EACA,8CAAA;EACA,2CAAA;EACA,WAAA;EACA,kBAAA;AAHJ;AAKI;;;;EAEE,wBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;AADN;AAKE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;AAHJ;;AAOA;EACE,WAAA;AAJF;;AAOA;EACE,0BAAA;AAJF;;AAOA;EACE;IACE,aAAA;EAJF;EAMA;IACE,YAAA;EAJF;AACF;AAOA;EACE,yDAAA;EACA,sBAAA;AALF;;AAQA;EACE,yDAAA;EACA,sBAAA;AALF;;AAQA;EACE,yDAAA;EACA,sBAAA;AALF;;AAQA;EACE,uBAAA;AALF","sourcesContent":["@font-face {\r\n  font-family: \"leixo\";\r\n  src: url(\"./fonts/leixo.ttf\");\r\n}\r\n\r\nbody {\r\n  background-color: rgb(1, 1, 50);\r\n  margin: 0;\r\n  height: 100vh;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.title {\r\n  width: 100%;\r\n  height: 80px;\r\n  background-color: black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 45px;\r\n  font-family: leixo;\r\n\r\n  .logo {\r\n    background-image: url(./images/pattern.jpg);\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    color: transparent;\r\n    background-size: contain;\r\n  }\r\n}\r\n\r\n.main {\r\n  height: calc(100% - 80px);\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 50% 50%;\r\n  grid-template-rows: 10% 80% 10%;\r\n  justify-items: center;\r\n  overflow-y: scroll;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  -ms-overflow-style: none; /* IE and Edge */\r\n  scrollbar-width: none;\r\n  &::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n\r\n  .axis {\r\n    outline: black 1px solid;\r\n    background-color: white;\r\n    height: 40px;\r\n    width: 293px;\r\n    padding: 0 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    grid-column: 1/3;\r\n  }\r\n\r\n  .announcement1,\r\n  .announcement2 {\r\n    height: 100%;\r\n    width: 100%;\r\n    grid-row: 1/2;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 20px;\r\n    color: white;\r\n    font-family: leixo;\r\n    text-align: center;\r\n  }\r\n\r\n  .grid1,\r\n  .grid2 {\r\n    background-color: white;\r\n    border: 3px rgb(98, 98, 23) solid;\r\n    height: 500px;\r\n    aspect-ratio: 1;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, 50px);\r\n    grid-template-rows: repeat(auto-fill, 50px);\r\n    padding: 0%;\r\n    color: transparent;\r\n\r\n    .cell,\r\n    .cell2 {\r\n      outline: 1px black solid;\r\n      height: 100%;\r\n      width: 100%;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      font-size: 10px;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n\r\n  .name {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 30px;\r\n    color: white;\r\n    font-family: leixo;\r\n  }\r\n}\r\n\r\n.minimize {\r\n  scale: 0.85;\r\n}\r\n\r\n.newtext {\r\n  animation: textChange 0.4s;\r\n}\r\n\r\n@keyframes textChange {\r\n  0% {\r\n    color: yellow;\r\n  }\r\n  100% {\r\n    color: white;\r\n  }\r\n}\r\n\r\n.miss {\r\n  background-image: url(\"./images/miss.jpg\");\r\n  background-size: cover;\r\n}\r\n\r\n.hit {\r\n  background-image: url(\"./images/hit.png\");\r\n  background-size: cover;\r\n}\r\n\r\n.attack {\r\n  background-image: url(\"./images/attack.png\");\r\n  background-size: cover;\r\n}\r\n\r\n.ship {\r\n  background-color: green;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard),
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.js");


class ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits++;
    if (this.hits >= this.length) {
      this.sunk = true;
    }
  }
}

class gameboard {
  constructor(name) {
    this.name = name;
    this.board = [];
    for (let i = 1; i < 11; i++) {
      this.board.push(["", "", "", "", "", "", "", "", "", ""]);
    }

    this.ships = [
      (this.carrier = new ship("carrier", 5)),
      (this.battleship = new ship("battleship", 4)),
      (this.cruiser = new ship("cruiser", 3)),
      (this.submarine = new ship("submarine", 3)),
      (this.destroyer = new ship("destroyer", 2)),
    ];
  }

  receiveAttack(area) {
    let yPos = area[1] - 1;
    let xPos = area[0] - 1;
    let hitShip;

    if (this.board[yPos][xPos] == "HIT" || this.board[yPos][xPos] == "MISS")
      throw e;

    if (this.board[yPos][xPos] !== "") {
      hitShip = this.board[yPos][xPos];
      this.board[yPos][xPos] = "HIT";
      (0,_main__WEBPACK_IMPORTED_MODULE_0__.announce)(this.name, "hit", hitShip);
      this.ships.forEach((e) => {
        if (hitShip == e.name) {
          e.hit();
        }
      });
    } else {
      this.board[yPos][xPos] = "MISS";

      (0,_main__WEBPACK_IMPORTED_MODULE_0__.announce)(this.name, "miss");
    }
  }

  placeShip(ship, start, alignment = "hor", mode = "") {
    let y = start;
    let yPos = start[1] - 1;
    let xPos = start[0] - 1;
    for (let i = 0; i < ship.length; i++) {
      if (alignment === "hor") {
        if (
          this.board[yPos][xPos + i] == "" ||
          this.board[yPos][xPos + i] == ship.name
        ) {
          this.board[yPos][xPos + i] = ship.name;
        } else throw "";
      } else if (alignment === "ver") {
        if (
          this.board[yPos + i][xPos] == "" ||
          this.board[yPos + i][xPos] == ship.name
        ) {
          this.board[yPos + i][xPos] = ship.name;
        } else throw "";
      }
    }

    if (this.name != "computer" && mode == "")
      (0,_main__WEBPACK_IMPORTED_MODULE_0__.announce)(this.name, "place", ship.name);
  }
}




/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attackFunction": () => (/* binding */ attackFunction),
/* harmony export */   "changeAlign": () => (/* binding */ changeAlign),
/* harmony export */   "checkRemainingMoves": () => (/* binding */ checkRemainingMoves),
/* harmony export */   "computerAttack": () => (/* binding */ computerAttack),
/* harmony export */   "placeFunction": () => (/* binding */ placeFunction),
/* harmony export */   "placingStep": () => (/* binding */ placingStep)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes.js");



let alignment = "ver";
let state = "placing";

function changeAlign() {
  if (alignment == "ver") alignment = "hor";
  else alignment = "ver";
  (0,_main__WEBPACK_IMPORTED_MODULE_0__.changeButtonText)(alignment);
}

let gameboard1 = new _classes__WEBPACK_IMPORTED_MODULE_1__.gameboard("player");
let gameboard2 = new _classes__WEBPACK_IMPORTED_MODULE_1__.gameboard("computer");

function placingStep() {
  autoPlacing(gameboard2);
  if (alignment == "ver") {
    changeAlign();
  }
  (0,_main__WEBPACK_IMPORTED_MODULE_0__.getPlace)(gameboard1);
}

function checkRemainingMoves(gameboard) {
  if (gameboard.ships.length == 0) {
    gameboard.ships.push(gameboard.battleship);
    gameboard.ships.push(gameboard.carrier);
    gameboard.ships.push(gameboard.submarine);
    gameboard.ships.push(gameboard.cruiser);
    gameboard.ships.push(gameboard.destroyer);
    (0,_main__WEBPACK_IMPORTED_MODULE_0__.onclickRemove)(gameboard);
    attackingStep();
  }
}

function placeFunction(cell, gameboard, mode = "") {
  if (mode == "checkIn") {
    let hoverShip = gameboard.ships[0];
    try {
      gameboard.placeShip(hoverShip, cell, alignment, mode);
    } catch (e) {
      deleteShip(gameboard, hoverShip);
    }
  } else if (mode == "checkOut") {
    let hoverShip = gameboard.ships[0];
    deleteShip(gameboard, hoverShip);
  } else {
    let curShip = gameboard.ships.shift();
    try {
      gameboard.placeShip(curShip, cell, alignment);
    } catch (e) {
      gameboard.ships.unshift(curShip);
      deleteShip(gameboard, curShip);
    }
  }
  (0,_main__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(gameboard);
}

function deleteShip(gameboard, ship) {
  for (let i = 0; i < 10; i++) {
    for (let p = 0; p < 10; p++) {
      if (gameboard.board[i][p] == ship.name) {
        gameboard.board[i][p] = "";
      }
    }
  }
}

function autoPlacing(gameboard) {
  let shipCopy = [...gameboard.ships];

  while (true) {
    let curShip = shipCopy.shift();
    try {
      gameboard.placeShip(curShip, getRandomCell(curShip), alignment);
    } catch (e) {
      shipCopy.unshift(curShip);
      deleteShip(gameboard, curShip);
    }
    if (shipCopy.length == 0) {
      break;
    }
  }
}

// call with getRandomCell(ship);
function getRandomCell(ship = []) {
  changeAlign();
  let len = ship.length;

  let xPos = Math.floor(Math.random() * 9.99) + 1;
  let yPos = Math.floor(Math.random() * 9.99) + 1;

  let x, y;

  if (alignment == "hor") {
    x = Math.min(xPos, 11 - len);
    y = yPos;
  } else {
    y = Math.min(yPos, 11 - len);
    x = xPos;
  }
  let cell = [x, y]; //[x,y]
  return cell;
}

function attackingStep() {
  (0,_main__WEBPACK_IMPORTED_MODULE_0__.secondGrid)(gameboard1, gameboard2);
  (0,_main__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(gameboard2);
  (0,_main__WEBPACK_IMPORTED_MODULE_0__.hideButton)();
  (0,_main__WEBPACK_IMPORTED_MODULE_0__.getAttack)(gameboard2);
}

function attackFunction(cell, gameboard) {
  gameboard.receiveAttack(cell);
  (0,_main__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(gameboard);
  checkwinner();
  // RemoveEventListener() TODO
}

function computerAttack() {
  while (true) {
    let cell = getRandomCell();
    try {
      gameboard1.receiveAttack(cell);
    } catch {
      continue;
    }
    break;
  }
  (0,_main__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(gameboard1);
}

function checkwinner() {
  if (gameboard1.ships.every((e) => e.sunk == true)) {
    (0,_main__WEBPACK_IMPORTED_MODULE_0__.announce)(gameboard2.name, "win");
    (0,_main__WEBPACK_IMPORTED_MODULE_0__.gameEnd)();
  } else if (gameboard2.ships.every((e) => e.sunk == true)) {
    (0,_main__WEBPACK_IMPORTED_MODULE_0__.announce)(gameboard1.name, "win");
    (0,_main__WEBPACK_IMPORTED_MODULE_0__.gameEnd)();
  }
}




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "announce": () => (/* binding */ announce),
/* harmony export */   "changeButtonText": () => (/* binding */ changeButtonText),
/* harmony export */   "gameEnd": () => (/* binding */ gameEnd),
/* harmony export */   "getAttack": () => (/* binding */ getAttack),
/* harmony export */   "getPlace": () => (/* binding */ getPlace),
/* harmony export */   "hideButton": () => (/* binding */ hideButton),
/* harmony export */   "onclickRemove": () => (/* binding */ onclickRemove),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard),
/* harmony export */   "secondGrid": () => (/* binding */ secondGrid)
/* harmony export */ });
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");



const grid1 = document.querySelector(".grid1");
const grid2 = document.querySelector(".grid2");
grid2.classList.add("minimize");
grid2.style.backgroundColor = "#013220";
const main = document.querySelector(".main");
const axis = document.querySelector(".axis");
const cells = document.getElementsByClassName("cell");
const cells2 = document.getElementsByClassName("cell2");
const announcement1 = document.querySelector(".announcement1");
const announcement2 = document.querySelector(".announcement2");
axis.onclick = _logic__WEBPACK_IMPORTED_MODULE_1__.changeAlign;
let announcementQueue1 = [];
let announcementQueue2 = [];

for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++) {
    const cell = document.createElement("div");
    const cell2 = document.createElement("div");
    cell.classList.add("cell");
    cell2.classList.add("cell2");
    cell.setAttribute("yPos", i);
    cell.setAttribute("xPos", j);
    cell2.setAttribute("yPos", i);
    cell2.setAttribute("xPos", j);
    grid1.appendChild(cell);
    grid2.appendChild(cell2);
  }
}

function changeButtonText(alignment) {
  if (alignment == "ver")
    axis.textContent = "Change Axis || Current : Vertical";
  else if (alignment == "hor")
    axis.textContent = "Change Axis || Current : Horizontal";
}

function hideButton() {
  axis.remove();
}

function renderBoard(gameboard) {
  let gameboardCopy = gameboard.board.join(",");
  let values = gameboardCopy.split(",");
  let i = 0;
  let pick;
  let notComputer = false;

  if (gameboard.name == "computer") pick = cells2;
  else {
    notComputer = true;
    pick = cells;
  }

  for (let e of pick) {
    if (values[i] == "HIT") {
      e.classList.add("hit");
    } else if (values[i] == "MISS") {
      e.classList.add("miss");
    } else if (values[i] != "" && notComputer) {
      e.classList.add("ship");
    } else if (values[i] == "") {
      e.classList.remove("ship");
    }

    e.innerText = values[i];
    i++;
  }
}

function getPlace(gameboard) {
  for (let e of cells) {
    let cell = [Number(e.getAttribute("xPos")), Number(e.getAttribute("yPos"))];
    e.onmouseover = () => (0,_logic__WEBPACK_IMPORTED_MODULE_1__.placeFunction)(cell, gameboard, "checkIn");
    e.onmouseleave = () => (0,_logic__WEBPACK_IMPORTED_MODULE_1__.placeFunction)(cell, gameboard, "checkOut");
    e.onclick = () => {
      (0,_logic__WEBPACK_IMPORTED_MODULE_1__.placeFunction)(cell, gameboard);
      (0,_logic__WEBPACK_IMPORTED_MODULE_1__.checkRemainingMoves)(gameboard);
      console.log(cell);
    };
  }
}

function onclickRemove(gameboard) {
  for (let e of cells) {
    e.onclick = "";
    e.onmouseleave = "";
    e.onmouseover = "";
  }
}

function secondGrid(gameboard1, gameboard2) {
  grid1.classList.add("minimize");
  const player1 = document.createElement("div");
  const player2 = document.createElement("div");

  player1.innerText = gameboard1.name + "'s board";
  player2.innerText = gameboard2.name + "'s board";
  player1.classList.add("name");
  player2.classList.add("name");

  main.appendChild(player1);
  main.appendChild(player2);
  grid2.classList.remove("minimize");
  grid2.style.backgroundColor = "white";
  announcement2.innerText = "Click on a cell to attack!";
}

function getAttack(gameboard) {
  for (let e of cells2) {
    e.onmouseover = () => e.classList.add("attack");
    e.onmouseleave = () => e.classList.remove("attack");
    e.onclick = () => {
      e.classList.remove("attack");
      let cell = [
        Number(e.getAttribute("xPos")),
        Number(e.getAttribute("yPos")),
      ]; // [x, y]
      (0,_logic__WEBPACK_IMPORTED_MODULE_1__.attackFunction)(cell, gameboard);
      console.log(cell);
      e.onclick = "";
      e.onmouseover = "";
      (0,_logic__WEBPACK_IMPORTED_MODULE_1__.computerAttack)();
    };
  }
}

function gameEnd() {
  for (let e of cells2) e.onclick = "";
}

function changeAnnouncement() {
  let text = announcementQueue1.pop();
  if (text != undefined) {
    announcement1.classList.add("newtext");
    announcement1.innerText = text;
    let time = setTimeout(function () {
      announcement1.classList.remove("newtext");
    }, 400);
  }
  let text2 = announcementQueue2.pop();
  if (text2 != undefined) {
    announcement2.classList.add("newtext");
    announcement2.innerText = text2;
    let time2 = setTimeout(function () {
      announcement2.classList.remove("newtext");
    }, 400);
  }
}

function announce(name, action, ship = "") {
  let queue;
  console.log(name);
  if (name == "computer") {
    queue = announcementQueue2;
  } else queue = announcementQueue1;
  switch (action) {
    case "place":
      queue.unshift("you have placed your " + ship + " on your board");
      break;
    case "hit":
      queue.unshift(name + "'s " + ship + " has been hit!");
      break;
    case "miss":
      queue.unshift("that attack hit nothing in " + name + `'s territory!`);
      break;
    case "win":
      announcementQueue1.unshift(name + " wins!!");
      announcementQueue2.unshift(name + " wins!!");
  }
}

//TODO FOR FUTURE:
//-SOUND EFFECTS
//-PLAYER NAMING
//-FINISH gameEnd()

(0,_logic__WEBPACK_IMPORTED_MODULE_1__.placingStep)(); //game start
setInterval(changeAnnouncement, 800);




/***/ }),

/***/ "./src/fonts/leixo.ttf":
/*!*****************************!*\
  !*** ./src/fonts/leixo.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e5b0ae7e5469b65fb8f.ttf";

/***/ }),

/***/ "./src/images/attack.png":
/*!*******************************!*\
  !*** ./src/images/attack.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fe2b5ef247481942763.png";

/***/ }),

/***/ "./src/images/hit.png":
/*!****************************!*\
  !*** ./src/images/hit.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef61d97eb9d4d08a2f1d.png";

/***/ }),

/***/ "./src/images/miss.jpg":
/*!*****************************!*\
  !*** ./src/images/miss.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d09ff5b025fded0afff.jpg";

/***/ }),

/***/ "./src/images/pattern.jpg":
/*!********************************!*\
  !*** ./src/images/pattern.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8db53fa2fc27446c03a.jpg";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvbGVpeG8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcGF0dGVybi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9taXNzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2hpdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9hdHRhY2sucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJsZWl4b1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDEsIDUwKTtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDQ1cHg7XFxuICBmb250LWZhbWlseTogbGVpeG87XFxufVxcbi50aXRsZSAubG9nbyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbi5tYWluIHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gODBweCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA4MCUgMTAlO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcbi5tYWluOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWFpbiAuYXhpcyB7XFxuICBvdXRsaW5lOiBibGFjayAxcHggc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAyOTNweDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcbi5tYWluIC5hbm5vdW5jZW1lbnQxLFxcbi5tYWluIC5hbm5vdW5jZW1lbnQyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogbGVpeG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluIC5ncmlkMSxcXG4ubWFpbiAuZ3JpZDIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDNweCByZ2IoOTgsIDk4LCAyMykgc29saWQ7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgNTBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDUwcHgpO1xcbiAgcGFkZGluZzogMCU7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5tYWluIC5ncmlkMSAuY2VsbCxcXG4ubWFpbiAuZ3JpZDEgLmNlbGwyLFxcbi5tYWluIC5ncmlkMiAuY2VsbCxcXG4ubWFpbiAuZ3JpZDIgLmNlbGwyIHtcXG4gIG91dGxpbmU6IDFweCBibGFjayBzb2xpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1haW4gLm5hbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IGxlaXhvO1xcbn1cXG5cXG4ubWluaW1pemUge1xcbiAgc2NhbGU6IDAuODU7XFxufVxcblxcbi5uZXd0ZXh0IHtcXG4gIGFuaW1hdGlvbjogdGV4dENoYW5nZSAwLjRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRleHRDaGFuZ2Uge1xcbiAgMCUge1xcbiAgICBjb2xvcjogeWVsbG93O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5hdHRhY2sge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBQTtFQUNBLDRDQUFBO0FBQ0Y7QUFFQTtFQUNFLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFRTtFQUNFLHlEQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFBSjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBLEVBQUEsZ0JBQUE7RUFDQSxxQkFBQTtBQURGO0FBRUU7RUFDRSxhQUFBO0FBQUo7QUFHRTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFOztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFLRTs7RUFFRSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOENBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUhKO0FBS0k7Ozs7RUFFRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUROO0FBS0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU9BO0VBQ0UsV0FBQTtBQUpGOztBQU9BO0VBQ0UsMEJBQUE7QUFKRjs7QUFPQTtFQUNFO0lBQ0UsYUFBQTtFQUpGO0VBTUE7SUFDRSxZQUFBO0VBSkY7QUFDRjtBQU9BO0VBQ0UseURBQUE7RUFDQSxzQkFBQTtBQUxGOztBQVFBO0VBQ0UseURBQUE7RUFDQSxzQkFBQTtBQUxGOztBQVFBO0VBQ0UseURBQUE7RUFDQSxzQkFBQTtBQUxGOztBQVFBO0VBQ0UsdUJBQUE7QUFMRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwibGVpeG9cXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvbGVpeG8udHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDEsIDUwKTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDQ1cHg7XFxyXFxuICBmb250LWZhbWlseTogbGVpeG87XFxyXFxuXFxyXFxuICAubG9nbyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9wYXR0ZXJuLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgODAlIDEwJTtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xcclxcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcclxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmF4aXMge1xcclxcbiAgICBvdXRsaW5lOiBibGFjayAxcHggc29saWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiAyOTNweDtcXHJcXG4gICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hbm5vdW5jZW1lbnQxLFxcclxcbiAgLmFubm91bmNlbWVudDIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBncmlkLXJvdzogMS8yO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBsZWl4bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdyaWQxLFxcclxcbiAgLmdyaWQyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogM3B4IHJnYig5OCwgOTgsIDIzKSBzb2xpZDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDUwcHgpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDUwcHgpO1xcclxcbiAgICBwYWRkaW5nOiAwJTtcXHJcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcclxcbiAgICAuY2VsbCxcXHJcXG4gICAgLmNlbGwyIHtcXHJcXG4gICAgICBvdXRsaW5lOiAxcHggYmxhY2sgc29saWQ7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmFtZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGxlaXhvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWluaW1pemUge1xcclxcbiAgc2NhbGU6IDAuODU7XFxyXFxufVxcclxcblxcclxcbi5uZXd0ZXh0IHtcXHJcXG4gIGFuaW1hdGlvbjogdGV4dENoYW5nZSAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRleHRDaGFuZ2Uge1xcclxcbiAgMCUge1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Mge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9taXNzLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL2hpdC5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5hdHRhY2sge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9hdHRhY2sucG5nXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFubm91bmNlIH0gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuY2xhc3Mgc2hpcCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmhpdHMgPSAwO1xyXG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmhpdHMrKztcclxuICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIGdhbWVib2FyZCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYm9hcmQgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xyXG4gICAgICB0aGlzLmJvYXJkLnB1c2goW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNoaXBzID0gW1xyXG4gICAgICAodGhpcy5jYXJyaWVyID0gbmV3IHNoaXAoXCJjYXJyaWVyXCIsIDUpKSxcclxuICAgICAgKHRoaXMuYmF0dGxlc2hpcCA9IG5ldyBzaGlwKFwiYmF0dGxlc2hpcFwiLCA0KSksXHJcbiAgICAgICh0aGlzLmNydWlzZXIgPSBuZXcgc2hpcChcImNydWlzZXJcIiwgMykpLFxyXG4gICAgICAodGhpcy5zdWJtYXJpbmUgPSBuZXcgc2hpcChcInN1Ym1hcmluZVwiLCAzKSksXHJcbiAgICAgICh0aGlzLmRlc3Ryb3llciA9IG5ldyBzaGlwKFwiZGVzdHJveWVyXCIsIDIpKSxcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICByZWNlaXZlQXR0YWNrKGFyZWEpIHtcclxuICAgIGxldCB5UG9zID0gYXJlYVsxXSAtIDE7XHJcbiAgICBsZXQgeFBvcyA9IGFyZWFbMF0gLSAxO1xyXG4gICAgbGV0IGhpdFNoaXA7XHJcblxyXG4gICAgaWYgKHRoaXMuYm9hcmRbeVBvc11beFBvc10gPT0gXCJISVRcIiB8fCB0aGlzLmJvYXJkW3lQb3NdW3hQb3NdID09IFwiTUlTU1wiKVxyXG4gICAgICB0aHJvdyBlO1xyXG5cclxuICAgIGlmICh0aGlzLmJvYXJkW3lQb3NdW3hQb3NdICE9PSBcIlwiKSB7XHJcbiAgICAgIGhpdFNoaXAgPSB0aGlzLmJvYXJkW3lQb3NdW3hQb3NdO1xyXG4gICAgICB0aGlzLmJvYXJkW3lQb3NdW3hQb3NdID0gXCJISVRcIjtcclxuICAgICAgYW5ub3VuY2UodGhpcy5uYW1lLCBcImhpdFwiLCBoaXRTaGlwKTtcclxuICAgICAgdGhpcy5zaGlwcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGhpdFNoaXAgPT0gZS5uYW1lKSB7XHJcbiAgICAgICAgICBlLmhpdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJvYXJkW3lQb3NdW3hQb3NdID0gXCJNSVNTXCI7XHJcblxyXG4gICAgICBhbm5vdW5jZSh0aGlzLm5hbWUsIFwibWlzc1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcChzaGlwLCBzdGFydCwgYWxpZ25tZW50ID0gXCJob3JcIiwgbW9kZSA9IFwiXCIpIHtcclxuICAgIGxldCB5ID0gc3RhcnQ7XHJcbiAgICBsZXQgeVBvcyA9IHN0YXJ0WzFdIC0gMTtcclxuICAgIGxldCB4UG9zID0gc3RhcnRbMF0gLSAxO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChhbGlnbm1lbnQgPT09IFwiaG9yXCIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLmJvYXJkW3lQb3NdW3hQb3MgKyBpXSA9PSBcIlwiIHx8XHJcbiAgICAgICAgICB0aGlzLmJvYXJkW3lQb3NdW3hQb3MgKyBpXSA9PSBzaGlwLm5hbWVcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuYm9hcmRbeVBvc11beFBvcyArIGldID0gc2hpcC5uYW1lO1xyXG4gICAgICAgIH0gZWxzZSB0aHJvdyBcIlwiO1xyXG4gICAgICB9IGVsc2UgaWYgKGFsaWdubWVudCA9PT0gXCJ2ZXJcIikge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMuYm9hcmRbeVBvcyArIGldW3hQb3NdID09IFwiXCIgfHxcclxuICAgICAgICAgIHRoaXMuYm9hcmRbeVBvcyArIGldW3hQb3NdID09IHNoaXAubmFtZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5ib2FyZFt5UG9zICsgaV1beFBvc10gPSBzaGlwLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHRocm93IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5uYW1lICE9IFwiY29tcHV0ZXJcIiAmJiBtb2RlID09IFwiXCIpXHJcbiAgICAgIGFubm91bmNlKHRoaXMubmFtZSwgXCJwbGFjZVwiLCBzaGlwLm5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZ2FtZWJvYXJkLCBzaGlwIH07XHJcbiIsImltcG9ydCB7XHJcbiAgcmVuZGVyQm9hcmQsXHJcbiAgZ2V0UGxhY2UsXHJcbiAgZ2V0QXR0YWNrLFxyXG4gIHNlY29uZEdyaWQsXHJcbiAgY2hhbmdlQnV0dG9uVGV4dCxcclxuICBoaWRlQnV0dG9uLFxyXG4gIG9uY2xpY2tSZW1vdmUsXHJcbiAgZ2FtZUVuZCxcclxuICBhbm5vdW5jZSxcclxufSBmcm9tIFwiLi9tYWluXCI7XHJcbmltcG9ydCB7IGdhbWVib2FyZCwgc2hpcCB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmxldCBhbGlnbm1lbnQgPSBcInZlclwiO1xyXG5sZXQgc3RhdGUgPSBcInBsYWNpbmdcIjtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUFsaWduKCkge1xyXG4gIGlmIChhbGlnbm1lbnQgPT0gXCJ2ZXJcIikgYWxpZ25tZW50ID0gXCJob3JcIjtcclxuICBlbHNlIGFsaWdubWVudCA9IFwidmVyXCI7XHJcbiAgY2hhbmdlQnV0dG9uVGV4dChhbGlnbm1lbnQpO1xyXG59XHJcblxyXG5sZXQgZ2FtZWJvYXJkMSA9IG5ldyBnYW1lYm9hcmQoXCJwbGF5ZXJcIik7XHJcbmxldCBnYW1lYm9hcmQyID0gbmV3IGdhbWVib2FyZChcImNvbXB1dGVyXCIpO1xyXG5cclxuZnVuY3Rpb24gcGxhY2luZ1N0ZXAoKSB7XHJcbiAgYXV0b1BsYWNpbmcoZ2FtZWJvYXJkMik7XHJcbiAgaWYgKGFsaWdubWVudCA9PSBcInZlclwiKSB7XHJcbiAgICBjaGFuZ2VBbGlnbigpO1xyXG4gIH1cclxuICBnZXRQbGFjZShnYW1lYm9hcmQxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tSZW1haW5pbmdNb3ZlcyhnYW1lYm9hcmQpIHtcclxuICBpZiAoZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICBnYW1lYm9hcmQuc2hpcHMucHVzaChnYW1lYm9hcmQuYmF0dGxlc2hpcCk7XHJcbiAgICBnYW1lYm9hcmQuc2hpcHMucHVzaChnYW1lYm9hcmQuY2Fycmllcik7XHJcbiAgICBnYW1lYm9hcmQuc2hpcHMucHVzaChnYW1lYm9hcmQuc3VibWFyaW5lKTtcclxuICAgIGdhbWVib2FyZC5zaGlwcy5wdXNoKGdhbWVib2FyZC5jcnVpc2VyKTtcclxuICAgIGdhbWVib2FyZC5zaGlwcy5wdXNoKGdhbWVib2FyZC5kZXN0cm95ZXIpO1xyXG4gICAgb25jbGlja1JlbW92ZShnYW1lYm9hcmQpO1xyXG4gICAgYXR0YWNraW5nU3RlcCgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGxhY2VGdW5jdGlvbihjZWxsLCBnYW1lYm9hcmQsIG1vZGUgPSBcIlwiKSB7XHJcbiAgaWYgKG1vZGUgPT0gXCJjaGVja0luXCIpIHtcclxuICAgIGxldCBob3ZlclNoaXAgPSBnYW1lYm9hcmQuc2hpcHNbMF07XHJcbiAgICB0cnkge1xyXG4gICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKGhvdmVyU2hpcCwgY2VsbCwgYWxpZ25tZW50LCBtb2RlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZGVsZXRlU2hpcChnYW1lYm9hcmQsIGhvdmVyU2hpcCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChtb2RlID09IFwiY2hlY2tPdXRcIikge1xyXG4gICAgbGV0IGhvdmVyU2hpcCA9IGdhbWVib2FyZC5zaGlwc1swXTtcclxuICAgIGRlbGV0ZVNoaXAoZ2FtZWJvYXJkLCBob3ZlclNoaXApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgY3VyU2hpcCA9IGdhbWVib2FyZC5zaGlwcy5zaGlmdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChjdXJTaGlwLCBjZWxsLCBhbGlnbm1lbnQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBnYW1lYm9hcmQuc2hpcHMudW5zaGlmdChjdXJTaGlwKTtcclxuICAgICAgZGVsZXRlU2hpcChnYW1lYm9hcmQsIGN1clNoaXApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXJCb2FyZChnYW1lYm9hcmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVTaGlwKGdhbWVib2FyZCwgc2hpcCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPCAxMDsgcCsrKSB7XHJcbiAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbaV1bcF0gPT0gc2hpcC5uYW1lKSB7XHJcbiAgICAgICAgZ2FtZWJvYXJkLmJvYXJkW2ldW3BdID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXV0b1BsYWNpbmcoZ2FtZWJvYXJkKSB7XHJcbiAgbGV0IHNoaXBDb3B5ID0gWy4uLmdhbWVib2FyZC5zaGlwc107XHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBsZXQgY3VyU2hpcCA9IHNoaXBDb3B5LnNoaWZ0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKGN1clNoaXAsIGdldFJhbmRvbUNlbGwoY3VyU2hpcCksIGFsaWdubWVudCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHNoaXBDb3B5LnVuc2hpZnQoY3VyU2hpcCk7XHJcbiAgICAgIGRlbGV0ZVNoaXAoZ2FtZWJvYXJkLCBjdXJTaGlwKTtcclxuICAgIH1cclxuICAgIGlmIChzaGlwQ29weS5sZW5ndGggPT0gMCkge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGNhbGwgd2l0aCBnZXRSYW5kb21DZWxsKHNoaXApO1xyXG5mdW5jdGlvbiBnZXRSYW5kb21DZWxsKHNoaXAgPSBbXSkge1xyXG4gIGNoYW5nZUFsaWduKCk7XHJcbiAgbGV0IGxlbiA9IHNoaXAubGVuZ3RoO1xyXG5cclxuICBsZXQgeFBvcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkuOTkpICsgMTtcclxuICBsZXQgeVBvcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkuOTkpICsgMTtcclxuXHJcbiAgbGV0IHgsIHk7XHJcblxyXG4gIGlmIChhbGlnbm1lbnQgPT0gXCJob3JcIikge1xyXG4gICAgeCA9IE1hdGgubWluKHhQb3MsIDExIC0gbGVuKTtcclxuICAgIHkgPSB5UG9zO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB5ID0gTWF0aC5taW4oeVBvcywgMTEgLSBsZW4pO1xyXG4gICAgeCA9IHhQb3M7XHJcbiAgfVxyXG4gIGxldCBjZWxsID0gW3gsIHldOyAvL1t4LHldXHJcbiAgcmV0dXJuIGNlbGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFja2luZ1N0ZXAoKSB7XHJcbiAgc2Vjb25kR3JpZChnYW1lYm9hcmQxLCBnYW1lYm9hcmQyKTtcclxuICByZW5kZXJCb2FyZChnYW1lYm9hcmQyKTtcclxuICBoaWRlQnV0dG9uKCk7XHJcbiAgZ2V0QXR0YWNrKGdhbWVib2FyZDIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2tGdW5jdGlvbihjZWxsLCBnYW1lYm9hcmQpIHtcclxuICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjZWxsKTtcclxuICByZW5kZXJCb2FyZChnYW1lYm9hcmQpO1xyXG4gIGNoZWNrd2lubmVyKCk7XHJcbiAgLy8gUmVtb3ZlRXZlbnRMaXN0ZW5lcigpIFRPRE9cclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2soKSB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGxldCBjZWxsID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZ2FtZWJvYXJkMS5yZWNlaXZlQXR0YWNrKGNlbGwpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG4gICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJlbmRlckJvYXJkKGdhbWVib2FyZDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja3dpbm5lcigpIHtcclxuICBpZiAoZ2FtZWJvYXJkMS5zaGlwcy5ldmVyeSgoZSkgPT4gZS5zdW5rID09IHRydWUpKSB7XHJcbiAgICBhbm5vdW5jZShnYW1lYm9hcmQyLm5hbWUsIFwid2luXCIpO1xyXG4gICAgZ2FtZUVuZCgpO1xyXG4gIH0gZWxzZSBpZiAoZ2FtZWJvYXJkMi5zaGlwcy5ldmVyeSgoZSkgPT4gZS5zdW5rID09IHRydWUpKSB7XHJcbiAgICBhbm5vdW5jZShnYW1lYm9hcmQxLm5hbWUsIFwid2luXCIpO1xyXG4gICAgZ2FtZUVuZCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjaGFuZ2VBbGlnbixcclxuICBwbGFjZUZ1bmN0aW9uLFxyXG4gIHBsYWNpbmdTdGVwLFxyXG4gIGNoZWNrUmVtYWluaW5nTW92ZXMsXHJcbiAgYXR0YWNrRnVuY3Rpb24sXHJcbiAgY29tcHV0ZXJBdHRhY2ssXHJcbn07XHJcbiIsImltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IHtcclxuICBjaGFuZ2VBbGlnbixcclxuICBwbGFjZUZ1bmN0aW9uLFxyXG4gIHBsYWNpbmdTdGVwLFxyXG4gIGNoZWNrUmVtYWluaW5nTW92ZXMsXHJcbiAgYXR0YWNrRnVuY3Rpb24sXHJcbiAgY29tcHV0ZXJBdHRhY2ssXHJcbn0gZnJvbSBcIi4vbG9naWNcIjtcclxuXHJcbmNvbnN0IGdyaWQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkMVwiKTtcclxuY29uc3QgZ3JpZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWQyXCIpO1xyXG5ncmlkMi5jbGFzc0xpc3QuYWRkKFwibWluaW1pemVcIik7XHJcbmdyaWQyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAxMzIyMFwiO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG5jb25zdCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5heGlzXCIpO1xyXG5jb25zdCBjZWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjZWxsXCIpO1xyXG5jb25zdCBjZWxsczIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2VsbDJcIik7XHJcbmNvbnN0IGFubm91bmNlbWVudDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFubm91bmNlbWVudDFcIik7XHJcbmNvbnN0IGFubm91bmNlbWVudDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFubm91bmNlbWVudDJcIik7XHJcbmF4aXMub25jbGljayA9IGNoYW5nZUFsaWduO1xyXG5sZXQgYW5ub3VuY2VtZW50UXVldWUxID0gW107XHJcbmxldCBhbm5vdW5jZW1lbnRRdWV1ZTIgPSBbXTtcclxuXHJcbmZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xyXG4gIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGorKykge1xyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgY2VsbDIuY2xhc3NMaXN0LmFkZChcImNlbGwyXCIpO1xyXG4gICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJ5UG9zXCIsIGkpO1xyXG4gICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJ4UG9zXCIsIGopO1xyXG4gICAgY2VsbDIuc2V0QXR0cmlidXRlKFwieVBvc1wiLCBpKTtcclxuICAgIGNlbGwyLnNldEF0dHJpYnV0ZShcInhQb3NcIiwgaik7XHJcbiAgICBncmlkMS5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgIGdyaWQyLmFwcGVuZENoaWxkKGNlbGwyKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUJ1dHRvblRleHQoYWxpZ25tZW50KSB7XHJcbiAgaWYgKGFsaWdubWVudCA9PSBcInZlclwiKVxyXG4gICAgYXhpcy50ZXh0Q29udGVudCA9IFwiQ2hhbmdlIEF4aXMgfHwgQ3VycmVudCA6IFZlcnRpY2FsXCI7XHJcbiAgZWxzZSBpZiAoYWxpZ25tZW50ID09IFwiaG9yXCIpXHJcbiAgICBheGlzLnRleHRDb250ZW50ID0gXCJDaGFuZ2UgQXhpcyB8fCBDdXJyZW50IDogSG9yaXpvbnRhbFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlQnV0dG9uKCkge1xyXG4gIGF4aXMucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckJvYXJkKGdhbWVib2FyZCkge1xyXG4gIGxldCBnYW1lYm9hcmRDb3B5ID0gZ2FtZWJvYXJkLmJvYXJkLmpvaW4oXCIsXCIpO1xyXG4gIGxldCB2YWx1ZXMgPSBnYW1lYm9hcmRDb3B5LnNwbGl0KFwiLFwiKTtcclxuICBsZXQgaSA9IDA7XHJcbiAgbGV0IHBpY2s7XHJcbiAgbGV0IG5vdENvbXB1dGVyID0gZmFsc2U7XHJcblxyXG4gIGlmIChnYW1lYm9hcmQubmFtZSA9PSBcImNvbXB1dGVyXCIpIHBpY2sgPSBjZWxsczI7XHJcbiAgZWxzZSB7XHJcbiAgICBub3RDb21wdXRlciA9IHRydWU7XHJcbiAgICBwaWNrID0gY2VsbHM7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBlIG9mIHBpY2spIHtcclxuICAgIGlmICh2YWx1ZXNbaV0gPT0gXCJISVRcIikge1xyXG4gICAgICBlLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlc1tpXSA9PSBcIk1JU1NcIikge1xyXG4gICAgICBlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZXNbaV0gIT0gXCJcIiAmJiBub3RDb21wdXRlcikge1xyXG4gICAgICBlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZXNbaV0gPT0gXCJcIikge1xyXG4gICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGUuaW5uZXJUZXh0ID0gdmFsdWVzW2ldO1xyXG4gICAgaSsrO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGxhY2UoZ2FtZWJvYXJkKSB7XHJcbiAgZm9yIChsZXQgZSBvZiBjZWxscykge1xyXG4gICAgbGV0IGNlbGwgPSBbTnVtYmVyKGUuZ2V0QXR0cmlidXRlKFwieFBvc1wiKSksIE51bWJlcihlLmdldEF0dHJpYnV0ZShcInlQb3NcIikpXTtcclxuICAgIGUub25tb3VzZW92ZXIgPSAoKSA9PiBwbGFjZUZ1bmN0aW9uKGNlbGwsIGdhbWVib2FyZCwgXCJjaGVja0luXCIpO1xyXG4gICAgZS5vbm1vdXNlbGVhdmUgPSAoKSA9PiBwbGFjZUZ1bmN0aW9uKGNlbGwsIGdhbWVib2FyZCwgXCJjaGVja091dFwiKTtcclxuICAgIGUub25jbGljayA9ICgpID0+IHtcclxuICAgICAgcGxhY2VGdW5jdGlvbihjZWxsLCBnYW1lYm9hcmQpO1xyXG4gICAgICBjaGVja1JlbWFpbmluZ01vdmVzKGdhbWVib2FyZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNlbGwpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uY2xpY2tSZW1vdmUoZ2FtZWJvYXJkKSB7XHJcbiAgZm9yIChsZXQgZSBvZiBjZWxscykge1xyXG4gICAgZS5vbmNsaWNrID0gXCJcIjtcclxuICAgIGUub25tb3VzZWxlYXZlID0gXCJcIjtcclxuICAgIGUub25tb3VzZW92ZXIgPSBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2Vjb25kR3JpZChnYW1lYm9hcmQxLCBnYW1lYm9hcmQyKSB7XHJcbiAgZ3JpZDEuY2xhc3NMaXN0LmFkZChcIm1pbmltaXplXCIpO1xyXG4gIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBwbGF5ZXIxLmlubmVyVGV4dCA9IGdhbWVib2FyZDEubmFtZSArIFwiJ3MgYm9hcmRcIjtcclxuICBwbGF5ZXIyLmlubmVyVGV4dCA9IGdhbWVib2FyZDIubmFtZSArIFwiJ3MgYm9hcmRcIjtcclxuICBwbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gIHBsYXllcjIuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcblxyXG4gIG1haW4uYXBwZW5kQ2hpbGQocGxheWVyMSk7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChwbGF5ZXIyKTtcclxuICBncmlkMi5jbGFzc0xpc3QucmVtb3ZlKFwibWluaW1pemVcIik7XHJcbiAgZ3JpZDIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gIGFubm91bmNlbWVudDIuaW5uZXJUZXh0ID0gXCJDbGljayBvbiBhIGNlbGwgdG8gYXR0YWNrIVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBdHRhY2soZ2FtZWJvYXJkKSB7XHJcbiAgZm9yIChsZXQgZSBvZiBjZWxsczIpIHtcclxuICAgIGUub25tb3VzZW92ZXIgPSAoKSA9PiBlLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2tcIik7XHJcbiAgICBlLm9ubW91c2VsZWF2ZSA9ICgpID0+IGUuY2xhc3NMaXN0LnJlbW92ZShcImF0dGFja1wiKTtcclxuICAgIGUub25jbGljayA9ICgpID0+IHtcclxuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiYXR0YWNrXCIpO1xyXG4gICAgICBsZXQgY2VsbCA9IFtcclxuICAgICAgICBOdW1iZXIoZS5nZXRBdHRyaWJ1dGUoXCJ4UG9zXCIpKSxcclxuICAgICAgICBOdW1iZXIoZS5nZXRBdHRyaWJ1dGUoXCJ5UG9zXCIpKSxcclxuICAgICAgXTsgLy8gW3gsIHldXHJcbiAgICAgIGF0dGFja0Z1bmN0aW9uKGNlbGwsIGdhbWVib2FyZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNlbGwpO1xyXG4gICAgICBlLm9uY2xpY2sgPSBcIlwiO1xyXG4gICAgICBlLm9ubW91c2VvdmVyID0gXCJcIjtcclxuICAgICAgY29tcHV0ZXJBdHRhY2soKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lRW5kKCkge1xyXG4gIGZvciAobGV0IGUgb2YgY2VsbHMyKSBlLm9uY2xpY2sgPSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VBbm5vdW5jZW1lbnQoKSB7XHJcbiAgbGV0IHRleHQgPSBhbm5vdW5jZW1lbnRRdWV1ZTEucG9wKCk7XHJcbiAgaWYgKHRleHQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICBhbm5vdW5jZW1lbnQxLmNsYXNzTGlzdC5hZGQoXCJuZXd0ZXh0XCIpO1xyXG4gICAgYW5ub3VuY2VtZW50MS5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgbGV0IHRpbWUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgYW5ub3VuY2VtZW50MS5jbGFzc0xpc3QucmVtb3ZlKFwibmV3dGV4dFwiKTtcclxuICAgIH0sIDQwMCk7XHJcbiAgfVxyXG4gIGxldCB0ZXh0MiA9IGFubm91bmNlbWVudFF1ZXVlMi5wb3AoKTtcclxuICBpZiAodGV4dDIgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICBhbm5vdW5jZW1lbnQyLmNsYXNzTGlzdC5hZGQoXCJuZXd0ZXh0XCIpO1xyXG4gICAgYW5ub3VuY2VtZW50Mi5pbm5lclRleHQgPSB0ZXh0MjtcclxuICAgIGxldCB0aW1lMiA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBhbm5vdW5jZW1lbnQyLmNsYXNzTGlzdC5yZW1vdmUoXCJuZXd0ZXh0XCIpO1xyXG4gICAgfSwgNDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFubm91bmNlKG5hbWUsIGFjdGlvbiwgc2hpcCA9IFwiXCIpIHtcclxuICBsZXQgcXVldWU7XHJcbiAgY29uc29sZS5sb2cobmFtZSk7XHJcbiAgaWYgKG5hbWUgPT0gXCJjb21wdXRlclwiKSB7XHJcbiAgICBxdWV1ZSA9IGFubm91bmNlbWVudFF1ZXVlMjtcclxuICB9IGVsc2UgcXVldWUgPSBhbm5vdW5jZW1lbnRRdWV1ZTE7XHJcbiAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgIGNhc2UgXCJwbGFjZVwiOlxyXG4gICAgICBxdWV1ZS51bnNoaWZ0KFwieW91IGhhdmUgcGxhY2VkIHlvdXIgXCIgKyBzaGlwICsgXCIgb24geW91ciBib2FyZFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiaGl0XCI6XHJcbiAgICAgIHF1ZXVlLnVuc2hpZnQobmFtZSArIFwiJ3MgXCIgKyBzaGlwICsgXCIgaGFzIGJlZW4gaGl0IVwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibWlzc1wiOlxyXG4gICAgICBxdWV1ZS51bnNoaWZ0KFwidGhhdCBhdHRhY2sgaGl0IG5vdGhpbmcgaW4gXCIgKyBuYW1lICsgYCdzIHRlcnJpdG9yeSFgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwid2luXCI6XHJcbiAgICAgIGFubm91bmNlbWVudFF1ZXVlMS51bnNoaWZ0KG5hbWUgKyBcIiB3aW5zISFcIik7XHJcbiAgICAgIGFubm91bmNlbWVudFF1ZXVlMi51bnNoaWZ0KG5hbWUgKyBcIiB3aW5zISFcIik7XHJcbiAgfVxyXG59XHJcblxyXG4vL1RPRE8gRk9SIEZVVFVSRTpcclxuLy8tU09VTkQgRUZGRUNUU1xyXG4vLy1QTEFZRVIgTkFNSU5HXHJcbi8vLUZJTklTSCBnYW1lRW5kKClcclxuXHJcbnBsYWNpbmdTdGVwKCk7IC8vZ2FtZSBzdGFydFxyXG5zZXRJbnRlcnZhbChjaGFuZ2VBbm5vdW5jZW1lbnQsIDgwMCk7XHJcblxyXG5leHBvcnQge1xyXG4gIHJlbmRlckJvYXJkLFxyXG4gIGdldFBsYWNlLFxyXG4gIGdldEF0dGFjayxcclxuICBzZWNvbmRHcmlkLFxyXG4gIGNoYW5nZUJ1dHRvblRleHQsXHJcbiAgaGlkZUJ1dHRvbixcclxuICBvbmNsaWNrUmVtb3ZlLFxyXG4gIGdhbWVFbmQsXHJcbiAgYW5ub3VuY2UsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9