function Student(name, age) {
    this.name = name
    this.age = age
}

function Teacher() {}

// 正常情况下的打印
const stu = new Student('why',18)
console.log(stu);
console.log(stu.__proto__ === Student.prototype);

console.log('----------------');

// 有个需求,我想在执行Student函数中的内容,但创建出来的对象是Teacher对象
const teacher = Reflect.construct(Student, ['tmac',18], Teacher);
console.log(teacher);
console.log(teacher.__proto__ === Teacher.prototype);
