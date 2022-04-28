// -------------------------------- 父类: 公共属性和方法 --------------------------------
function Person() {
    this.name = "tmac"
    this.friends = []
}

Person.prototype.eating = function() {
    console.log(this.name + " eating~")
}

//--------------------------------  子类: 特有属性和方法 --------------------------------
function Student() {
    this.sno = 111
}

var p = new Person()
//必须放到该位置上,不能放在20行的后边
Student.prototype = p; // 这一句是原型链继承的关键,查找属性或者方法时,沿着Student的原型找到p

Student.prototype.studying = function() {
    console.log(this.name + " studying~")
}


var stu = new Student()
console.log(stu.name)
stu.eating()
stu.studying()

// 原型链实现继承的弊端:
// 1.第一个弊端: 打印stu对象, 继承的属性是看不到的
console.log('弊端1:--------');
console.log(stu)

// 2.第二个弊端: 创建出来两个stu的对象
console.log('弊端2:--------');
var stu1 = new Student()
var stu2 = new Student()

// 直接修改对象上的属性, 是给本对象添加了一个新属性
stu1.name = "kobe"
console.log(stu2.name)

// 注意: 如果是下边的方式使用friends,是没有问题的,因为该方式是向stu1添加一个friends属性,当然不会影响到stu2
// stu1.friends = ['curry']
// 但如果是获取引用, 修改引用中的值, 会相互影响
stu1.friends.push("kobe")
console.log(stu1.friends)
console.log(stu2.friends)

// 3.第三个弊端: 在前面实现类的过程中都没有传递参数
console.log('弊端3:--------');
var stu3 = new Student("lilei", 112)
