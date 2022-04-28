var message = "Hello World"

// with语句: 可以形成自己的作用域
var obj = {name: "why", age: 18, message: "obj message"}

function foo() {
  function bar() {
    with(obj) {
      console.log(message)
    }
  }
  bar()
}

foo()

console.log('----------------------');

var info = {name: "curry"}
with(info) {
  console.log(name)
}
