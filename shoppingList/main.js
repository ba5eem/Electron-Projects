const electron = require('electron');
const path = require('path');
const url = require('url');
const { app, BrowserWindow, Menu } = electron;
const { ready, darwin, activate, windowOptions, windowUrlOptions } = require('./settings');
const { windowMenu, helpMenu, subMenu, exit } = require('./menus');

let mainWindow;



app.on(ready, () => {
  // create new window
  mainWindow = new BrowserWindow({});
  // load html file into window
  mainWindow.loadURL(url.format(windowUrlOptions));
  mainWindow.webContents.openDevTools();

  const menu = Menu.buildFromTemplate(appMenu)
  Menu.setApplicationMenu(menu)
})





const listMenu = {
    label: 'List',
    submenu: [
      {
        label: 'Add item'
      },
      {
        label: 'Clear items'
      },
      {
        label: 'Quit',
        accelerator: process.platform == darwin ? exit[0] : exit[1],
        click(){
          app.quit();
        }
      }
    ]
  };



const appMenu = [listMenu, windowMenu,helpMenu]

if (process.platform === 'darwin') {
  appMenu.unshift({
    label: app.getName(),
    submenu: subMenu
  })
}



