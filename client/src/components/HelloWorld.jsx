/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HelloWorld = () => {
	const [connectionMessage, setConnectionMessage] = useState(null);

	useEffect(() => {
		getConnection();
	}, []);

    const getConnection = () => {
        let url;
		process.env.NODE_ENV === 'development' ? url = `http://localhost:8000/api` : url = process.env.REACT_APP_API
        axios({
            method: 'GET',
			url: url
		})
			.then((res) => {
				console.log(res)
                setConnectionMessage(res.data.message)
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
            <h1>HELLO WORLD</h1>
            {connectionMessage && (
                <div>{connectionMessage}</div>
            )}
		</div>
	);
};

export default HelloWorld;
