function createObject(o) {
    function Fn() {}
    Fn.prototype = o
    return new Fn()
}

// 实现继承的关键函数
function inheritPrototype(SubType, SuperType) {
    /*
    注意区分文件09中的Student.prototype = Person.prototype的区别
    Objec.create(SuperType.prototype)本质会生成一个新的对象
    所以SubType的原型指向这个新生成的对象,所有的操作会在这个新生成的对象中去操作
    每生成的对象都有自己中间对象去充当自己的原型
    */
    SubType.prototype = Objec.create(SuperType.prototype)
    Object.defineProperty(SubType.prototype, "constructor", { // 记得修改新生成原型的constructor属性
        enumerable: false,
        configurable: true, 
        writable: true,
        value: SubType
    })
}

function Person(name, age, friends) {
    this.name = name
    this.age = age
    this.friends = friends
}

Person.prototype.running = function() {
    console.log("running~")
}

Person.prototype.eating = function() {
    console.log("eating~")
}


function Student(name, age, friends, sno, score) {
    Person.call(this, name, age, friends)
    this.sno = sno
    this.score = score
}

inheritPrototype(Student, Person)

Student.prototype.studying = function() {
    console.log("studying~")
}

var stu = new Student("why", 18, ["kobe"], 111, 100)
console.log(stu)
stu.studying()
stu.running()
stu.eating()

console.log(stu.constructor.name)

