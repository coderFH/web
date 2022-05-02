/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');
const { BrowserWindow } = require('@electron/remote');

// 渲染进程中访问node模块的方式2, 这个文件会在index.html中引入
fs.readFile('package.json',{ encoding:'utf-8' }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('渲染进程访问node的方式2',data);
  }
})

window.onload = () => {
  // --------------------------------渲染进程访问node模块--------------------------------
  const openFileDom = document.getElementById('openFile');
  openFileDom.onclick = () => {
    const secondWindow = new BrowserWindow({
      width: 800,
      height: 500,
      webPreferences: {
        nodeIntegration:true,
        contextIsolation:false
      }
    });
    secondWindow.loadFile(path.resolve(__dirname,'./demo/01-渲染进程中调用node/渲染进程调用node.html'));
  }
  
  // ------------------------------拖拽功能-------------------------------
  const dropDom = document.getElementById('drop');
  dropDom.onclick = () => {
    const secondWindow = new BrowserWindow({
      width: 800,
      height: 500,
      webPreferences: {
        nodeIntegration:true,
        contextIsolation:false
      }
    });
    secondWindow.loadFile(path.resolve(__dirname,'./demo/02-h5API结合node/h5API结合node.html'));
  }

  // ------------------------右键菜单功能------------------------
  const openWindowDom = document.getElementById('openNewWindow');
  openWindowDom.onclick = () => {
    const secondWindow = new BrowserWindow({
      width: 800,
      height: 500,
      webPreferences: {
        nodeIntegration:true,
        contextIsolation:false
      }
    });
    secondWindow.loadFile(path.resolve(__dirname,'./demo/03-右键菜单功能/右键菜单.html'));
    require('@electron/remote/main').initialize();
    require('@electron/remote/main').enable(secondWindow.webContents);
  }
}
