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
