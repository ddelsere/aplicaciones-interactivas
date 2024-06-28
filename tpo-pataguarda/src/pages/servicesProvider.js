import React from 'react';
import HeaderProvider from '../components/Header_proveedores';
import ServicesList from '../components/services/servicesListProvider';
import { useLocation } from 'react-router-dom';

function ServiciosProvider() {
  const location = useLocation();
  const { provider } = location.state || {};
  
  return (
    <div>
      <HeaderProvider provider={provider} />
      <ServicesList idProvider={provider.id} />
    </div>
  );
}

export default ServiciosProvider;