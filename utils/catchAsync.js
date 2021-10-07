/** @format */

module.exports = (fn) => {
	console.log('catchAsync')
	return (req, res, next) => {
		console.log('catchAsync')
		fn(req, res, next).catch(next);
	};
}; // ---------------------------------
