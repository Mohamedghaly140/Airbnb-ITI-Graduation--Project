const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  renter_name: {
    type: String,
    required: true,
  },
  renter_phone: {
    type: Number,
    required: true,
  },
  booking_date: {
    type: String,
    required: [true, "Pelase enter the booking informations"],
  },
  booking_msg: {
    type: String,
    required: true,
    minlength: [5, "Please enter a message of min length 5"],
  },
  placeId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Place",
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
