require('dotenv').config();
var express = require('express');
var db = require('../models');
var router = express.Router();
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

// router.delete('/:riverName', function(req, res) {
//    console.log("...................." + riverName);
//    db.river.destroy({
//         where: {
//         	riverName: req.params.riverName
//         }
//     }).then(function() {
//     	res.redirect('/favorites');
//     });
//  });


router.delete('/:id', function(req, res) {
  console.log('...........first line of delete route');
  db.river.findById(req.params.id).then(function(river) {
    if (river) {
      river.destroy().then(function() {
        res.send({msg: 'success'});
      });
    } else {
      res.status(404).send({msg: 'error'});
    }
  }).catch(function(err) {
    res.status(500).send({msg: 'error'});
  });
});

module.exports = router;