import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Servicios from './pages/servicios';
import LoginPage from './pages/login';
import ResetPassword from './components/login/resetPassword';
import ServiciosProvider from './pages/servicesProvider';
import CommentsModalProvider from './components/comments/commentsProvider';
import Booking from './pages/bookingUserInfo';
import ServicesFilter from './components/filter/cards';
import Filter from './pages/filter';
import UserProfilePage from './pages/userProfile';
import ProviderProfilePage from './pages/providerProfile';

function App() {

  
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/pages/servicios" element={<Servicios />} />
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path='/services-provider' element={<ServiciosProvider />} />
          <Route path='/filter' element={<Filter/> }  />
          <Route path='/booking'  element={<Booking/>}/>
          <Route path="/user-profile" element={<UserProfilePage />} />
          <Route path="/provider-profile" element={<ProviderProfilePage />} />
        </Routes>
        
        {/* <ServiciosProvider idProvider={1} /> */}

      {/* <ServicesFilter/> */}

        

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
