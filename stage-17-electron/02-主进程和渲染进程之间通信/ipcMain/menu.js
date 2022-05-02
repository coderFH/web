const { Menu, BrowserWindow } = require('electron');

//创建菜单模板
const menuTemplate = [
  {
    label: '文件',
    submenu:[
      {
        label: '触发渲染进程里的方法',
        click:() => {
          BrowserWindow.getFocusedWindow().webContents.send('rendererMsg','触发渲染进程里的方法---我是主进程');
        }
      },
      {
        label: '新建',
        accelerator:'ctrl+n', // 绑定快捷键
        click:() => {
          console.log('新建');
        }
      },
      {
        label: '打开',
        click:() => {
          console.log('打开');
        }
      },
      {
        type: 'separator'     // 分隔符
      },
      {
        label: '保存',
        click:() => {
          console.log('保存');
        }
      }
    ]
  },
  {
    label:'编辑',
    submenu:[
      {
        label: '复制',
        role: 'copy', // 定义角色就可以,不用绑定快捷键
        click:() => {
          console.log('复制');
        }
      },
      {
        label: '粘贴',
        role: 'paste',
        click:() => {
          console.log('粘贴');
        }
      }
    ]
  }
];

const menuBuild = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menuBuild);