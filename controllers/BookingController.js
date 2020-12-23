const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const HttpError = require("../models/HttpError");
const Place = require("../models/Place");
const Booking = require("../models/Booking");

exports.getBookedPlaces = async (req, res, next) => {
  let bookedPlaces;

  try {
    bookedPlaces = await Booking.find();
  } catch (err) {
    return next(
      new HttpError(
        "Fetching booked places failed, please try again later",
        500
      )
    );
  }

  res.status(200).json({
    message: `find all booked places successfuly`,
    count: bookedPlaces.length,
    bookedPlaces: bookedPlaces.map(p => p.toObject({ getters: true })),
  });
};

exports.getBookedPlaceById = async (req, res, next) => {
  const BookedplaceId = req.params.bookedid;

  let bookedplace;

  try {
    bookedplace = await Booking.findById(BookedplaceId);

    if (!bookedplace) {
      return next(
        new HttpError(
          `Could not find a booked place for the provided id ${BookedplaceId}..`,
          404
        )
      );
    }
  } catch (err) {
    return next(
      new HttpError(
        "Something went wrong, could not find this booked place",
        500
      )
    );
  }

  res.status(200).json({
    message: `find successfuly booked place with id ${BookedplaceId}`,
    bookedplace: bookedplace.toObject({ getters: true }),
  });
};

exports.createBookingPlace = async (req, res, next) => {
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
    renter_name,
    renter_phone,
    booking_date,
    booking_msg,
    placeId,
  } = req.body;

  const bookedPlace = new Booking({
    renter_name,
    renter_phone,
    booking_date,
    booking_msg,
    placeId,
  });

  let place;

  try {
    place = await Place.findById(placeId);

    if (!place) {
      return next(
        new HttpError(`Could not find user for the provided id.`, 404)
      );
    }
  } catch (err) {
    return next(new HttpError("Creating place failed, try again later", 500));
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await bookedPlace.save({ session: session });
    place.reserved.push(bookedPlace);
    await place.save({ session: session });
    await session.commitTransaction();
  } catch (err) {
    const error = new HttpError("Creating place faild, please try again", 500);
    return next(error);
  }

  res.status(201).json({ booked: bookedPlace });
};
