import React from 'react';
import HeaderClientes from '../components/Header_clientes';
import MainContent from '../components/MainContent';
import { useLocation } from 'react-router-dom';


function InicioClientes() {
  const location = useLocation();
  const { user } = location.state || {};
  return (
    <div>

    <HeaderClientes user={user} />
    <MainContent/>
    </div>
    
  );
}

export default InicioClientes;