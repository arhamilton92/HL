/** @format */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Connect from './pages/Connect'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={Connect} />
				<Route path='/gallery/:user' component={Gallery} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
