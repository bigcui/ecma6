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

	"use strict";

	console.log("-------字符串扩展---------");

	var name = "Bob",
	    time = "today";
	console.log("Hello " + name + ", how are you " + time + "?");

	var data = { supplies: [1, 2, 3] };
	var template = "\n<ul>\n  <% for(var i=0; i < data.supplies.length; i++) {%>\n    <li><%= data.supplies[i] %></li>\n  <% } %>\n</ul>\n";

	function compile(template) {
	    var evalExpr = /<%=(.+?)%>/g;
	    var expr = /<%([\s\S]+?)%>/g;

	    template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`');

	    template = 'echo(`' + template + '`);';

	    var script = "(function parse(data){\n    var output = \"\";\n\n    function echo(html){\n      output += html;\n    }\n\n    " + template + "\n\n    return output;\n  })";

	    return script;
	}

	var parse = eval(compile(template));
	console.log(parse({ supplies: ["broom", "mop", "cleaner"] }));

	console.log("-------数组扩展---------");

	var arrayLike = {
	    '0': 'a',
	    '1': 'b',
	    '2': 'c',
	    length: 3
	};

	// ES5的写法
	var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
	console.log("es5，json2array", arr1);

	// ES6的写法
	var arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
	console.log("es6，json2array", arr2);

	// NodeList对象
	var ps = document.querySelectorAll('script');
	Array.from(ps).forEach(function (p) {
	    console.log("脚本标签", p);
	});

	// arguments对象
	function foo() {
	    var args = Array.from(arguments);
	    console.log("参数列表", args);
	}
	foo(1, 2, 3);

	//数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数
	var num = [1, 4, -5, 10].find(function (n) {
	    return n < 0;
	});
	console.log("find函数，找到第一个匹配元素" + num);

/***/ }
/******/ ]);