// 类方法: Promise.reslve
// 1. 普通的值
const promise = Promise.resolve({name: 'tmac'})
promise.then( res => {
    console.log('res:',res);
}).catch( err => {
    console.log('err:',err);
})
// 以上代码相当于
// const promise1 = new Promise( (resolve, reject) => {
//     resolve({ name : 'tmac' })
// })

// 2. 传入Promise
const promise2 = Promise.resolve(new Promise((resolve, reject) => {
    reject("11111")
}))
promise2.then( res => {
    console.log('成功',res);
}).catch( err => {
    console.log('失败',err);
})
