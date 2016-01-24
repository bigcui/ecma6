/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	//数组解构赋值：
	"use strict";

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	console.log("-------数组解构赋值---------");
	//一一对应
	var a = 1;
	var b = 2;
	var c = 3;

	console.log("[a, b, c] = [1, 2, 3]:", a, b, c);

	//一一对应
	var foo = 1;
	var bar = 2;
	var baz = 3;

	console.log("[foo, [[bar], baz]] = [1, [[2], 3]]:", foo, bar, baz);

	//一一对应
	var _ref = [1, 2, 3];
	var third = _ref[2];

	console.log("[ , , third] = [1, 2, 3]:", third);

	//一一对应
	var _ref2 = [1, 2, 3];
	var x = _ref2[0];
	var y = _ref2[2];

	console.log("[x, , y] = [1, 2, 3]:", x, y);

	//一对多
	var head = 1;
	var tail = [2, 3, 4];

	console.log("[head,...tail] = [1, 2, 3, 4]:" + head, tail);

	//多对一
	var _ref3 = ['a'];
	var l = _ref3[0];
	var m = _ref3[1];

	var n = _ref3.slice(2);

	console.log("[l, m, ...n] = ['a']:", l, m, n);

	//映射不到,undefined
	var _ref4 = [];
	var unhead = _ref4[0];
	var _ref5 = [1];
	var unhead1 = _ref5[0];
	var unend = _ref5[1];

	console.log("[unhead] = [],[unhead1, unend]:", unhead, unhead1, unend);

	//如果等号的右边不是数组，打开注释，编译报错
	//let [foo] = 1;
	//let [foo] = false;
	//let [foo] = NaN;
	//let [foo] = undefined;
	//let [foo] = null;
	//let [foo] = {};

	//解构赋值不仅适用于var命令，也适用于let和const命令。
	//var [v1, v2, ..., vN ] = array;
	//let [v1, v2, ..., vN ] = array;
	//const [v1, v2, ..., vN ] = array;

	//对于Set结构，也可以使用数组的解构赋值。

	var _ref6 = new Set([1, 2, 3]);

	var _ref62 = _slicedToArray(_ref6, 3);

	var o = _ref62[0];
	var p = _ref62[1];
	var q = _ref62[2];

	console.log("[o, p, q] = new Set([1, 2, 3]):", o, p, q);

	//解构赋值允许指定默认值。
	var _ref7 = [];
	var _ref7$0 = _ref7[0];
	var defaultFoo = _ref7$0 === undefined ? true : _ref7$0;

	console.log("[defaultFoo = true] = []:", defaultFoo);

	// x='a', y='b'
	x = 'a';
	var _undefined = undefined;
	y = _undefined === undefined ? 'b' : _undefined;
	console.log("[x, y = 'b'] = ['a',undefined]:", x, y);

/***/ }
/******/ ]);