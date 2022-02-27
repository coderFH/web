/*
Promise的all静态方法:
    1.all方法接收一个数组,
    2.如果数组中有多个Promise对象,只有都成功才会执行then方法,
    并且会按照添加的顺序, 将所有成功的结果重新打包到一个数组中返回给我们
    3.如果数组中不是Promise对象, 那么会直接执行then方法

    应用场景: 批量加载, 要么一起成功, 要么一起失败
*/
let p1 = new Promise(function (resolve, reject) {
    resolve("111");
    reject("aaa");
});
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("222");
    }, 5000);
});
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("333");
    }, 3000);
});
Promise.all([p1, p2, p3]).then(function (result) {
    console.log("成功", result);
}, function (err) {
    console.log("失败", err);
});