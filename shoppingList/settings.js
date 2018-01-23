const path = require('path');
const url = require('url');
const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;

let iconSrc = __dirname+'/img/icon.png';

const closed = 'closed';
const ready = 'ready';
const winAllClosed = 'window-all-closed';
const darwin = 'darwin';
const activate = 'activate';
const file = 'file:';
const production = 'production';

const mainWindowHtmlSrc = './Views/mainWindow.html';
const addItemWindowHtmlSrc = './Views/addItemWindow.html';



const addWindowOptions = {width: 300, height: 200, title: 'Add Shopping List Item'};

const mainWindowHTML = {
    pathname: path.join(__dirname, mainWindowHtmlSrc),
    protocol: file, 
    slashes: true
  };

const addItemWindowHTML = {
    pathname: path.join(__dirname, addItemWindowHtmlSrc),
    protocol: file, 
    slashes: true
  };







module.exports = { closed, ready, winAllClosed, darwin, activate, addWindowOptions, mainWindowHTML, addItemWindowHTML, production };