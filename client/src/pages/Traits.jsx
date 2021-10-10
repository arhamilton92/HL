/** @format */

import React, { useRef, useEffect, useState, Fragment } from 'react';
import Canvas from './components/Canvas.jsx';
import trait from '../img/trait.png';

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
			<div className='traits__window'>
				<ul className='traits__window--nav'>
					<h4>ears</h4>
					<h4>tail</h4>
					<h4>body</h4>
				</ul>
				<div className='traits__window--options'>
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
				</div>
				<div className='traits__window--desc'>trait info</div>
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
