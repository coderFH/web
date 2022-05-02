/* eslint-disable no-undef */
const { app, BrowserWindow } = require('electron');
// 在主进程中可以直接使用node模块
const path = require('path');
const fs = require('fs');
// 1.引入remote模块
const remote = require('@electron/remote/main');

const createWindow = ()=> {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 800,
    webPreferences: {
      // 让渲染进程也可以访问node模块,需要配置这两个选项
      nodeIntegration: true,
      contextIsolation: false,

      // preload中执行的文件,可以直接访问node模块
      preload: path.resolve(__dirname,'renderer/preload.js')
    }
  });
  // 2. 初始化和启用remote模块
  remote.initialize();
  remote.enable(mainWindow.webContents);
  mainWindow.loadFile(path.resolve(__dirname,'index.html'));
  // 自定义Menu顶部菜单
  // require('./ipcMain/menu')
  // 打开调试模式
  mainWindow.webContents.openDevTools();

  // 主进程访问node模块
  fs.readFile('package.json',{ encoding:'utf-8' }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  })
}

// 监听应用的启动事件
app.on('ready',() => {
  createWindow();
});

// 监听窗口关闭的事件,关闭的时候退出应用, macOS需要排除
app.on('window-all-closed',() => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

// Mac os 中点击 dock中的应用图标时候创建窗口
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})
