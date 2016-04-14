'use strict';

// Package config
var packageConfig = require('../package.json');

// Node utils
var cartridgeUtil = require('cartridge-module-util')(packageConfig);
var path          = require('path');

var TASK_NAME = 'nodeServer';

// Transform function for adding paths
// function projectConfigAddPaths(config) {
// 	config.paths.src[TASK_NAME]  = config.dirs.src  + '/example_dir/';
// 	config.paths.dest[TASK_NAME] = config.dirs.dest + '/example_dir/';

// 	return config;
// }

var nodeServerDependencies = require('../package.json')['cartridge-node-server'];

// Exit if NODE_ENV is development
cartridgeUtil.exitIfDevEnvironment();
// Make sure that the .cartridgerc file exists
cartridgeUtil.ensureCartridgeExists();
// Run through the project setup
cartridgeUtil.addToRc()
	.then(function() {
		return cartridgeUtil.copyToProjectDir([{
			copyPath: 'server.js'
		},
		{
			copyPath: 'router.js'
		},
		{
			copyPath: 'templateHelpers.js'
		},
		{
			copyPath: 'controllers'
		},
		{
			copyPath: 'data'
		},
		{
			copyPath: 'middleware'
		},
		{
			copyPath: 'models'
		},
		{
			copyPath: 'services'
		},
		{
			copyPath: 'utils'
		},
		{
			copyPath: 'view_models'
		},
		{
			copyPath: 'views'
		}])
	})
	.then(function() {
		//update cartride package json
		return cartridgeUtil.addToPackage(nodeServerDependencies, ['cartridge-module-util']);
		//return cartridgeUtil.installDependencies(nodeServerDependencies);
	})
	.then(function(){
		//npm install each package
		return cartridgeUtil.installDependencies(nodeServerDependencies, ['cartridge-module-util']);
	})
	.then(function(){
		//clean node module (itself)
	})
	.then(cartridgeUtil.finishInstall);
