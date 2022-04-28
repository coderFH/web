const promise = new Promise((resolve, reject) => { })
promise.then( res => {}, err => {})


// 以上代码完全等价于下面的代码


new Promise( (resolve, reject) => {
    // pending状态: 待定/悬而未决的
    console.log('------');
    reject()  // 处于rejected状态(已拒绝状态)
    resolve() // 处于fulFilled状态(已敲定/兑现状态)
    console.log("++++++++++++")
}).then( res => {
    console.log('res:',res);
}, err => {
    console.log('err', err);
})