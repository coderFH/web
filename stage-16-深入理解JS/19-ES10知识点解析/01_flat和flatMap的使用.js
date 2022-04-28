//flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返
//flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
//  注意一：flatMap是先进行map操作，再做flat的操作；
//  注意二：flatMap中的flat相当于深度为1；

// 1.flat的使用
const nums = [10, 20, [2, 9], [[30, 40], [10, 45]], 78, [55, 88]]
const newNums = nums.flat()
console.log(newNums)

const newNums2 = nums.flat(2)
console.log(newNums2)

// 2.flatMap的使用
const nums2 = [10, 20, 30]
const newNums3 = nums2.flatMap(item => {
  return item * 2
})
const newNums4 = nums2.map(item => {
  return item * 2
})
// 通过打印结果看flatMap和map并没有区别
// 但是如果结果里有数组,flatMap会进行一个'解压缩'的操作,具体看下边的例子
console.log(newNums3)
console.log(newNums4)

// 3.flatMap的应用场景
const messages = ["Hello World", "hello lyh", "my name is coderwhy"]
const words = messages.map(item => {
  return item.split(" ")
})
const words1 = messages.flatMap(item => {
    return item.split(" ")
})

console.log(words,words1)// 看下结果的区别