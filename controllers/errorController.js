module.exports = (err, req, res, next) => {
    console.log('error handling')
	if (req.originalUrl.startsWith('/api')) {
		//API
		return res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
			error: err,
			stack: err.stack,
		});
	}
	// RENDERED WEBSITE
	res.status(err.statusCode).render('error', {
		title: 'Something went wrong',
		msg: err.message,
	});
};