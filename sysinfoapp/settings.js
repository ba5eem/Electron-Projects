const path = require('path');
const url = require('url');

let iconSrc = __dirname+'/img/icon.png';


const windowOptions = {width: 400, height: 400, icon: iconSrc};

const windowUrlOptions = {
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:', 
    slashes: true
  };
const closed = 'closed';
const ready = 'ready';
const winAllClosed = 'window-all-closed';
const darwin = 'darwin';
const activate = 'activate';





module.exports = { closed, ready, winAllClosed, darwin, activate, windowOptions, windowUrlOptions };