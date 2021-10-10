/** @format */

import React, { useEffect, useState } from 'react';
import Canvas from './components/Canvas.jsx';

import ears from '../img/earsicon.png';
import horns from '../img/hornsicon.png';
import eyes from '../img/eyesicon.png';
import tail from '../img/tailicon.png';

function Traits() {
	const [width, setWidth] = React.useState(window.innerWidth);
	const [random, setRandom] = useState(false)

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
			console.log(width);
		});
		setRandom(true)
	}, []);

	const clicky = () => {
		console.log('clicky')
		setRandom(true)
	}

	return (
		<div className='traits'>
			<div className="traits__nav">
				<div className="traits__nav--content">
					<img src={ears} alt="" />
					<img src={horns} alt="" />
					<img src={eyes} alt="" />
					<img src={tail} alt="" />
				</div>
			</div>
			<div className='traits__window'>
				{/* <div className='traits__window--options'>
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
					<img src={trait} alt='1' />
				</div> */}
				<div className='traits__window--info'>trait info</div>
			</div>
			<div className='traits__display'>
				<button className="traits__display--randomise" onClick={(e) => {clicky(e)}}>
				randomize
			</button>
				{width >= 1200 && <Canvas scale={0.6} random={random} setRandom={setRandom} />}
				{width <= 1199 && <Canvas scale={0.6} random={random} setRandom={setRandom} />}
				<div className='traits__display--bg'></div>
			</div>
		</div>
	);
}

export default Traits;
