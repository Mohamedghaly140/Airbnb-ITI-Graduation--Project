const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

const HttpError = require('../models/HttpError');
const User = require('../models/User');

const transporter = nodemailer.createTransport(
	sendGridTransport({
		auth: {
			api_key: process.env.NODEMAILER_KEY,
		},
	})
);

exports.signup = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		next(new HttpError('Invalid inputs passed, please check your data', 422));
		// return res.status(400).json({ errors: errors.array() });
	}

	const {
		firstName,
		lastName,
		email,
		password,
		date,
		phone,
		isHost,
	} = req.body;

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

	let hashedPassword;
	try {
		hashedPassword = await bcrypt.hash(password, 12);
	} catch (err) {
		return next(
			new HttpError('Could not create user, please try again later', 500)
		);
	}

	const createdUser = new User({
		firstName,
		lastName,
		email,
		password: hashedPassword,
		birthDay: date,
		phone,
		isHost,
		places: [],
	});

	try {
		await transporter.sendMail({
			to: email,
			from: 'airbnb.team.iti@gmail.com',
			subject: 'Signed Up Successfuly',
			html: `
			<div
				style="
					box-shadow: 0px 3px 4px #444;
					border-radius: 10px;
					text-align: center;
					padding: 25px;
					border: 3px solid #ff5a5f;
					width: 80%;
					margin: 10px auto;
				"
			>
				<h2
					style="
						color: #ff5a5f;
						border-bottom: 2px solid #ff5a5f;
						display: inline-block;
					"
				>
					Airbnb Team
				</h2>
				<h4>Organization: ITI <br /> <a href="https://www.iti.gov.eg" target="_blank">Information technology institue</a></h4>
				<p>Hello, ${email}</p>
				<p>
					Congratulations! <span style="text-transform: capitalize; font-weight: 600;">${firstName} ${lastName}</span>
					Registration Succeeded! Your Email address has been registered with an
					<strong>Airbnb</strong> account. Please log in by Email!
				</p>
			</div>
			`,
		});
		await createdUser.save();
	} catch (err) {
		console.log(err);
		return next(
			new HttpError('Signing up failed, please try again later', 500)
		);
	}

	let token;
	try {
		token = jwt.sign(
			{ userId: createdUser.id, email: createdUser.email },
			process.env.JWT_SECRET_KEY,
			{ expiresIn: '1h' }
		);
	} catch (err) {
		return next(
			new HttpError('Signing up failed, please try again later', 500)
		);
	}

	res.status(201).json({
		message: 'Signed up successfuly',
		userId: createdUser.id,
		email: createdUser.email,
		isHost: createdUser.isHost,
		isAdmin: createdUser.isAdmin,
		token: token,
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

	if (!exsitingUser) {
		return next(new HttpError('Invalid credentails, could not login', 422));
	}

	let isValidPassword;
	try {
		isValidPassword = await bcrypt.compare(password, exsitingUser.password);
	} catch (err) {
		return next(
			new HttpError(
				'Could not log you in, please check your credentails and try again',
				422
			)
		);
	}

	if (!isValidPassword) {
		return next(new HttpError('Invalid credentails, could not login', 422));
	}

	let token;
	try {
		token = jwt.sign(
			{ userId: exsitingUser.id, email: exsitingUser.email },
			process.env.JWT_SECRET_KEY,
			{ expiresIn: '1h' }
		);
	} catch (err) {
		return next(
			new HttpError('Logging in failed, please try again later', 500)
		);
	}

	res.status(200).json({
		message: 'Loggedin successfuly',
		userId: exsitingUser.id,
		email: exsitingUser.email,
		isHost: exsitingUser.isHost,
		isAdmin: exsitingUser.isAdmin,
		token: token,
	});
};

exports.googleLogin = async (req, res, next) => {
	const { tokenId } = req.body;

	let response;
	try {
		response = await client.verifyIdToken({
			idToken: tokenId,
			audience: process.env.GOOGLE_CLIENT_ID,
		});
	} catch (err) {
		return next(
			new HttpError('Logging in failed, please try again later', 500)
		);
	}

	const {
		email_verified,
		name,
		email,
		picture,
		given_name,
		family_name,
	} = response.getPayload();

	// console.log(response.getPayload());

	let exsitingUser;
	try {
		exsitingUser = await User.findOne({ email });
	} catch (err) {
		return next(
			new HttpError('Signing up failed, please try again later', 500)
		);
	}

	if (exsitingUser) {
		let token;
		try {
			token = jwt.sign(
				{ userId: exsitingUser.id, email: exsitingUser.email },
				process.env.JWT_SECRET_KEY,
				{ expiresIn: '1h' }
			);
		} catch (err) {
			return next(
				new HttpError('Logging in failed, please try again later', 500)
			);
		}

		return res.status(200).json({
			message: 'Loggedin successfuly',
			userId: exsitingUser.id,
			email: exsitingUser.email,
			isHost: exsitingUser.isHost,
			isAdmin: exsitingUser.isAdmin,
			token: token,
		});
	}

	if (!exsitingUser) {
		const createdUser = new User({
			firstName: given_name,
			lastName: family_name,
			email: email,
			image: picture,
			password: `${email + process.env.JWT_SECRET_KEY}`,
			places: [],
		});

		try {
			await createdUser.save();
		} catch (err) {
			console.log(err);
			return next(
				new HttpError('Signing up failed, please try again later', 500)
			);
		}

		let token;
		try {
			token = jwt.sign(
				{ userId: createdUser.id, email: createdUser.email },
				process.env.JWT_SECRET_KEY,
				{ expiresIn: '1h' }
			);
		} catch (err) {
			return next(
				new HttpError('Signing up failed, please try again later', 500)
			);
		}

		return res.status(201).json({
			message: 'Signed up successfuly',
			userId: createdUser.id,
			email: createdUser.email,
			isHost: createdUser.isHost,
			isAdmin: createdUser.isAdmin,
			token: token,
		});
	}
};
