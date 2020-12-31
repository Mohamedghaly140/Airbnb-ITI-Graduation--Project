const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

// import controllers
const { signup, login, googleLogin } = require('../controllers/authController'); // Users Controllers
const fileUpload = require('../middleware/file-upload');

router.post(
	'/signup',
	// fileUpload.single('image'),
	[
		body('firstName', 'name is required').not().isEmpty(),
		body('lastName', 'name is required').not().isEmpty(),
		body('email', 'Please enter valid email').normalizeEmail().isEmail(),
		body('password', 'Password min length is 6')
			.not()
			.isEmpty()
			.isLength({ min: 6 }),
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

router.post('/google', googleLogin);

module.exports = router;
