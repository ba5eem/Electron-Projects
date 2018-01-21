const electron = require('electron');
const path = require('path');
const url = require('url');
const { app, BrowserWindow, Menu } = electron;
const { ready, darwin, activate, windowOptions, windowUrlOptions } = require('./settings');
const { menuTemplate, submenu } = require('./menus');

let mainWindow;



app.on(ready, () => {
  // create new window
  mainWindow = new BrowserWindow({});
  // load html file into window
  mainWindow.loadURL(url.format(windowUrlOptions));
  mainWindow.webContents.openDevTools();

  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)
})


if (process.platform === 'darwin') {
  menuTemplate.unshift({
    label: app.getName(),
    submenu: submenu
  })
}



