// 使用promise的方式
function request2(fn) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('拿到了数据');
        }, 1000);
    })
}
request2().then( data => {
    console.log(data,1);
    return request2();
}).then( data => {
    console.log(data,2);
    return request2();
}).then( data => {
    console.log(data,3);
})