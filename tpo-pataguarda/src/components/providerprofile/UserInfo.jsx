import React from 'react';
import './UserInfo.css';
import perfil_proveedor from '../../assets/images/perfil_clientes.jpg';

const UserInfo = ({ user, onEdit }) => {
  
  const handleEditInfo = () => {
    
    onEdit(); 
  };

  return (
    <div className="user-info">
        <div className="profile-card">
            <img className="profile-picture" src={perfil_proveedor} alt='imagen de perfil'/>
            <h2>{user.name} {user.surname}</h2>
            
        </div>
        <div className="details-card">
            <h3>INFORMACION DEL PROVEEDOR</h3>
            <div className="details">
                <p><strong>Email</strong><span>{user.email}</span></p>
                <p><strong>Numero celular</strong><span>{user.phoneNumber}</span></p>
                <p><strong>Direccion</strong><span>{user.address}</span></p>
            </div>
            <span className="comments-link" onClick={handleEditInfo}>Editar información</span>
           
        </div>
    </div>
  );
};

export default UserInfo;
