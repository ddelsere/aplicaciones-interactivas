// src/components/UserInfo/UserInfo.jsx
import React from 'react';
import './UserInfo.css';
import perfil_proveedor from '../src/assets/images/hombre1.jpg'

const UserInfo = ({ user, onEdit }) => {
  
  const handleEditInfo = () => {
    
    onEdit(); 
  };

  return (
    <div className="user-info">
        <div className="profile-card">
            <img className="profile-picture" {perfil_proveedor}>
            <h2>{user.name} {user.surname}</h2>
            {/* ver score */}
        </div>
        <div className="details-card">
            <h3>INFORMACION DEL CLIENTE</h3>
            <div className="details">
                <p><strong>Email</strong><span>{user.email}</span></p>
                <p><strong>Numero celular</strong><span>{user.phoneNumber}</span></p>
                <p><strong>Direccion</strong><span>{user.address}</span></p>
            </div>
            <span className="comments-link" onClick={handleEditInfo}>Editar información</span>
            {/* <button className="button-primary" onClick={handleEditInfo}>Editar información</button> */}
        </div>
    </div>
  );
};

export default UserInfo;
