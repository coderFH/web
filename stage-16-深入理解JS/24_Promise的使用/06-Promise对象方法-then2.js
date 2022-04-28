//================================1.then方法============================
/*
1.then方法
    then方法接收两个参数,
        第一个参数是状态切换为成功时的回调,
        第二个参数是状态切换为失败时的回调
*/
let promise = new Promise(function (resolve, reject) {
    resolve(); // 将状态修改为成功
    reject(); // 将状态修改为失败
});
promise.then(function () {
    console.log("1.then方法-成功");
}, function () {
    console.log("1.then方法-失败");
});


//================================2.then方法============================
/*
2.then方法
    在修改promise状态时, 可以传递参数给then方法中的回到函数
*/
// resolve = success, reject = error;
let promise2 = new Promise(function (resolve, reject) {
    // resolve("111"); // 将状态修改为成功 success("111");
    reject("aaa"); // 将状态修改为失败  error("aaa");
});
promise2.then(function (data) {
    console.log("2.then方法-成功", data);
}, function (data) {
    console.log("2.then方法-失败", data);
});
// then方法的实现原理
// function success(data) {
//     console.log(data);
// }
// function error(data) {
//     console.log(data);
// }
// promise.then(success, error)

//================================3.then方法============================
/*
3.then方法
    同一个promise对象可以多次调用then方法,
    当该promise对象的状态时所有then方法都会被执行
 */
let promise3 = new Promise(function (resolve, reject) {
    // resolve(); // 将状态修改为成功
    reject(); // 将状态修改为失败
});
promise3.then(function () {
    console.log("3.then方法-成功1");
}, function () {
    console.log("3.then方法-失败1");
});
promise3.then(function () {
    console.log("3.then方法-成功2");
}, function () {
    console.log("3.then方法-失败2");
});

//================================4.then方法============================
/*
4.then方法
then方法每次执行完毕后会返回一个新的promise对象
*/
let promise4 = new Promise(function (resolve, reject) {
    resolve(); // 将状态修改为成功
    // reject(); // 将状态修改为失败
});
let p2 = promise4.then(function () {
    console.log("4.then方法-成功1");
}, function () {
    console.log("4.then方法-失败1");
});
console.log('4.then方法',p2);
console.log('4.then方法',promise4 === p2);


//================================5.then方法============================
/*
5.then方法
可以通过上一个promise对象的then方法给下一个promise对象的then方法传递参数
注意点:
    无论是在上一个promise对象成功的回调还是失败的回调传递的参数,
    都会传递给下一个promise对象成功的回调
*/
let promise5 = new Promise(function (resolve, reject) {
    // resolve("111"); // 将状态修改为成功
    reject("aaa"); // 将状态修改为失败
});

let p5 = promise5.then(function (data) {
    console.log("5.then方法-成功1", data);
    return "222";
}, function (data) {
    console.log("5.then方法-失败1", data);
    return "bbb";
});

p5.then(function (data) {
    console.log("5.then方法-成功2", data);
}, function (data) {
    console.log("5.then方法-失败2", data);
});

//================================5.then方法============================
/*
6.then方法
    如果then方法返回的是一个Promise对象, 那么会将返回的Promise对象的
    执行结果中的值传递给下一个then方法
* */
let promise6 = new Promise(function (resolve, reject) {
    // resolve("111"); 
    reject('1111');
});

let ppp = new Promise(function (resolve, reject) {
    resolve('222')
    // reject("bbb"); 
});

let p6 = promise6.then(function (data) {
    console.log("6.then方法-成功1", data);
    return ppp;
}, function (data) {
    console.log("6.then方法-失败1", data);
    return "bbb";
});

// 它的成功与否,取决于ppp是resolve还是reject
p6.then(function (data) {
    console.log("6.then方法-成功2", data);
}, function (data) {
    console.log("6.then方法-失败2", data);
});