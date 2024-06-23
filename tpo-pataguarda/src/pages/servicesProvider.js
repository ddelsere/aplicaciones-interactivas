import React from 'react';

import ServicesList from '../components/services/servicesListProvider';
import { useLocation } from 'react-router-dom';

function ServiciosProvider() {
  const location = useLocation();
  const { idProvider } = location.state || {};

  return (
    <div>
      <ServicesList idProvider={idProvider} />
    </div>
  );
}

export default ServiciosProvider;