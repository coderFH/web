// /*
// 1. then方法
// then方法接收两个参数
// 第一个参数是状态切换为成功时的回调
// 第二个参数是状态切换为失败时的回调
// */
// let promise = new Promise(function(resolve,reject){
//     // resolve(); // 将状态修改为成功
//     reject();  // 将状态修改为失败
// });
// promise.then(function(){
//     console.log("示例1:成功");
// },function(){
//     console.log("示例1:失败");
// });

// --------------------------------------------------------------------------------
// /*
// 2.在修改promise状态时,可以传递参数给then方法中的回调函数
// */
// let promise1 = new Promise(function(resolve,reject){
//     // resolve("11111");
//     reject("222222");
// });
// promise1.then(function(data){
//     console.log("示例2:成功",data);
// },function(data){
//     console.log("示例2:失败",data);
// })

// --------------------------------------------------------------------------------
// /*
// 3.同一个promise对象可以多次调用then方法
// 当该promise对象的状态所有then方法都会被执行
// */
// let promise2 = new Promise(function(resolve,reject){
//     // resolve();
//     reject();
// });
// promise2.then(function(){
//     console.log("示例3: 成功1");
// },function(){
//     console.log("示例3: 失败1");
// });
// promise2.then(function(){
//     console.log("示例3: 成功2");
// },function(){
//     console.log("示例3: 失败2");
// });

// --------------------------------------------------------------------------------
// /*
// 4. then方法每次执行完毕后返回一个新的promise对象
// */
// let promise3 = new Promise(function(resolve,reject){
//     // resolve();
//     reject();
// });
// let p = promise3.then(function(){ console.log("示例4: 成功"); },function(){ console.log("示例4: 成功"); });
// console.log(p);                 //Promise { <pending> }
// console.log(promise3 === p);    //false

// --------------------------------------------------------------------------------
/*
5.可以通过上一个promise对象的then方法给下一个promise对象的then方法传递参数
注意点:
    无论是在上一个promise对象成功的回调还是失败得回调传递的参数
    都会传递给下一个promise对象成功的回调
*/
// let promise5 = new Promise(function(resolve,reject) {
//     // resolve('示例5:成功5555');
//     reject('示例5:失败5555');
// });

// let p5 = promise5.then(function(info){
//     console.log(info);
//     return "p5:aaa";
// },function(info){
//     console.log(info);
//     return "p5:bbb";
// });

// p5.then(function(info){
//     console.log("成功:",info);
// },function(info){
//     console.log("失败",info);
// });

// --------------------------------------------------------------------------------
/*
6.如果then方法返回的是一个Promise对象,那么会将返回的promise对象的
  执行结果中的值传递给下一个then方法
*/
let promise6 = new Promise(function (resolve, reject) {
    // resolve("示例6:成功1"); 
    reject ("示例6:失败1"); 
});
let promise66 = new Promise(function (resolve, reject) {
    // resolve("示例6:成功2"); 
    reject ("示例6:失败2"); 
});

let p6 = promise6.then(function (data) {
    console.log(data);
    return promise66;
}, function (data) {
    console.log( data);
    return promise66;
});
p6.then(function (data) {
    console.log("p6成功", data);
}, function (data) {
    console.log("p6失败", data);
});