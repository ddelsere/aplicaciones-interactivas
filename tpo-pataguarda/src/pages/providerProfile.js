import React from 'react';
import ProviderProfile from '../components/providerprofile/ProviderProfile';
import { useLocation } from 'react-router-dom';
import HeaderProvider from '../components/Header_proveedores';

function ProviderProfilePage() {
  const location = useLocation();
  const { provider } = location.state || {};
  console.log(provider)
  return (
    <div>
      <HeaderProvider provider={provider}/>
      <ProviderProfile provider={provider} />
      
    </div>
  );
}

export default ProviderProfilePage;
