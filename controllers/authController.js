/** @format */

const jwt = require('jsonwebtoken');
const axios = require('axios');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const signToken = (tokenCode) => {
	console.log(process.env.JWT_DA_EXPIRES_IN);
	return jwt.sign({ tokenCode }, process.env.JWT_SECRET, {
		expiresIn: '120m',
	});
};

const createSendToken = async (
	tokenCode,
	tokenName,
	statusCode,
	req,
	res,
	next
) => {
	const token = await signToken(tokenCode);
	res.cookie(tokenName, token, {
		expires: new Date(
			Date.now() + 0.1 * 24 * 60 * 60 * 1000 // MILLISECONDS
		),
		httpOnly: true, // PREVENTS MODIFICATION
		secure: false,
	});
	//
	next();
};

const getDaToken = catchAsync(async (req, res, next) => {
	console.log('getDaToken');
	const url = `https://www.deviantart.com/oauth2/token?client_id=${process.env.DA_CLIENT_ID}&client_secret=${process.env.DA_CLIENT_SECRET}&grant_type=client_credentials`;
	try {
		const token = await axios({
			method: 'GET',
			url,
		});
		createSendToken(token.data.access_token, 'daToken', 201, req, res, next);
	} catch (error) {
		return new AppError(
			'Failed to create client access token. Please contact administrator.',
			400
		);
	}
});

const checkToken = async (token) => {
	console.log(token);
	console.log('checkToken');
	const url = `https://www.deviantart.com/api/v1/oauth2/placebo?access_token=${token}`;
	try {
		const verify = await axios({
			method: 'GET',
			url,
		});
		return true
	} catch (error) {
		return false
	}
};

exports.daConnect = catchAsync(async (req, res, next) => {
	if (req.cookies.daToken) {
		const decoded = await jwt.verify(
			req.cookies.daToken,
			process.env.JWT_SECRET
		);
		req.daToken = decoded.tokenCode;
		if (await checkToken(decoded.tokenCode)) next()
		else getDaToken(req, res, next);
	} else {
		getDaToken(req, res, next);
	}
});
