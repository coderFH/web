const { ipcMain } = require('electron');

// 接受渲染进程的通知
ipcMain.on('sendMsg', (e,data) => {
  console.log(data);
  console.log(e);
})

// 主进程接受到异步消息以后通知渲染进程
ipcMain.on('sendMsgReplay', (e,data) => {
  console.log(data);
  // console.log(e);
  e.sender.send('replayRenderer','收到了消息')
})

// 接受同步消息
ipcMain.on('senMsgSync', (e, data) => {
  console.log(data);
  e.returnValue='我是主进程,已经收到了你的同步消息';
})