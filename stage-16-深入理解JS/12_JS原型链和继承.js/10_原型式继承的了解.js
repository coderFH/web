// 现在我想更改info的原型为obj
var obj = {
  name: "tamc",
  age: 18
}

var info = {}

// 方式1: 使用setPrototypeOf
function createObject1(o) {
    var newObj = {}
    Object.setPrototypeOf(newObj,o)
    return newObj
}

var info = createObject1(obj);
console.log(info);
console.log(info.__proto__);

// 方式2:因为setPrototypeOf出现比较晚,在没有使用setPrototypeOf时,一般用下面的方式
function createObject2(o) {
    function Fn() {}

    Fn.prototype = o;
    var newObj = new Fn(); // new时,会将当前对象的prototype指向Fn的prototype,所以newObj.prototype = o;
    return newObj;

    // 为啥上边的写法还要借助Fn,不能直接用下边的方式呢?
    // 因为普通对象的显示原型是拿不到的,而__proto__只是帮我我们去理解原型,不能直接使用
    // 所以只能借助Fn的显示原型去处理
    // var newObj = {};
    // Fn.prototype = o;
    // return newObj;
}

var info1 = createObject2(obj);
console.log(info1);
console.log(info1.__proto__);

// 方式3: 使用js提供的最新的Object.create
var info2 = Object.create(obj);
console.log(info2);
console.log(info2.__proto__);

// 了解了上边修改某个对象的原型的方式后,其实就为原型式继承打下了基础, 请继续看下面的寄生式继承的使用(里边会用到这里的知识点)
