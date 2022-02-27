/*
1.catch方法
    和then一样, 在修改promise状态时, 可以传递参数给catch方法中的回到函数
* */
// let promise = new Promise(function (resolve, reject) {
//     reject("111");
// });
// promise.catch(function (data) {
//     console.log(data);
// });

/*
2.catch方法
    和then一样, 同一个promise对象可以多次调用catch方法,
    当该promise对象的状态时所有catch方法都会被执行
* */
// let promise2 = new Promise(function (resolve, reject) {
//     reject();
// });
// promise2.catch(function () {
//     console.log("失败1");
// });
// promise2.catch(function () {
//     console.log("失败2");
// });
// promise2.catch(function () {
//     console.log("失败3");
// });

/*
3.catch方法
    和then一样, catch方法每次执行完毕后会返回一个新的promise对象
* */
// let promise3 = new Promise(function (resolve, reject) {
//     reject();
// });
// let p3 = promise3.catch(function () {
//     console.log("失败1");
// });
// console.log(p3);
// console.log(promise === p3);

/*
4.catch方法
    和then方法一样, 上一个promise对象也可以给下一个promise成功的传递参数
    注意点:
    无论是在上一个promise对象成功的回调还是失败的回调传递的参数,
    都会传递给下一个promise对象成功的回调
* */
// let promise4 = new Promise(function (resolve, reject) {
//     reject();
// });
// let p4 = promise4.catch(function () {
//     console.log("失败1");
//     return "jack";
// });
// p4.then(function (data) {
//     console.log("成功2", data);
// }, function (data) {
//     console.log("失败2", data);
// });

 /*
5.catch方法
    和then一样, catch方法如果返回的是一个Promise对象, 那么会将返回的Promise对象的
    执行结果中的值传递给下一个catch方法
* */
// let promise = new Promise(function (resolve, reject) {
//     reject();
// });
// let ppp = new Promise(function (resolve, reject) {
//     // resolve("1111");
//     reject("abcd");
// });
// let p2 = promise.catch(function () {
//     console.log("失败1");
//     return ppp;
// });
// p2.then(function (data) {
//     console.log("成功2", data);
// }, function (data) {
//     console.log("失败2", data);
// });

/*
6.catch方法
    和then方法第二个参数的区别在于, catch方法可以捕获上一个promise对象then方法中的异常
* */
let promise = new Promise(function (resolve, reject) {
    resolve();
});

// 一般的监听,当执行到xxx就会报错
// promise.then(function () {
//     console.log("成功");
//     xxx
// }, function () {
//     console.log("失败");
// });

//通过catch的监听,执行到xxx,catch就会进行捕获
promise.then(function () {
    console.log("成功");
    xxx
}).catch(function (e) {
    console.log("失败", e);
});