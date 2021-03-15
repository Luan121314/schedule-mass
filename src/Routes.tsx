import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CancelReservation from './pages/CancelReservation';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import ReservationFinal from './pages/ReservationFinal';


const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact  component={Home}/>
            <Route path="/reservations" exact  component={Reservation}/>
            <Route path="/reservations/:id" exact  component={ReservationFinal}/>
            <Route path="/reservations/:null/cancels/:id" exact  component={CancelReservation}/>
        </BrowserRouter>)
}

export default Routes;