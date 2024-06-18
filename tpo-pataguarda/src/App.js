import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Servicios from './pages/servicios';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainContent />} />
          <Route path="/pages/servicios" element={<Servicios />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
