const fs = require('fs')
const path = require('path')

// 1.创建文件夹
// const dirname = './wfh'
// if (!fs.existsSync(dirname)) {
//     console.log('开始创建');
//     fs.mkdir(dirname,err => {
//         console.log(err);
//     })
// }

// 2.读取文件夹的所有文件
//{withFileTypes: true} 可选参数,默认是flase,不告诉文件的类型
// function getFiles(dirname) {
//     fs.readdir(dirname, { withFileTypes: true },(err, files) => {
//         for (const file of files) {
//             if(file.isDirectory()) { // 如果是文件夹,递归调用里边的文件
//                 const filepath = path.resolve(dirname,file.name)
//                 getFiles(filepath);
//             } else {
//                 console.log(file.name);
//             }
//         }
//     })
// }
// getFiles(dirname)

// 3.文件夹重命名
fs.rename('./www','./wfh', err => {
    console.log(err);
})