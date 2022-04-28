const fs = require('fs');

 // 渲染进程中访问node模块的方式1:
 fs.readFile('package.json',{ encoding:'utf-8' }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('渲染进程访问node的方式1',data);
  }
})