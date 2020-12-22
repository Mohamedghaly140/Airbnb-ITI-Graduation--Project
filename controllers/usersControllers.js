const { validationResult } = require('express-validator');
const HttpError = require('../models/HttpError');

const User = require('../models/User');

exports.getUsers = async (req, res, next) => {
	let users;

	try {
		users = await User.find({}, '-password').populate('places');
	} catch (err) {
		return next(
			new HttpError('Fetching users failed, please try again later', 500)
		);
	}

	res.status(200).json({
		message: `find all users successfuly`,
		count: users.length,
		users: users.map(u => u.toObject({ getters: true })),
	});
};

exports.signup = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		next(new HttpError('Invalid inputs passed, please check your data', 422));
		// return res.status(400).json({ errors: errors.array() });
	}

	const { name, email, password, phone, isHost } = req.body;

	let exsitingUser;
	try {
		exsitingUser = await User.findOne({ email });

		if (exsitingUser) {
			return next(
				new HttpError('User already exist, please login instead', 422)
			);
		}
	} catch (err) {
		return next(
			new HttpError('Signing up failed, please try again later', 500)
		);
	}

	const createdUser = new User({
		name,
		email,
		password,
		image:
			'https://egyptholiday-travel.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
		phone,
		isHost,
		places: [],
	});

	try {
		await createdUser.save();
	} catch (err) {
		return next(
			new HttpError('Signing up failed, please try again later', 500)
		);
	}

	res.status(201).json({
		message: 'Signed up successfuly',
		user: createdUser.toObject({ getters: true }),
	});
};

exports.login = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		next(new HttpError('Invalid inputs passed, please check your data', 422));
		// return res.status(400).json({ errors: errors.array() });
	}

	const { email, password } = req.body;

	let exsitingUser;
	try {
		exsitingUser = await User.findOne({ email });
	} catch (err) {
		return next(
			new HttpError('Logging in failed, please try again later', 500)
		);
	}

	if (!exsitingUser || exsitingUser.password !== password) {
		return next(new HttpError('Invalid credentails, could not login', 422));
	}

	res.json({
		message: 'Loggedin successfuly',
		user: exsitingUser.toObject({ getters: true }),
	});
};
