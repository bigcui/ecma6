//ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
var s = new Set();

[2,3,5,4,5,2,2].map(x => s.add(x))

for (let i of s) {console.log("遍历set",i)}

let set = new Set(['red', 'green', 'blue']);
console.log("输出set",set);

//JavaScript的对象（Object），本质上是键值对的集合（Hash结构）
//但是只能用字符串当作键。这给它的使用带来了很大的限制。
var map = new Map([["name", "张三"], ["title", "Author"]]);
console.log("输出map",map);


//Set、Map结构的实例有以下属性。
//
//prototype.constructor：构造函数，默认就是Set函数。
//prototype.size：返回Set实例的成员总数。
//
////操作函数
//add(value)：添加某个值，返回Set结构本身。
//delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
//has(value)：返回一个布尔值，表示该值是否为Set的成员。
//clear()：清除所有成员，没有返回值。
//
////遍历函数
//keys()：返回一个键名的遍历器
//values()：返回一个键值的遍历器
//entries()：返回一个键值对的遍历器
//forEach()：使用回调函数遍历每个成员