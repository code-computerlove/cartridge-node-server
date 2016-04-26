# Cartridge Node Server installation [![Build Status](https://travis-ci.org/cartridge/cartridge-node-server.svg?branch=master)](https://travis-ci.org/cartridge/cartridge-node-server)

To use this module, you will need [cartridge-cli](https://github.com/cartridge/cartridge-cli) installed and have a cartridge project setup.

```sh
npm install cartridge-node-server --save-dev
```

This module adds the following to a project:

This is not a typical cartridge expansion pack.  This bakes a node server into your cartridge project. It uses [Node.js](https://nodejs.org/) and [express](http://expressjs.com/) to build the server and present the html through port 3001.

This mdule also uses [handlebars tempating](http://handlebarsjs.com) on the server side to compile the html.


## Config

Once installed, you can start the instance of your server by calling node server.js in your command prompt.

## Usage

Use this module at the beginning of a project to enable a server based setup.


## Warning

There is no uninstall of this module, so please be sure that when choosing to install this module it is the correct install for your project.

This module deletes any trace of itself from the node_modules folder and updates your package json so that it is represented if you choose to delete your node_modules and re-install.

* * * 

## Development
### Commit message standards [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
Try and adhere as closely as possible to the [Angular commit messages guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines).

[Commitizen](https://github.com/commitizen/cz-cli) is a command line tool which can help with this:
```sh
npm install -g commitizen
```
Now, simply use `git cz` instead of `git commit` when committing.
