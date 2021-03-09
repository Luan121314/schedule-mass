import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';


const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact  component={Home}/>
            <Route path="/reservations" exact  component={Reservation}/>
        </BrowserRouter>)
}

export default Routes;