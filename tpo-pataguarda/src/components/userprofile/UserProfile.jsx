// src/components/UserProfile/UserProfile.jsx
import React, { useState } from 'react';
import UserInfo from './UserInfo.jsx';
import UserHistory from './UserHistory.jsx';
import {AddPet} from './AddPet.jsx';
import EditInfoModal from '../providerprofile/EditInfoModal';
import UserProfileHeader from './UserProfileHeader.jsx'; 
import '../servicesClient/userInfo.css';


const UserProfile = ({user}) => {

  console.log(user)

  // Estado para controlar la visibilidad del modal de edición
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddPetModalOpen, setAddPetModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(user);

  const handleEditInfo = () => {
    setEditModalOpen(true);
  };

  const handleCloseModal = (updatedUser) => {
    if (updatedUser) {
      setCurrentUser(updatedUser);
    }
    setEditModalOpen(false);
  };

  // Función para manejar la apertura del modal de agregar mascota
  const handleAddPet = () => {
    setAddPetModalOpen(true);
  };

  // Función para cerrar el modal de agregar mascota
  const closeAddPetModal = () => {
    setAddPetModalOpen(false);
  };


  return (
    <div className="user-profile">
      {/* <div className="user-details-container"> */}
        {/* <UserProfileHeader 
          userName={user.name} 
          userImage={user.photo}
          onAddPet={handleAddPet}
        /> */}
        <UserInfo user={currentUser} onEdit={handleEditInfo} onAddPet={handleAddPet} />
      {/* </div> */}

      <UserHistory idUser={user.id} />
      {isEditModalOpen && <EditInfoModal user={currentUser} onClose={handleCloseModal} />}
      {isAddPetModalOpen && <AddPet onClose={closeAddPetModal} />}
    </div>
  );
};

export default UserProfile;
