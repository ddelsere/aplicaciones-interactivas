import React from 'react';
import UserProfile from '../components/userprofile/UserProfile'; 
import { useLocation } from 'react-router-dom';

function UserProfilePage() {
  const location = useLocation();
  const { user } = location.state || {};
  
  return (
    <div >
      <UserProfile user={user} />
    </div>
  );
}

export default UserProfilePage;
