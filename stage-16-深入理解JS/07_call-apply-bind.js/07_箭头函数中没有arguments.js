// 箭头函数不绑定arguments,所以我们在箭头函数中使用arguments会去上层作用域查找
// 1.案例一:
var foo = () => {
  console.log(arguments) // 从上层作用域查找,找到全局
}

foo()


// 2.案例二:
function foo1() {
  var bar = () => {
    console.log(arguments) // 从上层作用域查找,找到123
  }
  return bar
}

var fn = foo1(123)
fn()


// 3.案例三:
var foo = (num1, num2, ...args) => {
    console.log(args)
}

foo(10, 20, 30, 40, 50)