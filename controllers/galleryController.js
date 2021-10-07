/** @format */

const axios = require('axios');
const catchAsync = require('../utils/catchAsync');

exports.showGallery = catchAsync(async (req, res, next) => {
	const { user } = req.params;
	console.log('gallery');
	const galleryUrl = `https://www.deviantart.com/api/v1/oauth2/gallery/all?access_token=${req.daToken}&username=${user}&limit=20`;
	const foldersUrl = `https://www.deviantart.com/api/v1/oauth2/gallery/folders?access_token=${req.daToken}&username=${user}`;
	const gallery = await axios({
		method: 'GET',
		url: galleryUrl,
	});
	const folders = await axios({
		method: 'GET',
		url: foldersUrl,
	});
	res.status(200).json({
		message: 'success',
		gallery: gallery.data.results,
		folders: folders.data.results,
		galleryUrl,
		foldersUrl,
		token: req.daToken,
	});
});
