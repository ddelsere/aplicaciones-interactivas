import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ServiceForm from './components/services/serviceForm';
import ServicesList from './components/services/servicesListProvider';
import ServiciosProvider from './pages/servicesProvider';

function App() {
  return (
    <div>
      <Header />
   
      <MainContent />     
      {/* <ServiciosProvider idProvider={1} /> */}

      <Footer />
    </div>
  );
}

export default App;
