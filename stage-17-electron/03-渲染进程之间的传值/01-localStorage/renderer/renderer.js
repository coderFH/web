const { ipcRenderer } = require('electron');

window.onload = () => {
  const sendMsgDom = document.querySelector('#opennewwindow');
  sendMsgDom.onclick = () => {
    localStorage.setItem('uid',1000);
    ipcRenderer.send('openNewWindow');
  }
}