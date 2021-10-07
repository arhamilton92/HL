/** @format */

import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

const Connect = () => {
	const [connectionMessage, setConnectionMessage] = useState(null);

	useEffect(() => {
		getConnection();
	}, []);

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
                setConnectionMessage(res.data.message)
			})
			.catch((error) => {
				console.log('error');
				console.log(error);
			});
	};

	return (
		<Fragment>
            {connectionMessage && (
                <h1>{connectionMessage}</h1>
            )}
		</Fragment>
	);
};

export default Connect;
