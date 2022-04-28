/**
 * resolve(参数)
 *  1> 普通的值或者对象  pending -> fulfilled
 *  2> 传入一个Promise
 *    那么当前的Promise的状态会由传入的Promise来决定
 *    相当于状态进行了移交
 *  3> 传入一个对象, 并且这个对象有实现then方法(并且这个对象是实现了thenable接口)
 *    那么也会执行该then方法, 并且又该then方法决定后续状态
 */

// 1. 传入Promise的特殊情况
const newPromise = new Promise( (resolve, reject) => {
    // resolve('aaaa')
    reject('aaaa')
})

/*
then的执行由于该Promise resolve了一个 Promise对象, 所以成功或者失败的回调就由newPromise决定的.所以尽管是resolve但由于
newPromise是reject,所以最终会走失败的回调
*/
new Promise( (resolve, reject) => {
    resolve(newPromise)
}).then( res => { 
    console.log('res',res);
}, err => {
    console.log('err',err);
})

// 2. 传入一个对象,这个对象有then方法
new Promise( (resolve, reject) => {
    const obj = {
        then: function(resolve, reject) {
            reject('reject message')
        }
    }
    resolve(obj)
}).then( res => {
    console.log('res', res);
}, err => {
    console.log('err',err);
})