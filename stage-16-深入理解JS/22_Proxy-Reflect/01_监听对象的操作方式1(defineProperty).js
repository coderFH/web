const obj = {
    name:'tmac',
    age: 18
}

// 比如我想监听name属性的变化
Object.defineProperty(obj,'name',{
    get: function() {
        console.log('监听到obj对象的name属性被访问');
    },
    set: function() {
        console.log('监听到obj对象的name属性被设置值');
    }
})

obj.name = 'curry'


console.log('-------------------------------');

// 上边的例子只能监听一个属性的变化,如果我想监听全部的属性变化该如何处理呢?
const obj1 = {
    name: 'curry',
    age: 18
}

Object.keys(obj1).forEach( key => {
    let value = obj1[key]
    Object.defineProperty(obj1,key,{
        get: function() {
            console.log(`监听到obj1对象的${key}属性被访问了`);
            return value
        },
        set: function(newValue) {
            console.log(`监听到obj1对象的${key}属性被设置了`);
            value = newValue
        }
    }) 
})

obj1.name = 'tamc'
obj1.age = 30
console.log(obj1.name);
console.log(obj1.age);

/*
defineProperty的缺点
    首先，Object.defineProperty设计的初衷，不是为了去监听截止一个对象中所有的属性的。
    其次，如果我们想监听更加丰富的操作，比如新增属性、删除属性，那么Object.defineProperty是无能为力的。
*/