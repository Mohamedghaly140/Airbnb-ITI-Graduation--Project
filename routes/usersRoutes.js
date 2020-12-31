const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

// import controllers
const {
	getUsers,
	getUserById,
	updateUserPhoneById,
	updateUserNameById,
	updateUserGenderById,
	updateUserBirthDayById,
	updateUserEmailById,
} = require('../controllers/usersControllers'); // Users Controllers
const fileUpload = require('../middleware/file-upload');
const auth = require('../middleware/auth');

router.get('/', getUsers);

router.get('/:id', getUserById);

router.put(
	'/phone/:id',
	auth,
	[body('phone', 'phone is required').not().isEmpty()],
	updateUserPhoneById
);

router.put(
	'/name/:id',
	auth,
	[
		body('firstName', 'name is required').not().isEmpty(),
		body('lastName', 'name is required').not().isEmpty(),
	],
	updateUserNameById
);

router.put(
	'/gender/:id',
	auth,
	[body('gender', 'gender is required').not().isEmpty()],
	updateUserGenderById
);

router.put(
	'/birth-day/:id',
	auth,
	[body('birthDay', 'birthDay is required').not().isEmpty()],
	updateUserBirthDayById
);

router.put(
	'/email/:id',
	auth,
	[body('email', 'Please enter valid email').normalizeEmail().isEmail()],
	updateUserEmailById
);

module.exports = router;
