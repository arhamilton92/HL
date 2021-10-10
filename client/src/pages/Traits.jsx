/** @format */

import React, { useRef, useEffect, useState, Fragment } from 'react';
import Canvas from './components/Canvas.jsx';
import trait from '../img/trait.png';

import ears from '../img/earsicon.png';
import horns from '../img/hornsicon.png';
import eyes from '../img/eyesicon.png';
import tail from '../img/tailicon.png';

function Traits() {
	const [width, setWidth] = React.useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
			console.log(width);
		});
	}, []);

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
				{width >= 1200 && <Canvas scale={0.6} />}
				{width <= 1199 && <Canvas scale={0.6} />}
				<div className='traits__display--bg'></div>
			</div>
		</div>
	);
}

export default Traits;
