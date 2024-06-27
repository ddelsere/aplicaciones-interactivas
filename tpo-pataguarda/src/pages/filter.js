import React, { useState } from 'react';
import Cards from '../components/filter/cards';
import { useLocation } from 'react-router-dom';
import FiltroServicios from '../components/FiltroServicios';

function Filter() {
  const location = useLocation();
  const { idClient } = location.state || {};
  const [filtro, setFiltro] = useState({});
  console.log(filtro)
  return (
    <div>
      <FiltroServicios setFiltro={setFiltro} idClient={idClient} />
      <Cards idClient={idClient} filtro={filtro} />
    </div>
  );
}

export default Filter;