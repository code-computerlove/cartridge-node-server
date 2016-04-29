(function(){
	'use strict';

	var FormModel = function(data) {
		return {
			email : data.email,
			firstName: data.firstname,
			lastName: data.lastname,
			phone : data.phone,
			organisation : data.organisation,
			website: data.website
		};
	};

	module.exports = FormModel;

}());
