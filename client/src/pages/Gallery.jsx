/** @format */

import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { renderGallery } from './utils/Gallery.jsx';
import GalleryComponent from "react-photo-gallery";

const Gallery = () => {
	const [gallery, setGallery] = useState(null);

	useEffect(() => {
		getConnection();
	}, []);

	const createItems = (gall) => {
		// setGallery(
		// 	gall.map((el) => {
		// 		return {
		// 			itemId: el.deviationId,
		// 			mediaUrl: el.preview.src,
		// 			metaData: {
		// 				type: 'image',
		// 				height: el.preview.height,
		// 				width: el.preview.width,
		// 				title: el.title,
		// 				description: 'sample-description',
		// 				focalPoint: [0, 0],
		// 				link: {
		// 					url: 'http://example.com',
		// 					target: '_blank',
		// 				},
		// 			},
		// 		};
		// 	})
		// );
		setGallery(
			gall.map((el) => {
				return {
					height: el.preview.height,
					width: el.preview.width,
					src: el.preview.src
				};
			})
		);
	};

	const getConnection = () => {
		let url;
		process.env.NODE_ENV === 'development'
			? (url = `http://localhost:8000/api/`)
			: (url = process.env.REACT_APP_API);
		axios({
			method: 'GET',
			url,
			withCredentials: true,
		})
			.then((res) => {
				console.log(res.data);
				createItems(res.data.gallery);
			})
			.catch((error) => {
				console.log('error');
				console.log(error);
			});
	};

	return (
		<Fragment>
			<h1 className='express-connection'>Gallery</h1>
			{gallery && (
				<GalleryComponent photos={gallery}/>
			)}
		</Fragment>
	);
};

export default Gallery;
