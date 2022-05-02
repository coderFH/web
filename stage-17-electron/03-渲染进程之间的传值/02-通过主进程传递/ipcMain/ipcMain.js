/* eslint-disable no-undef */
const { ipcMain, BrowserWindow } = require('electron');
const path = require('path')

let indexId;

// 接受渲染进程的通知
ipcMain.on('openNewWindow', (e, data) => {
  indexId = BrowserWindow.getFocusedWindow().id; // 获取index.html对应的窗口id,为新窗口反向传值做准备
  console.log('indexid:',indexId);

  console.log('index.html传递给new.html的数据',data); // 拿到index.html渲染进程传递过来的数据

  const newWindow = new BrowserWindow({
    width: 500,
    height: 300,
    webPreferences:{
      nodeIntegration:true,
      contextIsolation: false
    }
  })
  newWindow.loadFile(path.join(__dirname,'../renderer/news.html'));

  // 当新的窗口加载完毕后,数据再由主进程传递过去
  newWindow.webContents.on('did-finish-load', () => {
    newWindow.webContents.send('toNews',data);
  })

  const newsId = BrowserWindow.getFocusedWindow().id; // 获取index.html对应的窗口id,为新窗口反向传值做准备
  console.log('newsId:',newsId);
})

ipcMain.on('runIndexFn', (e, data) => {
  // 获取index.html对应的BrowserWindow
  let mainWin = BrowserWindow.fromId(indexId);
  mainWin.webContents.send('toIndex',data);
})