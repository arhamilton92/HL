/** @format */

const axios = require('axios');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.showGallery = catchAsync(async (req, res, next) => {
	console.log('gallery');
	const url = `https://www.deviantart.com/api/v1/oauth2/gallery/all?access_token=${req.daToken}&username=bananamantis&limit=20`;
	try {
		const gallery = await axios({
			method: 'GET',
			url,
		});
		res.status(200).json({
			message: 'success',
			gallery: gallery.data.results,
			url: url
		});
    } catch (error) {
		res.json({
			error: error,
			url: url
		})
	}
});
