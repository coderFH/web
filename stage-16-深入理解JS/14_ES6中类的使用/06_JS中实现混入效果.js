class Person {}

function mixinRunner(BaseClass) {
    class NewClass extends BaseClass {
        running() {
            console.log('running~');
        }
    }
    return NewClass
}

function mixinEater(BaseClass) {
    return class extends BaseClass {
        eating() {
            console.log('eating~');
        }
    }
}

// 在JS中类只能有一个父类: 单继承
class Student extends Person {}

var newStudent = mixinEater(mixinRunner(Student))
var ns = new newStudent()
ns.running()
ns.eating()