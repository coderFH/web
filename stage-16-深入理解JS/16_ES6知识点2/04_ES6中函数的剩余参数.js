function foo(m, n, ...args) {
  console.log(m, n)
  console.log(args)
  console.log(arguments)
}

foo(20, 30, 40, 50, 60)


//rest paramaters必须放到最后
//Rest parameter must be last formal parameter
function foo1(m, n = m + 1) {
  console.log(m, n)
}
foo1(10);
