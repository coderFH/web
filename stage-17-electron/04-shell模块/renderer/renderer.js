const { shell } = require('electron');

window.onload = () => {
  const aDom = document.querySelectorAll('a');
  for (let i = 0; i < aDom.length; i++) {
    aDom[i].onclick = (e) => {
      e.preventDefault(); // 阻止默认行为
      shell.openExternal(aDom[i].getAttribute('href'));
    }
  }
}
