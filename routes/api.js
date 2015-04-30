'use strict';
console.log('inside api.js');
var metamodels = require('../models/metamodels.js'),
    models = metamodels(),
    express = require('express'),
    restful = require('node-restful'),
    mongoose = restful.mongoose,
    router = express.Router(),
    schemas = models.modules,
    mongooseschema = [],
    restfulmodel = [];

//set up the api
for(var i=0; i<schemas.length; i++){
	console.log ('creating api: ' + schemas[i].modelname);
	mongooseschema[i] = new mongoose.Schema(schemas[i].definition);
	restfulmodel[i] = restful.model(schemas[i].modelname, mongooseschema[i])
		.methods(['get','post','put','delete'])
		.register(router,'/' + schemas[i].modelname);
}

module.exports = router;

