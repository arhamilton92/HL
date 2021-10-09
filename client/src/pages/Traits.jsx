/** @format */

import React, { useRef, useEffect, useState, Fragment } from 'react';
import base from '../img/base.png';
import tail1 from '../img/tail/tail.png';
import tail2 from '../img/tail/tail2.png';
import tail3 from '../img/tail/tail3.png';
import tail4 from '../img/tail/tail4.png';
import tail5 from '../img/tail/tail5.png';
import tail6 from '../img/tail/tail6.png';
import ears1 from '../img/ears/UC/point-small-default.png';
import ears2 from '../img/ears/UC/point-medium-default.png';
import ears3 from '../img/ears/UC/point-small-wrap.png';
import ears4 from '../img/ears/UC/point-medium-wrap.png';
import ears5 from '../img/ears/UM/round-small-default.png';
import ears6 from '../img/ears/UM/round-medium-default.png';
import ears7 from '../img/ears/UM/round-small-wrap.png';
import ears8 from '../img/ears/UM/round-medium-wrap.png';
import mane from '../img/mane.png';

function Traits() {
	const [ctx, setCTX] = useState(null);
	const [images, setImages] = useState([base]);
    const tails = [tail1, tail2, tail3, tail4, tail5, tail6, null];
    const ears = [ears1, ears2, ears3, ears4, ears5, ears6, ears7, ears8, null];
	const manes = [mane, mane, mane, null];
	const zones = [tails, manes, ears];

	const canvasRef = useRef(null);
	let canvas = null;

	useEffect(() => {
		canvas = canvasRef.current;
		setCTX(canvas.getContext('2d'));

		if (ctx) {
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.clearRect(0, 0, 564, 502);
			randomise();
		}
	}, [ctx, images]);

	function loadImage(url) {
		return new Promise((resolve, reject) => {
			const image = new Image();
			image.addEventListener('load', () => {
				resolve(image);
			});
			image.addEventListener('error', reject);
			image.src = url;
		});
	}

    const drawImages = async () => {
		ctx.scale(0.7, 0.7);

		for (let i in images) {
			try {
				let image = await loadImage(images[i]);
				ctx.drawImage(image, 0, 0);
			} catch (error) {
				console.log(error);
			}
		}
	};

	const randomise = () => {
		let num;
		let marking;
        for (let zone in zones) {
            num = Math.floor(Math.random() * tails.length);
            const marking = zones[zone][num]
            if (marking !== null) images.push(marking);
		}
		drawImages();
	};

	return (
		<Fragment>
			<canvas ref={canvasRef} width={564} height={502} />
			<btn
				onClick={(e) => {
					setImages([base]);
				}}
			>
				RANDOMISE
			</btn>
		</Fragment>
	);
}

export default Traits;
