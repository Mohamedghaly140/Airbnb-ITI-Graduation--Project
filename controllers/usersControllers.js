const { validationResult } = require('express-validator');

const HttpError = require('../models/HttpError');
const User = require('../models/User');

exports.getUsers = async (req, res, next) => {
	let users;

	try {
		users = await User.find({}, '-password');
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

exports.getUserById = async (req, res, next) => {
	userId = req.params.id;

	let user;

	try {
		user = await User.findById(userId, '-password').populate('places');
	} catch (err) {
		return next(
			new HttpError('Fetching user failed, please try again later', 500)
		);
	}

	res.status(200).json({
		message: `find user successfuly`,
		user: user,
	});
};

exports.updateUserPhoneById = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		next(new HttpError('Invalid inputs passed, please check your data', 422));
		// return res.status(400).json({ errors: errors.array() });
	}

	userId = req.params.id;

	let user;

	try {
		user = await User.findById(userId);
	} catch (err) {
		return next(
			new HttpError('Fetching user failed, please try again later', 500)
		);
	}

	user.phone = req.body.phone;

	try {
		await user.save();
	} catch (err) {
		return next(
			new HttpError('Update Phone Number failed, please try again later', 500)
		);
	}

	res.status(200).json({
		message: `Phone Number updated successfuly`,
		phone: user.phone,
	});
};

exports.updateUserNameById = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		next(new HttpError('Invalid inputs passed, please check your data', 422));
		// return res.status(400).json({ errors: errors.array() });
	}

	userId = req.params.id;

	let user;

	try {
		user = await User.findById(userId);
	} catch (err) {
		return next(
			new HttpError('Fetching user failed, please try again later', 500)
		);
	}

	user.firstName = req.body.firstName;
	user.lastName = req.body.lastName;

	try {
		await user.save();
	} catch (err) {
		return next(
			new HttpError('Update user name failed, please try again later', 500)
		);
	}

	res.status(200).json({
		message: `User name updated successfuly`,
		userName: { firstName: user.firstName, lastName: user.lastName },
	});
};

exports.updateUserGenderById = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		next(new HttpError('Invalid inputs passed, please check your data', 422));
		// return res.status(400).json({ errors: errors.array() });
	}

	userId = req.params.id;

	let user;

	try {
		user = await User.findById(userId);
	} catch (err) {
		return next(
			new HttpError('Fetching user failed, please try again later', 500)
		);
	}

	user.gender = req.body.gender;

	try {
		await user.save();
	} catch (err) {
		return next(
			new HttpError('Update gender failed, please try again later', 500)
		);
	}

	res.status(200).json({
		message: `User gender updated successfuly`,
		gender: user.gender,
	});
};

exports.updateUserBirthDayById = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		next(new HttpError('Invalid inputs passed, please check your data', 422));
		// return res.status(400).json({ errors: errors.array() });
	}

	userId = req.params.id;

	let user;

	try {
		user = await User.findById(userId);
	} catch (err) {
		return next(
			new HttpError('Fetching user failed, please try again later', 500)
		);
	}

	user.birthDay = req.body.birthDay;

	try {
		await user.save();
	} catch (err) {
		return next(
			new HttpError('Update birthDay failed, please try again later', 500)
		);
	}

	res.status(200).json({
		message: `User birthDay updated successfuly`,
		birthDay: user.birthDay,
	});
};

exports.updateUserEmailById = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		next(new HttpError('Invalid inputs passed, please check your data', 422));
		// return res.status(400).json({ errors: errors.array() });
	}

	userId = req.params.id;

	let user;

	try {
		user = await User.findById(userId);
	} catch (err) {
		return next(
			new HttpError('Fetching user failed, please try again later', 500)
		);
	}

	user.email = req.body.email;

	try {
		await user.save();
	} catch (err) {
		return next(
			new HttpError('Update email failed, please try again later', 500)
		);
	}

	res.status(200).json({
		message: `User email updated successfuly`,
		email: user.email,
	});
};

exports.updateUserHostById = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		next(new HttpError('Invalid inputs passed, please check your data', 422));
		// return res.status(400).json({ errors: errors.array() });
	}

	userId = req.params.id;

	let user;

	try {
		user = await User.findById(userId);
	} catch (err) {
		return next(
			new HttpError('Fetching user failed, please try again later', 500)
		);
	}

	user.isHost = req.body.isHost;

	try {
		await user.save();
	} catch (err) {
		return next(
			new HttpError('Update host failed, please try again later', 500)
		);
	}

	res.status(200).json({
		message: `User host updated successfuly`,
		host: user.isHost,
	});
};
