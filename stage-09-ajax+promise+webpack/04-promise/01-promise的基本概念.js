
/*
1.什么是promise?
    promise是ES6中新增的异步编程解决方案, 在代码中的表现是一个对象
*/

// 需求: 从网络上加载3个资源, 要求加载完资源1才能加载资源2, 加载完资源2才能加载资源3
// 前面任何一个资源加载失败, 后续资源都不加载

// 1.正常的解决方式(回调地狱)
// function request(fn) {
//     setTimeout(function () {
//         fn("拿到的数据");
//     }, 1000);
// }

// request(function (data) {
//     console.log(data, 1);
//     request(function (data) {
//         console.log(data, 2);
//         request(function (data) {
//             console.log(data, 3);
//         });
//     });
// });

/*
2.promise作用
企业开发中为了保存异步代码的执行顺序, 那么就会出现回调函数层层嵌套
如果回调函数嵌套的层数太多, 就会导致代码的阅读性, 可维护性大大降低
promise对象可以将异步操作以同步流程来表示, 避免了回调函数层层嵌套(回调地狱)
*/
// 2.使用promise的方式
function request2(fn) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('拿到了数据');
        }, 1000);
    })
}
request2().then((data) => {
    console.log(data,4);
    return request2();
}).then((data) => {
    console.log(data,5);
    return request2();
}).then((data)=>{
    console.log(data,6);
})