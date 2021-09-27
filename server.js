/** @format */

const dotenv = require('dotenv');

dotenv.config({ path: './.env' }); // ENV variables BEFORE EXPRESS
const app = require('./app'); // EXPRESS

// UNCAUGHT EXCEPTION HANDLER
process.on('uncaughtException', (err) => {
	console.log('uncaught exception');
	console.log(err.name, err.message);
	process.exit();
});

// SERVER START
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
	console.log(`App running on port ${port}`);
});

// UNHANDLED REJECTION HANDLER
process.on('unhandledRejection', (err) => {
	console.log(err.name, err.message);
	server.close(() => {
		process.exit(1);
	});
});