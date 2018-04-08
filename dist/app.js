!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],o):"object"==typeof exports?exports["vuex-keg"]=o(require("lodash")):t["vuex-keg"]=o(t._)}(window,function(t){return function(t){var o={};function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=2)}([
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/*! exports used: forEach, isNil, isObject, last, trimStart */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(o,e){o.exports=t},
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default, PairMap */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: multi ./src/index.ts (referenced with single entry) */function(t,o,e){"use strict";e.r(o),e.d(o,"PairMap",function(){return i});var r=e(/*! lodash */0),n=function(t,o,e,i){void 0===e&&(e=!1),void 0===i&&(i="");var u,f,c={};return Object(r.forEach)(t,function(t,s){u=t,f=Object(r.trimStart)(i+"/"+s,"/"),Object(r.isObject)(t)&&(u=n(t,o,e,f)),c[function(t){return e?o.toFrom(t):o.fromTo(t)}(f)]=u}),c};o.default=n;var i=function(){function t(t,o){void 0===o&&(o={}),this._from=[],this._to=[],this._flat(t,{},o)}return t.prototype.toFrom=function(t){var o=this._from[this._to.indexOf(t)];return Object(r.isNil)(o)&&(o=t),Object(r.last)(o.split("/"))},t.prototype.fromTo=function(t){var o=this._to[this._from.indexOf(t)];return Object(r.isNil)(o)&&(o=t),Object(r.last)(o.split("/"))},t.prototype._flat=function(t,o,e){var n=this;void 0===o&&(o={}),void 0===e&&(e={});var i,u,f,c,s,a=o.pFrom,p=void 0===a?"":a,d=o.pTo,l=void 0===d?"":d,v=e.selfFlag,b=void 0===v?"@":v;Object(r.forEach)(t,function(t,o){if(i=t,u=!1,f=!1,Object(r.isObject)(t)){var a=t[b];a||(u=!0),i=a,f=!0}if(u||o===b)return!0;c=Object(r.trimStart)(p+"/"+o,"/"),s=Object(r.trimStart)(l+"/"+i,"/"),n._from.push(c),n._to.push(s),f&&n._flat(t,{pFrom:c,pTo:s},e)})},t}()},
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,o,e){t.exports=e(/*! ./src/index.ts */1)}])});