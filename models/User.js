const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: {
		type: String,
		required: [true, 'First name is required'],
	},
	lastName: {
		type: String,
		required: [true, 'Last name is required'],
	},
	email: {
		type: String,
		required: [true, 'email is required'],
		unique: true,
	},
	password: {
		type: String,
		// minlength: [6, 'Please enter password min length is 6'],
	},
	image: {
		type: String,
		default:
			'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg',
	},
	phone: {
		type: Number,
	},
	birthDay: {
		type: String,
	},
	isHost: {
		type: Boolean,
		default: false,
	},
	places: [
		{
			type: mongoose.Types.ObjectId,
			required: true,
			ref: 'Place',
		},
	],
	isAdmin: {
		type: Boolean,
		default: false,
	},
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);
