# Electron-Sample

## Description

This repository contains a project that shows how you can combine an Electron interface with a Console backend written in C# and Python.

I didn't provide other scripting and programming languages, but feel free to add them.

## Licensing

I didn't set a license. That means that you are free to use this project completely free, also with commercial purposes and you don't have to share any source code when you distribute this app.

Although, what I have created is not very useful. So, using it would be rare.

## How to use it?

### Install needed software

First of all, you need some stuff installed:

* [Node.JS](https://nodejs.org) includig the Node.JS runtime and the NPM package manager. Use their installation instructions to install this.

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

Enter a name in the textbox shown on the created page and click on of the buttons. The system will call the needes piece of software and execute all necessary commands in the right order and format.

### Download a release

You may also download the release of this project.

There is only a version for Windows available, since I did not compile the C# and Python scripts for other platforms. Feel free to do so on your own.

To download those, go to [the releases section of thes repository](https://github.com/jordydew/electron-sample/releases) and choose the file you want.

## Notes

* Since I only provided Windows console applications, you cannot run this on a Linux or Macintosh machine (yet). Feel free to compile the examples in bon/src or write your own console application that outputs a simpel string.

* I only made a release for Windows 64 bit, because I do not have any other configuration available.

* The C# example always works, because it is compiled for any CPU, but the Python script only works on 64 bit machines.