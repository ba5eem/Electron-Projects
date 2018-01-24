const path = require('path');
const url = require('url');
const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;




// ShortCuts
const shortCut = {
  exit:  {mac: 'Command+Q', win: 'Ctrl+Q' },
  dev:   {mac: 'Command+I', win: 'Ctrl+I' },
  add:   {mac: 'Command+N', win: 'Ctrl+N'},
  clear: {mac: 'Command+X', win: 'Ctrl+X'}
}



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
      click () { electron.shell.openExternal('http://baseem.me') }
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

const menus = {
  windowMenu: windowMenu,
  helpMenu: helpMenu,
  subMenu: subMenu
}



module.exports = { menus, shortCut };