require('dotenv').config();
var express = require('express');
var db = require('../models');
var router = express.Router();
var bodyParser = require('body-parser');
var passport = require('../config/ppConfig')
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
});

router.delete('/:id', isLoggedIn, function(req, res) {
  console.log('...........first line of delete route');
  console.log("000000000000000000000" + req.params.river);
  db.river.destroy({
    where: { 
      id: req.params.id
    }
  }).then(function() {
    res.render('/')
  }).catch(function(err) {
    res.status(500).send({msg: 'error'});
  });
});

module.exports = router;