const fs = require('fs');

window.onload = () => {
  const readFileDom = document.getElementById('readFile');
  const contentDom = document.getElementById('content');
  console.log('wfh',readFileDom);
  readFileDom.onclick = () => {
    fs.readFile('package.json',{ encoding:'utf-8' }, (err, data) => {
      if (err) {
        console.log(err);
        return
      }
      contentDom.innerHTML = data.toString();
    })
  }
}