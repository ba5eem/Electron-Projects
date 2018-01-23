const electron = require('electron');
const path = require('path');
const url = require('url');
const { app, BrowserWindow, Menu, ipcMain } = electron;
const { 
  closed, 
  ready, 
  darwin, 
  activate, 
  addWindowOptions, 
  mainWindowHTML,
  addItemWindowHTML, 
  production } = require('./settings');
const { 
  windowMenu, 
  helpMenu, 
  subMenu, 
  exit, 
  dev } = require('./menus');

let mainWindow;
let addWindow;



app.on(ready, () => {
  // create new window
  mainWindow = new BrowserWindow({});
  // load html file into window
  mainWindow.loadURL(url.format(mainWindowHTML));
  // Quit app when closed
  mainWindow.on(closed, () => {
    app.quit();
  })

  const menu = Menu.buildFromTemplate(appMenu)
  Menu.setApplicationMenu(menu)
})

// Handle Add window: 
const createAddWindow = () => {
  addWindow = new BrowserWindow(addWindowOptions)
  addWindow.loadURL(url.format(addItemWindowHTML));
  // Garbage collection handle
  addWindow.on('close', () => {
    addWindow = null;
  })
}

// Catch Item Add:

ipcMain.on('item:add', (e, item) => {
  mainWindow.webContents.send('item:add', item);
  addWindow.close();
})

const toggleDevTools = () => {
  mainWindow.webContents.openDevTools();
}


// List Menu Options
const addItem = {
        label: 'Add item',
        click(){
          createAddWindow();
        }
      };
const clearItems = {
        label: 'Clear items',
        click(){
          console.log('clear Items');
        }
      };
const quitApp = {
        label: 'Quit',
        accelerator: process.platform == darwin ? exit.mac : exit.win,
        click(){
          app.quit();
        }
      };


// List Menu 
const listMenu = {
    label: 'List',
    submenu: [ addItem, clearItems, quitApp ]
  };


// Dev Tools Menu Options
const toggleDev = {
        label: 'Toggle DevTools',
        accelerator: process.platform == darwin ? dev.mac : dev.win,
        click(item,focusedWindow){
          focusedWindow.toggleDevTools();
        }
      }  
const reloadDev = {role: 'reload'}

//Dev Tool Menu
const devTools = {
    label: 'DevTools',
    submenu: [ toggleDev,reloadDev ]
  };


const appMenu = [{},listMenu, windowMenu,helpMenu]

// if Windows OS, unshift empty menu item
if (process.platform === darwin) {
  appMenu.unshift({
    label: app.getName(),
    submenu: subMenu
  })
}

// Add devtools if not in production:
if(process.env.NODE_ENV !== production){
  appMenu.push(devTools)
}





