/** @format */

import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import GalleryComponent from 'react-photo-gallery';

const Gallery = ({ match }) => {
	const [gallery, setGallery] = useState(null);
	const [galleryUser, setGalleryUser] = useState(match.params.user);
	const [username, setUsername] = useState(null)
	const [userIcon, setUserIcon] = useState(null);

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
			? (url = `http://localhost:8000/api/gallery/${galleryUser}`)
			: (url = `${process.env.REACT_APP_API}/gallery/${galleryUser}`);
		axios({
			method: 'GET',
			url,
			withCredentials: true,
		})
			.then((res) => {
				createItems(res.data.gallery);
				setUserIcon(res.data.profile.usericon);
			})
			.catch((error) => {
				console.log('error');
				console.log(error.response.data.message);
			});
	};

	return (
		<div className='gallery__component'>
			{/* <form className="gallery__selector">
				<h1 className='gallery__selector--title'>Gallery</h1>
				<button className="gallery__selector--btn">bUTTS</button>
			</form> */}

			<div className='gallery__user'>
				<div className='gallery__user--icon'>
					{userIcon && <img src={userIcon}></img>}
				</div>
				{userIcon && (<h1 className='gallery__user--text'>{galleryUser}</h1>)}
			</div>
			{gallery && (
				<div className='gallery__view'>
					<div className='gallery__view--images'>
						<GalleryComponent photos={gallery} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Gallery;
