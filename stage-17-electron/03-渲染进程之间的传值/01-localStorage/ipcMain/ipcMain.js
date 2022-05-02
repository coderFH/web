/* eslint-disable no-undef */
const { ipcMain, BrowserWindow } = require('electron');
const path = require('path')

// 接受渲染进程的通知
ipcMain.on('openNewWindow', () => {
  const newWindow = new BrowserWindow({
    width: 500,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation:false,
    }
  })
  newWindow.loadFile(path.join(__dirname,'../renderer/news.html'));
})