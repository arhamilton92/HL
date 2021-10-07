import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Gallery from './pages/Gallery'

const Routes = () => {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route path='/gallery/:user' component={Gallery} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
