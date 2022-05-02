const { ipcRenderer } = require('electron');

ipcRenderer.on('toNews',(e, data) => {
  console.log(data);
})

window.onload = () => {
  const btnDom = document.getElementById('btn');
  console.log('wfh===',btnDom);
  btnDom.onclick = () => {
    ipcRenderer.send('runIndexFn','哈哈哈,这是news传递过来的消息');
  }
}