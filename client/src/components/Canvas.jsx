/** @format */

import React, { useRef, useEffect, useState, Fragment } from 'react';
import base from '../img/base.png';
import mane from '../img/mane.png';

const Canvas = (props) => {
	const width = 809 * props.scale;
	const height = 716 * props.scale;
	const [images, setImages] = useState([base]);
	const [loaded, setLoaded] = useState(false)
	const tails = [];
	const ears = [];
	const manes = [mane, mane, mane, null];
	const zones = [tails, manes, ears];

	const canvasRef = useRef(null);
	let canvas;
	let ctx;


	useEffect(() => {
		if (loaded === false) {
			canvas = canvasRef.current;
			ctx = canvas.getContext('2d')
		}
		if (props.random === true) {
			props.setRandom(false);

			if (ctx) {
				ctx.setTransform(1, 0, 0, 1, 0, 0);
				ctx.clearRect(0, 0, 564, 502);
				randomise();
			}
		}
	}, [props.random]);

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
		ctx.scale(props.scale, props.scale);
		for (let i in images) {
			if (images[i]) {
				let image = await loadImage(images[i]);
				ctx.drawImage(image, 0, 0);
			} else return;
		}
	};

	const randomise = () => {
		setImages([base]);
		console.log('randomise');
		let num;
		for (let zone in zones) {
			num = Math.floor(Math.random() * tails.length);
			const marking = zones[zone][num];
			if (marking !== null) images.push(marking);
		}
		drawImages();
	};

	return (
		<canvas
			className='traits__display--canvas'
			ref={canvasRef}
			width={width}
			height={height}
		/>
	);
};

export default Canvas;
