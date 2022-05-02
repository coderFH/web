const { ipcRenderer } = require('electron');

window.onload = () => {
  const sendMsgDom = document.querySelector('#opennewwindow');
  sendMsgDom.onclick = () => {
    ipcRenderer.send('openNewWindow',{'uid':1000});
  }
}

ipcRenderer.on('toIndex',(e, data) => {
  console.log(data);
})