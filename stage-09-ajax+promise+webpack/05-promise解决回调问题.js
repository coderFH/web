const fs = require('fs');

// 1. 创建一个Promise对象 (一经创建, 立马执行)
new Promise((resolve, reject)=>{
    fs.readFile(__dirname + '/data/a.txt', (err, data)=>{
        if(err){
            reject(err);
        }
        resolve(data);
    });
}).then((data)=>{
    console.log(data.toString());
    return new Promise((resolve, reject)=>{
        fs.readFile(__dirname + '/data/b.txt', (err, data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        });
    })
}, (err)=>{
    console.log('读取文件失败!');
}).then((data)=>{
    console.log(data.toString());
    return new Promise((resolve, reject)=>{
        fs.readFile(__dirname + '/data/c.txt', (err, data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        });
    })
}).then((data)=>{
    console.log(data.toString())
});

// ----------------------------- promise解决回调地狱:模拟网络请求,1之后请求2,2之后请求3-------------------------
// 使用promise解决问题
function request() {
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("拿到的数据");
        }, 1000);
    });
}

request().then(function(data){
    console.log(data,1);
    return request();
}).then(function(data){
    console.log(data,2);
    return request();
}).then(function(data){
    console.log(data,3);
})
