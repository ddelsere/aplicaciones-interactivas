import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Servicios from './pages/servicios';
import LoginPage from './pages/login';
import ResetPassword from './components/login/resetPassword';
import ServiciosProvider from './pages/servicesProvider';

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
        </Routes>
        
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
