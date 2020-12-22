const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

// import controllers
const { getUsers, signup, login } = require('../controllers/usersControllers'); // Users Controllers

router.get('/', getUsers);

router.post(
	'/signup',
	[
		body('name', 'name is required').not().isEmpty(),
		body('email', 'Please enter valid email').normalizeEmail().isEmail(),
		body('password', 'Password min length is 6').isLength({ min: 6 }),
		body(
			'phone',
			'Please enter valid phone number ex: 010-111-222-333'
		).isMobilePhone('ar-EG'),
	],
	signup
);

router.post(
	'/login',
	[
		body('email', 'Please enter valid email').normalizeEmail().isEmail(),
		body('password', 'Password min length is 6').isLength({ min: 6 }),
	],
	login
);

module.exports = router;
