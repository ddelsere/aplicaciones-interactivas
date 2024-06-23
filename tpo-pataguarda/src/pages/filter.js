import React from 'react';
import ServicesFilter from '../components/filter/cards';
import { useLocation } from 'react-router-dom';

function Filter() {
  const location = useLocation();
  const { idClient } = location.state || {};

  return (
    <div>
      <ServicesFilter idClient={idClient} />
    </div>
  );
}

export default Filter;