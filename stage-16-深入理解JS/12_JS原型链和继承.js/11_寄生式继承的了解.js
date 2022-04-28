var personObj = {
    running: function() {
        console.log("running")
    }
}

function createStudent(name) {
    var stu = Object.create(personObj)
    stu.name = name
    stu.studying = function() {
        console.log("studying~")
    }
    return stu
}

var stuObj = createStudent("why")
var stuObj1 = createStudent("kobe")
var stuObj2 = createStudent("james")

// 这种方式其实又回归到了工厂函数的创建方式,缺点还是很多的,所以引出最后的寄生组合式的继承方式
  
  