// 在前面，我们可以通过 Object.entries 将一个对象转换成 entries，那么如果我们有一个entries了，如何将其转换成对象呢？
// ES10提供了 Object.formEntries来完成转换

const obj = {
  name: "tmac",
  age: 18,
  height: 1.88
}

const entries = Object.entries(obj)
console.log(entries)

 // 如果不用formEntrie来实现
const newObj = {}
for (const entry of entries) {
  newObj[entry[0]] = entry[1]
}
console.log(newObj)

// 1.ES10中新增了Object.fromEntries方法
const newObj1 = Object.fromEntries(entries)
console.log(newObj1)

// 2. Object.fromEntries的应用场景
const queryString = 'name=tmac&age=18&height=1.88'
const queryParams = new URLSearchParams(queryString)
for (const param of queryParams) {
  console.log(param)
}
const paramObj = Object.fromEntries(queryParams)
console.log(paramObj)