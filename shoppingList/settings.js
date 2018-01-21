const path = require('path');
const url = require('url');
const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;

let iconSrc = __dirname+'/img/icon.png';


const windowOptions = {width: 300, height: 200, title: 'Add Shopping List Item'};

const windowUrlOptions = {
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:', 
    slashes: true
  };
const closed = 'closed';
const ready = 'ready';
const winAllClosed = 'window-all-closed';
const darwin = 'darwin';
const activate = 'activate';





module.exports = { closed, ready, winAllClosed, darwin, activate, windowOptions, windowUrlOptions };