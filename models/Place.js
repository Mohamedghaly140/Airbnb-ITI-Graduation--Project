const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlaceSchema = new Schema(
	{
		title: {
			type: String,
			required: [true, 'Title is required'],
		},
		description: {
			type: String,
			required: true,
			minlength: [5, 'Please enter description min length is 5'],
		},
		image: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		location: {
			lat: { type: Number, required: true },
			lng: { type: Number, required: true },
		},
		placeType: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		numberOfRooms: {
			type: Number,
			required: true,
		},
		numberOfbeds: {
			type: Number,
			required: true,
		},
		numberOfGuests: {
			type: Number,
			required: true,
		},
		country: {
			type: String,
			default: 'Egypt',
		},
		creator: {
			type: mongoose.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		isBooked: {
			type: Boolean,
			default: false,
		},
		reservedBy: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
		},
		approved: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Place', PlaceSchema);
