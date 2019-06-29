const { dialog } = require('electron').dialog;
window.electron = {};
window.electron.dialog = dialog;

console.log('preload');