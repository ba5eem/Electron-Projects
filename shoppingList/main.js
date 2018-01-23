const electron = require('electron');
const path = require('path');
const url = require('url');
const { app, BrowserWindow, Menu } = electron;
const { ready, darwin, activate, addWindowOptions, mainWindowHTML,addItemWindowHTML } = require('./settings');
const { windowMenu, helpMenu, subMenu, exit } = require('./menus');

let mainWindow;
let addWindow;



app.on(ready, () => {
  // create new window
  mainWindow = new BrowserWindow({});
  // load html file into window
  mainWindow.loadURL(url.format(mainWindowHTML));
  mainWindow.webContents.openDevTools();

  const menu = Menu.buildFromTemplate(appMenu)
  Menu.setApplicationMenu(menu)
})

// Handle Add window: 
const createAddWindow = () => {
  addWindow = new BrowserWindow(addWindowOptions)
  addWindow.loadURL(url.format(addItemWindowHTML));
}




// List Menu 
const listMenu = {
    label: 'List',
    submenu: [
      {
        label: 'Add item',
        click(){
          createAddWindow();
        }
      },
      {
        label: 'Clear items'
      },
      {
        label: 'Quit',
        accelerator: process.platform == darwin ? exit.mac : exit.win,
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



