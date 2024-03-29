console.log("-------对象扩展---------");

//ES6允许在对象之中，只写属性名
function f(x, y) {
    return {x, y};
}

// 等同于
//function f(x, y) {
//    return {x: x, y: y};
//}

console.log("属性简写",f(1, 2)); // Object {x: 1, y: 2}


//除了属性简写，方法也可以简写。
var birth = '2000/01/01';
var Person = {

    name: '张三',

    //等同于birth: birth
    birth,

    // 等同于hello: function ()...
    hello() { console.log('我的名字是', this.name); }
};

//尤其在commonjs中
//module.exports = {
//    getItem,
//    setItem,
//    clear
//};

//get,set方法
var cart = {
    _wheels: 4,

    get wheels () {
        return this._wheels;
    },

    set wheels (value) {
        if (value < this._wheels) {
            throw new Error('数值太小了！');
        }
        this._wheels = value;
    }
};



var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);

console.log("对象合并",target);


//属性遍历
//ES6一共有6种方法可以遍历对象的属性。

//（1）for...in
//
//for...in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）。
//
//（2）Object.keys(obj)
//
//Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。
//
//（3）Object.getOwnPropertyNames(obj)
//
//Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。
//
//（4）Object.getOwnPropertySymbols(obj)
//
//Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有Symbol属性。
//
//（5）Reflect.ownKeys(obj)
//
//Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管是属性名是Symbol或字符串，也不管是否可枚举。
//
//（6）Reflect.enumerate(obj)
//
//Reflect.enumerate返回一个Iterator对象，遍历对象自身的和继承的所有可枚举属性（不含Symbol属性），与for...in循环相同。
//
//以上的6种方法遍历对象的属性，都遵守同样的属性遍历的次序规则。
//
//首先遍历所有属性名为数值的属性，按照数字排序。
//其次遍历所有属性名为字符串的属性，按照生成时间排序。
//最后遍历所有属性名为Symbol值的属性，按照生成时间排序。


