const fs = require('fs');

window.onload = () => {
  const dropDom = document.getElementById('dropContent');
  // 阻止进入,离开,移动的默认行为
  dropDom.ondragenter = dropDom.ondragover = dropDom.ondragleave = () => false
  dropDom.ondrop = (e) => {
    // console.log(e);
    console.log(e.dataTransfer.files[0]);
    const filePath = e.dataTransfer.files[0].path;
    fs.readFile(filePath, (err, data) => {
      if(err) {
        console.log(err);
        return
      }
      dropDom.innerHTML = data;
    })
  }
}