const { ipcRenderer } = require('electron');

window.onload = () => {
  const sendMsgDom = document.querySelector('#sendMsg');
  sendMsgDom.onclick = () => {
    // 给主进程发消息 执行主进程里的方法
    ipcRenderer.send('sendMsg','this is renderer msg');
  }

  const sendMsgReplayDom = document.querySelector('#sendMsgReplay');
  sendMsgReplayDom.onclick = () => {
    // 给主进程发消息 执行主进程里的方法
    ipcRenderer.send('sendMsgReplay','this is renderer msg - sendMsgReplay');
  }

  // 监听主进程的广播
  ipcRenderer.on('replayRenderer',(e,data) => {
    console.log(data);
  })

  // 同步发送消息
  const senMsgSyncDom = document.querySelector('#senMsgSync');
  senMsgSyncDom.onclick = () => {
    var replay = ipcRenderer.sendSync('senMsgSync','this is renderer msg - senMsgSync'); 
    console.log(replay);
  }

  // 监听主进程发送过来的消息
  ipcRenderer.on('rendererMsg',(e, data) => {
    console.log(data);
  })

  // 右键菜单
  window.addEventListener('contextmenu', (e) => {
    console.log('鼠标点击了右键');
    e.preventDefault();
    //弹出右键菜单
    ipcRenderer.send('showcontextmenu');
  },false);
}