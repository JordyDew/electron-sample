# Electron-sample

## Description

This repository contains a project that shows how you can combine an Electron interface with a Console backend written in C# and Python.

I did not provide other scripting and programming languages, but feel free to add them.

## Licensing

I did not set a license. That means that you are free to use this project completely free, also with commercial purposes and you don't have to share any source code when you distribute this app.

Although, what I have created is not very useful. So, using it would be rare.

## How to use it?

### Install needed software

First of all, you need some stuff installed:

* [Node.JS](https://nodejs.org) including the Node.JS runtime and the NPM package manager. Use their installation instructions to install this.

* [Electron](https://electronjs.org) Install this with the provided command below (in your Command Prompt)

```
npm install -g electron
```

The command indicates that you want to install Electron globally, so you can use it in every project.

### Running the application

After you have either downloaded or cloned this repository, you should do the following on the command prompt:

```
cd /path/to/the/electron-sample
electron ./main.js
```

### Interacting with the UI

Enter a name in the textbox shown on the created page and click on one of the buttons. The system will call the needed piece of software and execute all necessary commands in the right order and format.

## Notes

* Since I only provided Windows console applications, you cannot run this on a Linux or Macintosh machine (yet). Feel free to compile the examples in bin/src or write your own console application that takes and outputs a simpel string.

* The C# example always works on Windows, because it is compiled for any CPU, but the Python script only works on 64 bit machines. That is, because I only have Python 3.6.5 for 64 bit systems installed.