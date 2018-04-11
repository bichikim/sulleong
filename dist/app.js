!function(t,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var r=o();for(var e in r)("object"==typeof exports?exports:t)[e]=r[e]}}(window,function(){return function(t){var o={};function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=o,r.d=function(t,o,e){r.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:e})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="",r(r.s=2)}([
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/*! exports used: forEach, isNil, isObject, last, trimStart */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,o){t.exports=require("lodash")},
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default, PairMap */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: multi ./src/index.ts (referenced with single entry) */function(t,o,r){"use strict";r.r(o),r.d(o,"PairMap",function(){return i});var e=r(/*! lodash */0),n=function(t,o,r,i){void 0===r&&(r=!1),void 0===i&&(i="");var f,u,c={};return Object(e.forEach)(t,function(t,s){f=t,u=Object(e.trimStart)(i+"/"+s,"/"),Object(e.isObject)(t)&&(f=n(t,o,r,u)),c[function(t){return r?o.toFrom(t):o.fromTo(t)}(u)]=f}),c};o.default=n;var i=function(){function t(t,o){void 0===o&&(o={}),this._from=[],this._to=[],this._flat(t,{},o)}return t.prototype.toFrom=function(t){var o=this._from[this._to.indexOf(t)];return Object(e.isNil)(o)&&(o=t),Object(e.last)(o.split("/"))},t.prototype.fromTo=function(t){var o=this._to[this._from.indexOf(t)];return Object(e.isNil)(o)&&(o=t),Object(e.last)(o.split("/"))},t.prototype._flat=function(t,o,r){var n=this;void 0===o&&(o={}),void 0===r&&(r={});var i,f,u,c,s,a=o.pFrom,p=void 0===a?"":a,l=o.pTo,d=void 0===l?"":l,v=r.selfFlag,b=void 0===v?"@":v;Object(e.forEach)(t,function(t,o){if(i=t,f=!1,u=!1,Object(e.isObject)(t)){var a=t[b];a||(f=!0),i=a,u=!0}if(f||o===b)return!0;c=Object(e.trimStart)(p+"/"+o,"/"),s=Object(e.trimStart)(d+"/"+i,"/"),n._from.push(c),n._to.push(s),u&&n._flat(t,{pFrom:c,pTo:s},r)})},t}()},
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,o,r){t.exports=r(/*! ./src/index.ts */1)}])});
//# sourceMappingURL=app.js.map