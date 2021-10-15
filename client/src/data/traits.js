/** @format */

const traits = {
	name: 'weaver',
	ears: {
		type: ['round', 'point', 'startip'],
		round: {
			name: 'round',
			options: ['size', 'inner_ear'],
			size: {
				options: ['small', 'medium'],
				small: 'unmutated',
				medium: 'uncommon',
			},
			inner_ear: {
				options: ['default', 'wrap'],
				default: 'unmutated',
				wrap: 'uncommon',
			},
			src: 'img/ears/UM/round',
			thumb_src: './img/ears/round-prev.png',
			rarity: 'unmutated',
		},
		point: {
			name: 'point',
			options: ['size', 'inner_ear'],
			size: {
				options: ['small', 'medium'],
				small: 'unmutated',
				medium: 'uncommon',
			},
			inner_ear: {
				options: ['default', 'wrap'],
				default: 'unmutated',
				wrap: 'uncommon',
			},
			src: 'img/ears/UC/point',
			thumb_src: './img/ears/point-prev.png',
			rarity: 'uncommon',
		},
		startip: {
			name: 'startip',
			options: ['size', 'inner_ear'],
			size: {
				options: ['small', 'medium'],
				small: 'unmutated',
				medium: 'uncommon',
			},
			inner_ear: {
				options: ['default', 'wrap'],
				default: 'unmutated',
				wrap: 'uncommon',
			},
			src: 'img/ears/UC/startip',
			thumb_src: './img/ears/tipped-prev.png',
			rarity: 'rare',
		},
	},
	horns: {
		type: ['no', 'standard'],
		no: {
			name: 'no',
			options: [],
			src: 'n/a',
			rarity: 'unmutated',
		},
		standard: {
			name: 'standard',
			options: ['size', 'tilt', 'modifiers'],
			size: {
				small: 'unmutated',
				medium: 'uncommon',
			},
			tilt: {
				default: 'unmutated',
				forward: 'unmutated',
				backward: 'unmutated',
			},
			modifiers: {
				glass: 'rare',
				shard: 'rare',
			},
			src: 'img/ears/UM/standard',
			rarity: 'unmutated',
		},
	},
	tail: {
		type: ['hair', 'fluff'],
		hair: {
			options: [],
			name: 'hair',
			src: 'img/tails/UM/hair',
			thumb_src: './img/tail/hair-prev.png',
			rarity: 'unmutated',
		},
		fluff: {
			name: 'fluff',
			options: ['size'],
			size: {
				options: ['small', 'medium'],
				small: 'unmutated',
				medium: 'uncommon',
			},
			src: 'img/tails/UC/fluff',
			thumb_src: './img/tail/fluff-prev.png',
			rarity: 'uncommon',
		},
	},
};

export default traits;
