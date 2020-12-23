const jwt = require('jsonwebtoken');

const HttpError = require('../models/HttpError');

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];

		if (!token) {
			return next(new HttpError('No token, authorization is denied', 401));
		}

		const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

		req.userData = { userId: decodedToken.userId };

		next();
	} catch (error) {
		return next(new HttpError('Authentication faild!', 401));
	}
};
