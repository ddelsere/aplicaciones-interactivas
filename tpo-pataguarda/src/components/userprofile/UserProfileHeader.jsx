import React from 'react';
import './UserProfileHeader.css';

const UserProfileHeader = ({ userName, userImage, onAddPet }) => {
  return (
    <div className="user-profile-header">
      <img src={userImage} alt="User" className="user-image" />
      <h2 className="user-name">{userName}</h2>
      <button className="add-pet-btn" onClick={onAddPet}>Agregar mascotas +</button>
    </div>
  );
};

export default UserProfileHeader;
