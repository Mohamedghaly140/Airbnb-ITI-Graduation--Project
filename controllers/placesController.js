const fs = require('fs');

const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

const getCoordsForAddress = require('../util/location');

const HttpError = require('../models/HttpError');
const Place = require('../models/Place');
const User = require('../models/User');

exports.getPlaces = async (req, res, next) => {
	let places;

	try {
		places = await Place.find();
	} catch (err) {
		return next(
			new HttpError('Fetching places failed, please try again later', 500)
		);
	}

	res.status(200).json({
		message: `find all places successfuly`,
		count: places.length,
		places: places.map(p => p.toObject({ getters: true })),
	});
};

exports.getPlaceById = async (req, res, next) => {
	const placeId = req.params.pid;

	let place;

	try {
		place = await Place.findById(placeId);

		if (!place) {
			return next(
				new HttpError(
					`Could not find a place for the provided id ${placeId}..`,
					404
				)
			);
		}
	} catch (err) {
		return next(
			new HttpError('Something went wrong, could not find a place', 500)
		);
	}

	res.status(200).json({
		message: `find successfuly place with id ${placeId}`,
		place: place.toObject({ getters: true }),
	});
};

exports.getPlacesByUserId = async (req, res, next) => {
	const userId = req.params.uid;

	let places;

	try {
		places = await Place.find({ creator: userId });
	} catch (err) {
		return next(new HttpError('Fetching places faild, please try again', 500));
	}

	if (!places || places.length === 0) {
		return next(
			new HttpError(
				`Could not find a place for the provided user id ${userId}..`,
				404
			)
		);
	}

	res.status(200).json({
		message: `find successfuly place with id ${userId}`,
		places: places.map(p => p.toObject({ getters: true })),
	});
};

exports.createPlace = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		let errMsg;

		errors.array().forEach(err => {
			errMsg = err.msg;
			// console.log(err.msg);
		});

		return next(
			new HttpError(
				`Invalid inputs passed, please check your data ${errMsg}`,
				422
			)
		);

		// return res.status(422).json({ errors: errors.array() });
	}

	const {
		title,
		description,
		address,
		placeType,
		price,
		numberOfRooms,
		numberOfbeds,
		numberOfGuests,
		creator,
	} = req.body;

	const coordinates = getCoordsForAddress(address);

	const createdPlace = new Place({
		title,
		description,
		location: coordinates,
		address,
		placeType,
		price,
		numberOfRooms,
		numberOfbeds,
		numberOfGuests,
		image: req.file.path,
		creator,
	});

	let user;

	try {
		user = await User.findById(creator);

		if (!user) {
			return next(
				new HttpError(`Could not find user for the provided id.`, 404)
			);
		}
	} catch (err) {
		return next(
			new HttpError('Creating place failed, try again later faild user', 500)
		);
	}

	try {
		const session = await mongoose.startSession();
		session.startTransaction();
		await createdPlace.save({ session: session });
		user.places.push(createdPlace);
		await user.save({ session: session });
		await session.commitTransaction();
	} catch (err) {
		const error = new HttpError(
			'Creating place faild, please try again later relation',
			500
		);
		return next(error);
	}

	res.status(201).json({ place: createdPlace });
};

exports.updatePlaceById = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		next(new HttpError('Invalid inputs passed, please check your data', 422));
		// return res.status(400).json({ errors: errors.array() });
	}

	const placeId = req.params.pid;

	let updatedPlace;

	try {
		updatedPlace = await Place.findByIdAndUpdate(placeId, req.body, {
			new: true,
			runValidators: true,
		});

		if (!updatedPlace) {
			return next(
				new HttpError(
					`Could not find any places with the provided id ${placeId}`,
					404
				)
			);
		}
	} catch (err) {
		return next(
			new HttpError('Someting went wrong, could not update place', 500)
		);
	}

	res.status(200).json({
		message: 'place updated successfuly',
		place: updatedPlace,
	});
};

exports.deletePlaceById = async (req, res, next) => {
	const placeId = req.params.pid;

	let place;

	try {
		place = await Place.findById(placeId).populate('creator');

		// console.log(place);

		if (!place) {
			return next(
				new HttpError(
					`Could not find a place for the provided id ${placeId}..`,
					404
				)
			);
		}
	} catch (err) {
		return next(
			new HttpError('Someting went wrong, could not delete place', 500)
		);
	}

	const imagePath = place.image;

	try {
		const session = await mongoose.startSession();
		session.startTransaction();
		await place.remove({ session: session });
		place.creator.places.pull(place);
		await place.creator.save({ session: session });
		await session.commitTransaction();
	} catch (err) {
		// console.log(err);
		return next(
			new HttpError('Someting went wrong, could not delete place relation', 500)
		);
	}

	fs.unlink(imagePath, err => console.log(err));

	res.status(200).json({
		message: 'place deleted successfuly',
		place,
	});
};
