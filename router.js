'use strict';

var multer = require('multer');
var upload = multer({dest: 'uploads'});

module.exports = function(app) {

	var homeController = require('./controllers/home');
	var styleguideController = require('./controllers/styleguide');
	var pageNotFoundController = require('./controllers/page-not-found');

	app.get('/page-not-found', pageNotFoundController.get);
	app.get('/styleguide', styleguideController.get);
	app.get('/', homeController.get);


	app.use(function(request, response) {
		response.redirect('/page-not-found');
	});
};
