// instanceof: 用于检测'构造函数'的pototype，是否出现在某个实例对象的原型链上(注意是构造函数)
// isPrototypeOf: 用于检测某个对象，是否出现在某个实例对象的原型链上
function Person() {}

var p = new Person()
console.log(p instanceof Person)
console.log(Person.prototype.isPrototypeOf(p))

// instanceof 只适用于右操作符是构造函数
// 如果右操作符不是构造函数,则可以使用 isPrototypeOf
var obj = {
  name: "why",
  age: 18
}

var info = Object.create(obj)
// console.log(info instanceof obj) //会报错,因为obj不是一个构造函数
console.log(obj.isPrototypeOf(info))
