var name = "window";

var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};

function sayName() {
  var sss = person.sayName;
  sss();  
  person.sayName();  
  (person.sayName)();
  (b = person.sayName)();
}

sayName();
// 答案在下边,先不要看哦































sss(); // window: 独立函数调用
person.sayName(); // person: 隐式调用
(person.sayName)(); // person: 隐式调用
(b = person.sayName)(); // window: 赋值表达式(独立函数调用)