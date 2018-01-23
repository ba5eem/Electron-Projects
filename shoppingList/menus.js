const path = require('path');
const url = require('url');
const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;
const { ready, darwin, activate, windowOptions, windowUrlOptions } = require('./settings');




// ShortCuts
const exit = {mac: 'Command+Q', win: 'Ctrl+Q' }
const dev = {mac: 'Command+I', win: 'Ctrl+I' }

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

const subMenu = [
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



module.exports = { windowMenu, helpMenu, subMenu, exit, dev };