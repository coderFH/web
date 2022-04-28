/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path')
const { BrowserWindow } = require('@electron/remote')

 // 渲染进程中访问node模块的方式2, 这个文件会在index.html中引入
 fs.readFile('package.json',{ encoding:'utf-8' }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('渲染进程访问node的方式2',data);
  }
})

window.onload = () => {
   // --------------------------------渲染进程中调用node模块的举例--------------------------------
  const openFileDom = document.getElementById('openFile');
  const contentDom = document.getElementById('content');
  openFileDom.onclick = () => {
    fs.readFile('package.json',{ encoding:'utf-8' }, (err, data) => {
      if (err) {
        console.log(err);
        return
      }
      contentDom.innerHTML = data.toString();
    })
  }

  // -----------------------------渲染进程中和h5的api合用的例子--------------------------------
  const dropDom = document.getElementById('drop');
  // 阻止进入,离开,移动的默认行为
  dropDom.ondragenter = dropDom.ondragover = dropDom.ondragleave = () => false
  dropDom.ondrop = (e) => {
    // console.log(e);
    console.log(e.dataTransfer.files[0]);
    // const filePath = e.dataTransfer.files[0].path;
    // fs.readFile(filePath, (err, data) => {
    //   if(err) {
    //     console.log(err);
    //     return
    //   }
    //   contentDom.innerHTML = data;
    // })
  }

  // ------------------------渲染进程中调用remote模块,访问主进程的模块(remote)------------------------
  const openWindowDom = document.getElementById('openNewWindow');
  openWindowDom.onclick = () => {
    const secondWindow = new BrowserWindow({
      width: 400,
      height: 300,
    });
    secondWindow.loadFile(path.resolve(__dirname,'second.html'));
  }
}
