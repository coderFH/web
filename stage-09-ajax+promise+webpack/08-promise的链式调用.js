// 网络请求到 aaa -> 自己处理拼接111 -> aaa111 -> 自己处理自己处理拼接222 -> aaa111222
new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('aaa');
    },2000)
}).then(res => {
    console.log(res);  // 自己处理的过程,加入这里有很多逻辑,这里用console.log代替
    return new Promise((resolve) => {
        resolve(res + '111')
    })
}).then(res => {
    console.log(res); // 自己处理的过程,加入这里有很多逻辑,这里用console.log代替
    return new Promise((resolve) => {
        resolve(res + '222')
    })
}).then(res => {
    console.log(res);
});

// ------------------------------------------ 优化处理 ------------------------------------------
//因为上边的过程 之后的两个promise都不是异步的 ,所以没必要new,可以改成下边的写法
new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('bbb');
    },2000)
}).then(res => {
    console.log(res);
    return Promise.resolve(res + '111')
}).then(res => {
    console.log(res);
    return Promise.resolve(res + '222')
}).then(res => {
    console.log(res);
});

// ------------------------------------------ 优化处理 ------------------------------------------
//上边的写法还是不够简洁 , 省略掉Promise.resolve
new Promise((resolve, reject) => {
    setTimeout( ()=> {
        resolve('ccc');
    },2000)
}).then(res => {
    console.log(res);
    // return res + '111' //成功的话
    throw 'err message' //失败的话这么处理
}).then(res => {
    console.log(res);
    return res + '222'
}).then(res => {
    console.log(res);
}).catch(err=>{
    console.log(err);
});
