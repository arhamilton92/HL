/** @format */

const express = require('express');
// DEV
const morgan = require('morgan');
// SECURITY
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// UTILS
const daRouter = require('./routes/daRoutes');
const globalErrorHandler= require('./controllers/errorController.js')

const app = express();

// v GLOBAL MIDDLEWARE v -------------------
// -----------------------------------------

// CORS
if (process.env.NODE_ENV === 'development') {
	app.use(
		cors({
			origin: process.env.CORS_ORIGIN,
			credentials: true
		})
	);
	app.options(
		'*',
		cors({
			origin: process.env.CORS_ORIGIN,
		})
	);
	app.use(morgan('dev')); // dev logging
}
// set security http headers
app.use(helmet());
// limit ip request rate
const limiter = rateLimit({
	max: 2000,
	windowMs: 60 * 60 * 1000,
	message: 'Too many requests from this IP, please try again in an hour',
});
app.use('/api', limiter);
// stripe webhook

// parse and limit body size
app.use(express.json({ limit: '10kb' }));
app.use(
	express.urlencoded({
		extended: true,
		limit: '10kb',
	})
);

// parse cookies
app.use(cookieParser());

// data sanitization
app.use(mongoSanitize()); // noSQL query injection
app.use(xss()); // XSS


// prevent param pollution
app.use(
	hpp({
		whitelist: [],
	})
);

// -----------------------------------------
// ^ GLOBAL MIDDLEWARE ^ -------------------

// v ROUTER v -------------------
// -----------------------------------------
app.use('/api/', daRouter);
// use custom error handling util
app.use(globalErrorHandler);

// serve front end
if (
	process.env.NODE_ENV === 'production' ||
	process.env.NODE_ENV === 'staging'
) {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(__dirname + '/client/build/index.html');
	});
}
// -----------------------------------------
// ^ ROUTER ^ ------------------------------

module.exports = app;