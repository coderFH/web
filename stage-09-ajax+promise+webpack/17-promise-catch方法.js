/*
1.catch方法
    catch 其实是 then(undefined, () => {}) 的语法糖
* */
// let promise = new Promise(function (resolve, reject) {
//     // resolve(); 
//     reject();
// });
// promise.catch(function () {
//     console.log("abc");
// });

/*
2.catch方法
    注意点: 如果需要分开监听, 也就是通过then监听成功,通过catch监听失败,那么必须使用链式编程, 否则会报错
* */
let promise1 = new Promise(function (resolve, reject) {
    // resolve();
    reject(); 
});
// promise1.then(function () {
//     console.log("成功1");
// }).catch(function () {
//     console.log("失败1");
// });

// 会报错
// promise1.then(function () {
//     console.log("成功");
// });
// promise1.catch(function () {
//     console.log("失败");
// });

// promise1.then(function () {
//     console.log("成功2");
// }, function () {
//     console.log("失败2");
// });

/*
3.catch方法
不使用链式编程的原因是
    1.如果promise的状态是失败, 但是没有对应失败的监听就会报错
    2.then方法会返回一个新的promise, 新的promise会继承原有promise的状态
    3.如果新的promise状态是失败, 但是没有对应失败的监听也会报错
* */
let promise2 = new Promise(function (resolve, reject) {
    // resolve(); // 将状态修改为成功
    reject(); // 将状态修改为失败
});
let p2 = promise2.then(function () {
    console.log("成功");
});

// 如果是reject(),没有对应的失败监听(),会报错
console.log(p2);
promise2.catch(function () {
    console.log("失败111");
});

p2.catch(function () {
    console.log("失败222");
});