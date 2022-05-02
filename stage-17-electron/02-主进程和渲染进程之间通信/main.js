/* eslint-disable no-undef */
const { app, BrowserWindow } = require('electron');
const path = require('path');
const remote = require('@electron/remote/main');

const createWindow = ()=> {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  remote.initialize();
  remote.enable(mainWindow.webContents);
  mainWindow.loadFile(path.resolve(__dirname,'index.html'));
  mainWindow.webContents.openDevTools();
  require('./ipcMain/ipcMain');
  require('./ipcMain/menu');
  require('./ipcMain/contextMenu');
}

app.on('ready',() => {
  createWindow();
});

app.on('window-all-closed',() => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
