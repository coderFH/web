const { Menu } = require('electron');

//创建菜单模板
const menuTemplate = [
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
          console.log('新建');
        }
      },
      {
        type: 'separator'     // 分隔符
      },
      {
        label: '保存',
        click:() => {
          console.log('新建');
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
          console.log('新建');
        }
      },
      {
        label: '粘贴',
        role: 'paste',
        click:() => {
          console.log('新建');
        }
      }
    ]
  }
];

const menuBuild = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menuBuild);