/** @format */

const axios = require('axios');
const catchAsync = require('../utils/catchAsync');

exports.showGallery = catchAsync(async (req, res, next) => {
	const { user } = req.params;
	console.log('gallery');
	const url = `https://www.deviantart.com/api/v1/oauth2/gallery/all?access_token=${req.daToken}&username=${user}&limit=20`;
	const gallery = await axios({
		method: 'GET',
		url,
	});
	res.status(200).json({
		message: 'success',
		gallery: gallery.data.results,
		url: url,
	});
});
