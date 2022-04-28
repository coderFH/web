const promise  = new Promise( (resolve, reject) => {
    resolve('成功')
})

// 1. 同一个Promise可以被多次调用then方法
// 当我们的resolve方法被回调时, 所有的then方法传入的回调函数都会被调用
promise.then( res => {
    console.log('res1',res);
})
promise.then( res => {
    console.log('res2',res);
})
promise.then( res => {
    console.log('res3',res);
})

console.log('-------------------------');

// 2. then方法传入的'回调函数:可以有返回值'
// then 方法本身也是有返回的,他的返回值是一个promise对象
// 2.1 如果我们返回的是一个普通值(数值/字符串/普通对象/undefined), 
//     那么这个普通的值被作为一个新的Promise的resolve值
promise.then( res => {
    return '2.1返回一个普通值'
}).then(res => {
    console.log('res1:',res);
    return 'bbbb'
})

// 2.2 如果我们返回的是一个promise
promise.then( res => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            reject('2.2返回一个promise值')
        }, 3000);
    })
}).then( res => {
    console.log('res2',res);
},err => {
    console.log('err2',err);
})

// 2.3 如果返回的是一个对象,并且该对象实现了thenable
promise.then( res => {
    return {
        then: function(resolve, reject) {
            resolve('2.3返回一个有then方法的对象')
        }
    }
}).then( res => {
    console.log('res3:',res);
})