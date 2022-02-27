//================================1.catch方法============================
/*
1.catch方法
    catch 其实是 then(undefined, () => {}) 的语法糖
* */
let promise = new Promise(function (resolve, reject) {
    // resolve(); // 将状态修改为成功
    reject(); // 将状态修改为失败
});
promise.catch(function () {
    console.log("abc");
});


//================================2.catch方法============================
/*
2.catch方法
    注意点: 如果需要分开监听, 也就是通过then监听成功通过catch监听失败
    那么必须使用链式编程, 否则会报错
* */

let promise2 = new Promise(function (resolve, reject) {
    // resolve(); // 将状态修改为成功
    reject(); // 将状态修改为失败
});

// 以下两种监听方式,完全等价
promise2.then(function () {
    console.log("2.catch方法-成功");
}).catch(function () {
    console.log("2.catch方法-失败");
});

promise2.then(function () {
    console.log("2.catch方法-成功");
}, function () {
    console.log("2.catch方法-失败");
});

//通过then监听成功通过catch监听失败,必须使用链式的方式,下边的写法会报错,具体原因,看3
// promise2.then(function () {
//     console.log("成功");
// });
// promise2.catch(function () {
//     console.log("失败");
// });

//================================3.catch方法============================
/*
3.catch方法
    不使用链式编程的原因是
        1.如果promise的状态是失败, 但是没有对应失败的监听就会报错
        2.then方法会返回一个新的promise, 新的promise会继承原有promise的状态
        3.如果新的promise状态是失败, 但是没有对应失败的监听也会报错
* */
let promise3 = new Promise(function (resolve, reject) {
    // resolve(); // 如果是成功,即使不监听,也不会报错
    reject();     // 但如果为失败,则必须要有监听,头则就会报错
});

let p2 = promise3.then(function () {
    console.log("3.catch方法-成功");
}).catch(()=> { // 不加这个catch失败得监听,是会报错的
    console.log("3.catch方法-失败");
});

// 所以下边的代码为啥报错,就是因为执行promise3.then(function () {}) 的时候,其实是会返回一个新的promise对象,但是又没有对该新对象的失败做监听,所以就报错了
// promise3.then(function () {
//     console.log("成功");
// });
// promise3.catch(function () {
//     console.log("失败");
// });

// 如何解决上述问题呢? 对新返回的对象,再进行catch的监听
promise3.catch(function () {
    console.log("失败1");
});
p2.catch(function () {
    console.log("失败2");
});