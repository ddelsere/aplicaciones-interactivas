import React from 'react';
import UserProfile from '../components/userprofile/UserProfile'; 
import { useLocation } from 'react-router-dom';
import HeaderClientes from '../components/Header_clientes';

function UserProfilePage() {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div >
      <HeaderClientes user={user} />
      <UserProfile user={user} />
    </div>
  );
}

export default UserProfilePage;
