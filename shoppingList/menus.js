const path = require('path');
const url = require('url');
const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;
const { ready, darwin, activate, windowOptions, windowUrlOptions } = require('./settings');


//handle create add window:




const exit = ['Command+Q', 'Ctrl+Q'];

const windowMenu = {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  }

const helpMenu = {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://electron.atom.io') }
      }
    ]
  }

const listMenu = {
    label: 'List',
    submenu: [
      {
        label: 'Add item'
      },
      {label: 'Clear items'},
      {
        label: 'Quit',
        accelerator: process.platform == darwin ? exit[0] : exit[1],
        click(){
          app.quit();
        }
      }
    ]
  };
const submenu = [
      {role: 'about'},
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]

const menuTemplate = [listMenu,windowMenu,helpMenu]


module.exports = { menuTemplate, submenu };