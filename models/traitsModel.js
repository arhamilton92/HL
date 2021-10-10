/** @format */

const mongoose = require('mongoose');
// const slugify = require('slugify');

const zone = {
	name: {
		type: String,
		required: true,
	},
	sizes: [
		{
			type: String,
			enum: ['small', 'medium', 'large', 'x-large', 'super'],
		},
	],
	styles: [String],
	src: String,
	rarity: {
		type: String,
		enum: ['unmutated', 'uncommon', 'rare']
	}
};

const traitsSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		enum: ['weaver', 'lumi'],
		required: true
	},
	ears: [zone],
	horns: [zone],
	tails: [zone],
});

// DOCUMENT MIDDLEWARE
traitsSchema.pre('save', function (next) {
	// RUNS BEFORE .save() & .create()
	console.log('slugify');
	next();
}); // --------------------------------
// ------------------------------------

const Traits = mongoose.model('Traits', traitsSchema);
module.exports = Traits;
