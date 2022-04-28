const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = ()=> {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 800,
  });
  mainWindow.loadFile(path.resolve(__dirname,'index.html'));
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
