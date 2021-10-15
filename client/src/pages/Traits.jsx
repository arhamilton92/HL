/** @format */

import React, { useEffect, useState, Fragment } from 'react';
import Canvas from '../components/Canvas.jsx';

import earsIcon from '../img/earsicon.png';
import hornsIcon from '../img/hornsicon.png';
import eyesIcon from '../img/eyesicon.png';
import tailIcon from '../img/tailicon.png';
import traits from '../data/traits';
import { forEach, round } from 'lodash';
import { selectColor } from 'debug';

function Traits() {
	const [width, setWidth] = React.useState(window.innerWidth);
	const [random, setRandom] = useState(false);
	const [optionsArray, setOptionsArray] = useState(traits.ears.type);
	const [select, setSelect] = useState({
		// DEFAULT TRAIT SELECTIONS
		zone: 'ears',
		trait: 'round',
		ears: {
			name: 'round',
			size: {
				selected: 'small',
				rarity: 'unmutated',
			},
			inner_ear: {
				selected: 'default',
				rarity: 'unmutated',
			},
		},
		horns: {
			name: 'no',
		},
		tail: {
			name: 'hair',
		},
	});

	// const [select, setSelect] = useState({
	// 	zone: 'ears',
	// 	select: 'type',
	// 	name: null,
	// 	ears: {
	// 		current: null,
	// 	},
	// 	horns: {
	// 		current: null,
	// 	},
	// 	tail: {
	// 		current: null,
	// 	},
	// });

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
		});
		setRandom(true);
	}, []);

	const clicky = (e) => {
		console.log('clicky');
		setRandom(true);
	};

	const zoneClicky = (value) => {
		setSelect((prev) => ({
			...prev,
			zone: value,
			trait: select[value].name
		}));
		setOptionsArray(traits[value].type);
	};

	const traitClicky = (value) => {
		const trait = traits[select.zone][value]; // trait (EX: round ears)
		const optionsObj = {
			name: value,
		};
		// FOR EACH TRAIT OPTION (EX: round ears: size, inner_ear)
		trait.options.forEach((option) => {
			const defaultValue = trait[option].options[0]; // defaut value for option (EX: size: small)
			const rarity = trait[option][defaultValue]; // rarity
			// iterate through options
			optionsObj[option] = {
				selected: defaultValue,
				rarity,
			};
		});
		setSelect((prev) => ({
			...prev,
			trait: value,
			[select.zone]: optionsObj,
		}));
	};

	const handleChange = (val, option) => {
		const trait = traits[select.zone][select.trait][option]; // trait option data
		const optionsObj = select[select.zone]; // get current trait settings
		optionsObj[option].selected = val;
		optionsObj[option].rarity = trait[val];

		console.log(optionsObj);
		setSelect((prev) => ({
			...prev,
			[select.zone]: optionsObj,
		}));
	};

	return (
		<div className='traits'>
			<div className='traits__select'>
				<h3 className='traits__select--selection'>
					{select.zone.toUpperCase()}
				</h3>
			</div>
			<div className='traits__window'>
				<div className='traits__window--nav'>
					<div className='traits__window--nav-content'>
						<img
							src={earsIcon}
							alt=''
							onClick={(e) => {
								zoneClicky('ears', 'zone');
							}}
						/>
						<img
							src={hornsIcon}
							alt=''
							onClick={(e) => {
								zoneClicky('horns', 'zone');
							}}
						/>
						<img
							src={eyesIcon}
							alt=''
							onClick={(e) => {
								// zoneClicky('eyes', 'zone');
							}}
						/>
						<img
							src={tailIcon}
							alt=''
							onClick={(e) => {
								zoneClicky('tail', 'zone');
							}}
						/>
					</div>
				</div>
				<div className='traits__window--info'>
					<div className='traits__window--info-options'>
						<div className='traits__window--info-options-box'>
							{optionsArray &&
								optionsArray.map((trait) => {
									if (trait !== 'no')
										return (
											<Fragment>
												<img
													className={traits[select.zone][trait].rarity}
													src={traits[select.zone][trait].thumb_src}
													key={trait}
													alt={`thumb: ${trait}`}
													onClick={(e) => {
														traitClicky(trait);
													}}
												></img>
											</Fragment>
										);
								})}
						</div>
						<form className='traits__window--info-options-variants'>
							{select.trait &&
								traits[select.zone][select.trait].options.map((option) => (
									<label>
										{option}{' '}
										<select
											id={option}
											onChange={(e) => handleChange(e.target.value, option)}
										>
											{traits[select.zone][select.trait][option].options.map(
												(val) => (
													<option
														className={
															traits[select.zone][select.trait][option][val]
																.rarity
														}
														value={val}
													>
														{val}
													</option>
												)
											)}
										</select>
									</label>
								))}
						</form>
					</div>
					<div className='traits__window--info-details'>
						{!select.trait && <p>No trait selected</p>}
						{select.trait && (
							<Fragment>
								<div className='traits__window--info-details-type'>
									<h3>
										<span className={traits[select.zone][select.trait].rarity}>
											{select.trait}
										</span>{' '}
										{select.zone}
									</h3>
									{traits[select.zone][select.trait].rarity === 'unmutated' ? (
										<p>unmutated</p>
									) : (
										<p>
											mutated{' • '}
											<span
												className={traits[select.zone][select.trait].rarity}
											>
												{traits[select.zone][select.trait].rarity}
											</span>
										</p>
									)}
								</div>
								{traits[select.zone][select.trait].options.map((option) => (
									<div
										className={`trait-detail ${
											select[select.zone][option].rarity
										}`}
									>
										<div>{`${option}:`}</div>
										<div>{select[select.zone][option].selected}</div>
									</div>
								))}
							</Fragment>
						)}
					</div>
				</div>
			</div>
			<div className='traits__display'>
				<button
					className='traits__display--randomise'
					onClick={(e) => {
						clicky(e);
					}}
				>
					randomize
				</button>
				{width >= 700 && (
					<Canvas scale={0.6} random={random} setRandom={setRandom} />
				)}
				{width <= 699 && (
					<Canvas scale={0.5} random={random} setRandom={setRandom} />
				)}
				<div className='traits__display--bg'></div>
			</div>
		</div>
	);
}

export default Traits;
