/*
Promise的race静态方法: (谁先成功听谁的)
    1.all方法接收一个数组,
    2.如果数组中有多个Promise对象, 谁先返回状态就听谁的, 后返回的会被抛弃
    3.如果数组中不是Promise对象, 那么会直接执行then方法

应用场景: 接口调试, 超时处理
* */

let p1 = new Promise(function (resolve, reject) {
    // resolve("111");
    reject("aaa");
});

let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("222");
        // reject("bbb");
    }, 5000);
});

let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("333");
        // reject("ccc");
    }, 3000);
});

Promise.race([p1, p2, p3]).then(function (value) {
    console.log("成功", value);
}).catch(function (e) {
    console.log("失败", e);
});
