/** @format */

const axios = require('axios');
const catchAsync = require('../utils/catchAsync');

exports.showGallery = catchAsync(async (req, res, next) => {
	const { user } = req.params;
	console.log('gallery');
	const galleryUrl = `https://www.deviantart.com/api/v1/oauth2/gallery/all?access_token=${req.daToken}&username=${user}&limit=20`;
	const profileUrl = `https://www.deviantart.com/api/v1/oauth2/user/profile/${user}?access_token=${req.daToken}`;
	const gallery = await axios({
		method: 'GET',
		url: galleryUrl,
	});
	const profile = await axios({
		method: 'GET',
		url: profileUrl,
	});
	res.status(200).json({
		message: 'success',
		gallery: gallery.data.results,
		profile: profile.data.user,
		galleryUrl,
		token: req.daToken,
	});
});
