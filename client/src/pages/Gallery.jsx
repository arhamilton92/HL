/** @format */

import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import GalleryComponent from "react-photo-gallery";

const Gallery = ({ match }) => {
	const [gallery, setGallery] = useState(null);
	const [galleryUser, setGalleryUser] = useState(match.params.user)

	useEffect(() => {
		getConnection();
	}, []);

	const createItems = (gall) => {
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
			? (url = `http://localhost:8000/api/gallery/${galleryUser}`)
			: (url = `${process.env.REACT_APP_API}/gallery/:user`);
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
			{/* <form className="gallery__selector">
				<h1 className='gallery__selector--title'>Gallery</h1>
				<button className="gallery__selector--btn">bUTTS</button>
			</form> */}
			<h1>{galleryUser}</h1>
			{gallery && (
				<GalleryComponent photos={gallery}/>
			)}
		</Fragment>
	);
};

export default Gallery;
