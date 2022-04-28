var obj = {
  name: "why",
  age: 18
}

var info = Object.create(obj, {
  address: {
    value: "北京市",
    enumerable: true
  }
})
  
// hasOwnProperty:对象是否有某一个属于自己的属性(不是在原型上的属性)
console.log(info.hasOwnProperty("address")) // ture
console.log(info.hasOwnProperty("name")) // false name在原型上

// in 操作符: 不管在当前对象还是原型中返回的都是true
console.log("address" in info)
console.log("name" in info)