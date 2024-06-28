import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header_clientes from '../components/Header_clientes';
import MainContent from '../components/MainContent';
import { useLocation } from 'react-router-dom';


function Incio_clientes() {
  const location = useLocation();
  const { user } = location.state || {};
  return (
    <div>

    <Header_clientes user={user} />
    <MainContent/>
    </div>
    
  );
}

export default Incio_clientes;