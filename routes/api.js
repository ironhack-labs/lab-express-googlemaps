const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');

router.route('/')
	.get((req, res) => {
	  Restaurant.find((error, restaurants) => {
	  	if (error) {
	  		res.status(500).json({message: error});
	  	} else {
	  		res.status(200).json(restaurants);
	  	}
	  })
	});


router.route('/:restaurant_id')
	.get((req, res) => {
		Restaurant.findById(req.params.restaurant_id, (error, restaurant) => {
			if (error) {
				res.status(500).json({message: error});
			} else {
				res.status(200).json(restaurant);
			}
		})
	});



module.exports = router;
