const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

// import controllers
const {
	getUsers,
	signup,
	login,
	getUserById,
} = require('../controllers/usersControllers'); // Users Controllers
const fileUpload = require('../middleware/file-upload');

router.get('/', getUsers);

router.get('/:id', getUserById);

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

module.exports = router;
