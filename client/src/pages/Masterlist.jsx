/** @format */

import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import GalleryComponent from 'react-photo-gallery';

const Masterlist = ({ match }) => {
	const [gallery, setGallery] = useState(match.params.user);

	useEffect(() => {
		getConnection();
	}, []);

	const createItems = (gall) => {
		setGallery(
			gall.map((el) => {
				return {
					height: el.preview.height,
					width: el.preview.width,
					src: el.preview.src,
				};
			})
		);
	};

	const getConnection = () => {
		console.log('fetching gallery...');
		let url;
		process.env.NODE_ENV === 'development'
			? (url = `http://localhost:8000/api/masterlist`)
			: (url = `${process.env.REACT_APP_API}/masterlist`);
		axios({
			method: 'GET',
			url,
			withCredentials: true,
		})
			.then((res) => {
				console.log(res.data);
				createItems(res.data.masterlist);
			})
			.catch((error) => {
				console.log('error');
				console.log(error.response.data.message);
			});
	};

	return (
        <div className='gallery-container'>
            <h1>MASTERLIST</h1>
			{gallery && (
				<div className='image-container'>
					<GalleryComponent photos={gallery} />
				</div>
			)}
		</div>
	);
};

export default Masterlist;
