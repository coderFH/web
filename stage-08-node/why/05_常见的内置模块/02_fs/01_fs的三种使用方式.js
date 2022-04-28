const fs = require('fs');

// 案例: 读取文件的信息
const filepath = './abc.txt'

// 1. 方式1: 同步操作
// const info = fs.statSync(filepath);
// console.log('后续需要执行的代码');
// console.log(info);

// 2. 方式2: 异步操作
// fs.stat(filepath, (err,info) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(info);
// })
// console.log('后续需要执行的代码');

// 3. 方式3: Promise
fs.promises.stat(filepath).then( info => {
    console.log(info);
    console.log(info.isFile());      // 是否是文件
    console.log(info.isDirectory()); // 是否是文件夹
}).catch( err => {
    console.log(err);
})
console.log('后续需要执行的代码');