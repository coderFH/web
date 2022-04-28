/*
3.catch方法
    不使用链式编程的原因是
        1.如果promise的状态是失败, 但是没有对应失败的监听就会报错
        2.then方法会返回一个新的promise, 新的promise会继承原有promise的状态
        3.如果新的promise状态是失败, 但是没有对应失败的监听也会报错
* */
let promise3 = new Promise(function (resolve, reject) {
    // resolve(); // 如果是成功,即使不监听,也不会报错
    reject();     // 但如果为失败,则必须要有监听,头则就会报错,这就是报错的根源所在
});

// 所以下边的代码为啥报错
// 是因为执行promise3.then(function () {}) 的时候,其实是会返回一个新的promise对象,该对象会继承原有promise的状态(当前即reject())
// 但是又没有对该新对象的失败做监听,所以就报错了
// promise3.then(function () {
//     console.log("成功");
// });
// promise3.catch(function () {
//     console.log("失败");
// });

// 要解决报错,可以有两种方式:
// 1. 通过链式调用
/*
该方案看似是捕获新promise对象的失败,但其实promise内部做了优化
catch会优先捕获promise3的reject(),如果promise3没有reject()
而 promise3.then(function () {
    console.log("3.catch方法-成功");
}) 返回的新promise对象抛出了reject()
那么catch也会捕获这个新promise的reject状态
*/
promise3.then(function () {
    console.log("3.catch方法-成功");
}).catch(()=> { // 不加这个catch失败得监听,是会报错的
    console.log("3.catch方法-失败");
});


// 解决方式2: 捕获下新promise的reject(), 不常用,了解即可,最常用的还是上边的链式调用
let p2 = promise3.catch(function () {
    console.log("失败1");
});
p2.catch(function () {
    console.log("失败2");
});