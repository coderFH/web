// 类的声明
class Person {}

// 类的表达式
var Animal = class {}

var p = new Person()
console.log(p.__proto__ === Person.prototype);