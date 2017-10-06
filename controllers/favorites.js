require('dotenv').config();
var express = require('express');
// var ejsLayouts = require('express-ejs-layouts');
// var bodyParser = require('body-parser');
// var request = require('request');
// var moment = require('moment');
var db = require('../models');
var router = express.Router();
// moment().format();

//var app = express();

// var session = require('express-session');
// var flash = require('connect-flash');
var isLoggedIn = require('../middleware/isLoggedIn');

router.get('/', isLoggedIn, function(req, res){
	db.user.find({
		where: {
			id: req.user.id
		}
	}).then(function(user){
		user.getRivers().then(function(waRivers){
			res.render("favorites", { waRivers: waRivers });
		});
	});	



	//This below get's all my rivers, but like ALLLLL my rivers
	// db.river.findAll({
	// }).then(function(waRivers) {
	// 	res.render("favorites", { waRivers: waRivers });
	// });	
});

module.exports = router;