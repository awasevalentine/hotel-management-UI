import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import PageHeader from './components/header/header';
import Register from './pages/user/register/create-account';
import Login from './pages/user/login/login';
import Contact from './pages/contact/contact';
import ConfirmBooking from './components/booking-confirm/confirm-booking';
import Booking from './pages/booking/booking';
import Payment from './components/Payment/payment';



function App() {
  return (
    <Router>
      <div className="App">
        <div class="sticky-top">
          <PageHeader />
        </div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/confirm' element={<ConfirmBooking />} />
          <Route path='booking' element={<Booking />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
