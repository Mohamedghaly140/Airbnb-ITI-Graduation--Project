const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = () => {
	mongoose
		.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		})
		.then(() =>
			console.log(
				`MongoDB Connected: ${mongoose.connection.host}...`.cyan
					.underline.bold
			)
		)
		.catch(err => {
			console.error(`${err.message}`.red);
			process.exit(1);
		});
};

module.exports = connectDB;
