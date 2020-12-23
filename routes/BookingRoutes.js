const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

// import controllers
const {
  getBookedPlaces,
  getBookedPlaceById,
  createBookingPlace,
  // 	updatePlaceById,
  // 	deletePlaceById,
  // 	createPlace,
} = require("../controllers/BookingController"); // Places Controllers

router.get("/", getBookedPlaces);

router.get("/:bookedid", getBookedPlaceById);

// router.get('/user/:bookedid', getPlacesByUserId);

router.post(
  "/",
  [
    body("booking_data", "Pelase enter the booking informations")
      .not()
      .isEmpty(),
    body("booking_msg", "Please enter a message of min length 5").isLength({
      min: 5,
    }),
    // body("address", "Address is required").not().isEmpty(),
  ],
  createBookingPlace
);

// router.put(
//   "/:bid",
//   [
//     body("booking_data", "Pelase enter the booking informations")
//       .not()
//       .isEmpty(),
//     body("booking_msg", "Please enter a message of min length 5").isLength({
//       min: 5,
//     }),
//     // body('address', 'Address is required').not().isEmpty(),
//   ],
//   updateBookedPlaceById
// );

// router.delete("/:bid", deleteBookedPlaceById);

module.exports = router;
