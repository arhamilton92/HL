/** @format */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Connect from './pages/Connect';
import Masterlist from './pages/Masterlist';
import Traits from './pages/Traits'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Connect} />
				<Route path='/gallery/:user' component={Gallery} />
				<Route path='/masterlist' component={Masterlist} />
				<Route path='/traits' component={Traits} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
