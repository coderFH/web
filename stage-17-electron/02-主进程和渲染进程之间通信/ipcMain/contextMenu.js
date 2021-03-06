// 右键菜单功能
const { ipcMain, BrowserWindow, Menu } = require('electron');

//创建菜单模板
const menuTemplate = [
  {
    label: '复制',
    role: 'copy',
    click:() => {
      console.log('');
    }
  },
  {
    label: '粘贴',
    role: 'paste',
    click:() => {
      console.log('新建');
    }
  },
  {
    label: '其他功能',
    click:() => {
      console.log('其他功能');
    }
  },
  {
    label: '文件',
    submenu:[
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
];

const menuBuild = Menu.buildFromTemplate(menuTemplate);

ipcMain.on('showcontextmenu', () => {
  // 主进程中获取当前窗口的方法:BrowserWindow.getFocusedWindow()
  // 渲染进程中获取当前窗口的方法: remote.getCurrentWindow()
  menuBuild.popup({window:BrowserWindow.getFocusedWindow()});
});
 