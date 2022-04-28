const fs = require('fs')

const content = '你好啊,curry!'

// writeFile第三个参数是一个可选的参数里边可以传flag和
// flag: a a+ w w+
// encoding: 默认是utf8
fs.writeFile('./abc.txt',content,{ flag: 'a+', encoding:'utf8' }, err => {
    console.log(err);
})

// 文件读取
// 如果不传{ encoding:'utf-8' },打印的是二进制的数据流
fs.readFile('./abc.txt',{ encoding:'utf-8' },(err ,data) => {
    console.log(data);
})