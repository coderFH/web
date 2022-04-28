const promise = new Promise((resolve, reject) => {
  reject("rejected status")
  // throw new Error("rejected status")
})

//1.当executor抛出异常时, 也是会调用错误(拒绝)捕获的回调函数的
promise.then(undefined, err => {
  console.log("err1:", err)
  console.log("----------")
})

// 2.通过catch方法来传入错误(拒绝)捕获的回调函数
// 这种写法其实是第一种写法的语法糖而已
promise.catch(err => {
  console.log("err2:", err)
  console.log("----------")
})

// 同时catch方法也能够捕获异常
promise.then(res => {
    // return new Promise((resolve, reject) => {
    //   reject("then rejected status")
    // })
    throw new Error("error message")
}).catch(err => {
    console.log("err:", err)
})


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
// 通过then监听成功通过catch监听失败 那么必须使用链式编程, 否则会报错
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

//通过then监听成功通过catch监听失败,必须使用链式的方式,下边的写法会报错,具体原因,看08文件
promise2.then(function () {
    console.log("成功");
});
promise2.catch(function () {
    console.log("失败");
});


// 4.catch方法的返回值
const promise1 = new Promise((resolve, reject) => {
    reject("111111")
})

promise1.then(res => {
    console.log("res:", res)
}).catch(err => {
    console.log("err:", err)
    return "catch return value"
}).then(res => {
    console.log("res result:", res)
}).catch(err => {
    console.log("err result:", err)
})
  