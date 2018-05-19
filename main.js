/**
 * This file builds the window which is shown during the execution of the appliation
 **/
// set requirements
// You may see that it uses native node.js modules
const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

// Create the definite window
let win

function createWindow()
{
    // set the width and height of the window
    win = new BrowserWindow({width: 800, height: 600})
    
    // Now, load the index.html file
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'), // This is the fieed path to the index.html file
        protocol: 'file:', // use the file protocol, because we're loading a local file
        slashes: true, // enable slashes in the url
    }))
    
    // When the window is closed, set the win variable to null
    win.on('closed', function () {
        win = null
    })
}

// now, create the window
app.on('ready', createWindow)

// When all the windows are closed, the application should be closed
// This is needed on MacOS platforms (darwin)
app.on('window-all-closed', function () {
    // check if the system is macOS
    // If so, quit the application
    // otherwise, this is already done automatically
    if(process.platform !== 'Darwin') {
        app.quit()
    }
})

// On MacOS, when the dock icon is clicked, here should be created a new window,
// because all others are closed normally
app.on('activate', function () {
    if(win === null) {
        createWindow()
    }
})