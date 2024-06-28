import React, { useState } from 'react';
import Cards from '../components/filter/cards';
import { useLocation } from 'react-router-dom';
import FiltroServicios from '../components/FiltroServicios';
import HeaderClientes from '../components/Header_clientes';

function Filter() {
  const location = useLocation();
  const { user } = location.state || {};
  const [filtro, setFiltro] = useState({});
  
  return (
    <div>
      <HeaderClientes user={user} />
    <div style={{background: '#203629'}}>
      <FiltroServicios setFiltro={setFiltro} idClient={user.id} />
      <Cards client={user} filtro={filtro} />
    </div>
    </div>
  );
}

export default Filter;