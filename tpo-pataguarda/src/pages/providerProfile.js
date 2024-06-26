// src/pages/userProfile.js

import React from 'react';
import UserProfile from '../components/providerprofile/ProviderProfile'; // Importa el componente principal del perfil de usuario
import ProviderProfile from '../components/providerprofile/ProviderProfile';
import { useLocation } from 'react-router-dom';

function ProviderProfilePage() {
  const location = useLocation();
  const { provider } = location.state || {};
  console.log(provider)
  return (
    <div>
      
      <ProviderProfile provider={provider} />
      
    </div>
  );
}

export default ProviderProfilePage;
