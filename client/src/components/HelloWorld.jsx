import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const HelloWorld = () => {
	const [connectionMessage, setConnectionMessage] = useState(null);

	useEffect(() => {
		getConnection();
	}, []);

    const getConnection = () => {
        let url;
		process.env.NODE_ENV === 'development' ? url = `http://localhost:8000/api/` : url = process.env.REACT_APP_API
        axios({
            method: 'GET',
			url,
			withCredentials: true
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
		<Fragment>
            {connectionMessage && (
                <h1 className="express-connection">{connectionMessage}</h1>
            )}
		</Fragment>
	);
};

export default HelloWorld
