var bar = () => {
    console.log(this, arguments)
}
console.log(bar.prototype)
// 箭头函数是没有显式原型的，所以不能作为构造函数，使用new来创建对象；
// const b = new bar() // bar is not a constructor