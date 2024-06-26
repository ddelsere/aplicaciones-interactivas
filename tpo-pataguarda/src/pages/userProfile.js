// src/pages/userProfile.js

import React from 'react';
import UserProfile from '../components/userprofile/UserProfile'; // Importa el componente principal del perfil de usuario
import { useLocation } from 'react-router-dom';

function UserProfilePage() {
  const location = useLocation();
  const { user } = location.state || {};
  // console.log(user)
  return (
    <div >
      {/* <Header /> */}
      <UserProfile user={user} />
      {/* <Footer /> */}
    </div>
  );
}

export default UserProfilePage;
