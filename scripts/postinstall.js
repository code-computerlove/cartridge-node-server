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
	})
	.then(function(){
		//npm install again
	})
	.then(cartridgeUtil.finishInstall);
