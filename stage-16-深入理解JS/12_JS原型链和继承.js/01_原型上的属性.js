var obj = {
    name: "why",
    age: 18
}

obj.__proto__ = {
    address: "北京市"
}

console.log(obj) // { name: 'why', age: 18 } 原型上的属性是打印不出来的

  
  