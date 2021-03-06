const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

// import controllers
const {
	getPlaces,
	getPlaceById,
	getPlacesByUserId,
	updatePlaceById,
	deletePlaceById,
	createPlace,
	bookPlaceById,
	cancelBookedPlaceById,
	getReservedPlacesByUserId,
} = require('../controllers/placesController'); // Places Controllers
const fileUpload = require('../middleware/file-upload');
const auth = require('../middleware/auth');

router.get('/', getPlaces);

router.get('/:pid', getPlaceById);

router.get('/user/:uid', auth, getPlacesByUserId);

router.get('/user/reserved/:uid', auth, getReservedPlacesByUserId);

router.put(
	'/booked/:id',
	[body('booked', 'booked is required').not().isEmpty()],
	auth,
	bookPlaceById
);

router.put(
	'/booked/cancel/:id',
	[body('booked', 'booked is required').not().isEmpty()],
	auth,
	cancelBookedPlaceById
);

router.post(
	'/',
	auth,
	fileUpload.single('image'),
	[
		body('title', 'Title is required').not().isEmpty(),
		body('description', 'Please enter description min length is 5').isLength({
			min: 5,
		}),
		body('address', 'Address is required').not().isEmpty(),
		body('city', 'City is required').not().isEmpty(),
		body('placeType', 'placeType is required').not().isEmpty(),
		body('price', 'price is required').not().isEmpty(),
		body('numberOfRooms', 'numberOfRooms is required').not().isEmpty(),
		body('numberOfbeds', 'numberOfbeds is required').not().isEmpty(),
		body('numberOfGuests', 'numberOfGuests is required').not().isEmpty(),
	],
	createPlace
);

router.put(
	'/:pid',
	auth,
	[
		body('title', 'Title is required').not().isEmpty(),
		body('description', 'Please enter description min length is 5').isLength({
			min: 5,
		}),
		body('address', 'Address is required').not().isEmpty(),
		body('city', 'City is required').not().isEmpty(),
		body('placeType', 'placeType is required').not().isEmpty(),
		body('price', 'price is required').not().isEmpty(),
		body('numberOfRooms', 'numberOfRooms is required').not().isEmpty(),
		body('numberOfbeds', 'numberOfbeds is required').not().isEmpty(),
		body('numberOfGuests', 'numberOfGuests is required').not().isEmpty(),
		body('city', 'city is required').not().isEmpty(),
	],
	updatePlaceById
);

router.delete('/:pid', auth, deletePlaceById);

module.exports = router;
