const electron = require('electron');
const path = require('path');
const url = require('url');
const { app, BrowserWindow, Menu, ipcMain } = electron;
const { status, options } = require('./settings');
const { menus, shortCut } = require('./menus');


// SET ENV
// process.env.NODE_ENV = production;

let mainWindow;
let addWindow;



app.on(status.ready, () => {
  // create new window
  mainWindow = new BrowserWindow({});
  // load html file into window
  mainWindow.loadURL(url.format(options.mainView));
  // Quit app when closed
  mainWindow.on(status.closed, () => {
    app.quit();
  })
  const menu = Menu.buildFromTemplate(appMenu)
  Menu.setApplicationMenu(menu)
})

// Handle Add window: 
const createAddWindow = () => {
  addWindow = new BrowserWindow(options.addViewSize)
  addWindow.loadURL(url.format(options.addView));
  // Garbage collection handle
  addWindow.on(status.close, () => {
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
        accelerator: status.currentOS ? shortCut.add.mac : shortCut.add.win,
        click(){
          createAddWindow();
        }
      };
const clearItems = {
        label: 'Clear items',
        accelerator: status.currentOS ? shortCut.clear.mac : shortCut.clear.win,
        click(){
          mainWindow.webContents.send('item:clear');
        }
      };
const quitApp = {
        label: 'Quit',
        accelerator: status.currentOS ? shortCut.exit.mac : shortCut.exit.win,
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
        accelerator: status.currentOS ? shortCut.dev.mac : shortCut.dev.win,
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
// OS Dependant Menu
const currentMenu = {
    label: app.getName(),
    submenu: menus.subMenu
  };


const appMenu = [{},listMenu, menus.windowMenu, menus.helpMenu]

// if Windows OS, unshift empty menu item
if (status.currentOS) {
  appMenu.unshift(currentMenu)
}

// Add devtools if not in production:
if (status.currentENV){
  appMenu.push(devTools)
}





