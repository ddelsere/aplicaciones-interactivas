// src/components/UserInfo/UserInfo.jsx
import React from 'react';
import '../servicesClient/userInfo.css';

const UserInfo = ({ user, onEdit, onAddPet }) => {
  // Función para manejar el clic en "Editar información"
  const handleEditInfo = () => {
    // Aquí puedes agregar la lógica para abrir un modal de edición.
    onEdit(); // Llamamos a la función onEdit pasada como prop para abrir el modal de edición
  };

  return (

<div className="user-info">
        <div className="profile-card">
            <div className="profile-picture"></div>
            <h2>{user.name} {user.surname}</h2>
            <button className="add-pet-btn" onClick={onAddPet}>Agregar mascotas +</button>
        </div>
        <div className="details-card">
            <h3>INFORMACION DEL CLIENTE</h3>
            <div className="details">
                <p><strong>Email</strong><span>{user.email}</span></p>
                <p><strong>Numero celular</strong><span>{user.phoneNumber}</span></p>
                <p><strong>Direccion</strong><span>{user.address}</span></p>
            </div>
            <span className="comments-link" onClick={handleEditInfo}>Editar información</span>
            <button className="button-primary" onClick={handleEditInfo}>Editar información</button>
        </div>
    </div>


    
  );
};

export default UserInfo;
