//ES5只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。
//第一种场景，内层变量可能会覆盖外层变量。

var tmp = Date.now();

function f(){
    //内层变量覆盖外层变量
    console.log("内层变量覆盖外层变量tmp:"+tmp);
    if (false){
        var tmp = "hello world";
    }
}
f(); // undefined

//用来计数的循环变量泄露为全局变量。
//变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。

var s = 'hello';

for (var i = 0; i < s.length; i++){
    //console.log(s[i]);
}

console.log("内部变量泄露成全局变量"+i); // 5


//let实际上为JavaScript新增了块级作用域。
{{{{{var a=1;}console.log("没有块级作用域var:"+a);}}}};
{{{{{let b=1;}console.log("块级作用域let:"+typeof b);}}}};


//块级作用域的出现，实际上使得获得广泛应用的立即执行匿名函数（IIFE）不再必要了。
// IIFE写法
if(true) {
    (function () {
        var tmp = Date.now();
        console.log("var 作用域内部：" + tmp);
    }());
}
console.log("var 作用域外部：" + tmp);


// 块级作用域写法
if(true){
    let tmp = Date.now();
    console.log("let 作用域内部：" +tmp);
}
console.log("let 作用域外部：" +tmp);


//另外，ES6也规定，函数本身的作用域，在其所在的块级作用域之内。
function f() { console.log('I am outside!'); }
(function () {
    if(false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }

    f();
}());

//上面代码在ES5中运行，会得到“I am inside!”，但是在ES6中运行，会得到“I am outside!”。
//这是因为ES5存在函数提升，不管会不会进入 if代码块，函数声明都会提升到当前作用域的顶部，得到执行。
//而ES6支持块级作用域，不管会不会进入if代码块，其内部声明的函数皆不会影响到作用域的外部。

