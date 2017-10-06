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
// var isLoggedIn = require('../middleware/isLoggedIn');

router.get('/', function(req, res){
	res.render("favorites")
});

// var server = app.listen(process.env.PORT || 3000);

module.exports = router;