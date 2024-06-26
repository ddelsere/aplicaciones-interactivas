// src/components/EditInfoModal/EditInfoModal.js

import React, { useState } from 'react';
import './EditInfoModal.css';

// Componente modal para editar la información del usuario
const EditInfoModal = ({ onClose, user }) => {
  console.log(user);
  // const [formState, setFormState] = useState()
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
    onClose(user); // cierra el modal después de actualizar la información
  };

  const updateUser = async() =>{
    let body = {id: user.id, name: name, surname: surname, email: email, address: address, phoneNumber: phoneNumber}
    console.log('body: ' ,body);
    const response = await fetch(`http://localhost:8081/api/v1/users/${user.id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
  });
    if(response.ok)
      console.log('Información actualizada:', { name, email, address, phoneNumber});
  }

  return (
    <div className="edit-info-modal">
      <h2>Editar Información</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Apellido:
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Dirección:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <label>
          Teléfono:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </label>
        {/* <label>
          Edad:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </label>
        <label>
          Género:
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Seleccionar</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </label> */}
        <div className="modal-buttons">
          <button type="submit">Guardar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default EditInfoModal;
