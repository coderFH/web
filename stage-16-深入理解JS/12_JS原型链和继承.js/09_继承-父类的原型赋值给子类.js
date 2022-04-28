// 父类: 公共属性和方法
function Person(name, age, friends) {
    this.name = name
    this.age = age
    this.friends = friends
}

Person.prototype.eating = function() {
    console.log(this.name + " eating~")
}

// 子类: 特有属性和方法
function Student(name, age, friends, sno) {
    Person.call(this, name, age, friends)
    this.sno = sno
}

// 直接将父类的原型赋值给子类, 作为子类的原型
/*
    这样赋值,貌似解决了08中的两个问题 
    但是如果某个子类添加方法,都会加入到Person的原型里
    违背了面向对象的原则,父类承载了太多子类的方法
    所以这么写也不行,只了解下就行
*/
Student.prototype = Person.prototype

Student.prototype.studying = function() {
    console.log(this.name + " studying~")
}

var stu = new Student("why", 18, ["kobe"], 111)
console.log(stu)
stu.eating()
