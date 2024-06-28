import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo.jsx';
import UserHistory from './UserHistory.jsx';
import AddPet from './AddPet';
import EditInfoModal from '../providerprofile/EditInfoModal';
import '../servicesClient/userInfo.css';

const UserProfile = ({ user }) => {
  
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddPetModalOpen, setAddPetModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(user);
  const [currentPets, setCurrentPets] = useState([]);

  const handleEditInfo = () => {
    setEditModalOpen(true);
  };

  const handleCloseModal = (updatedUser) => {
    if (updatedUser !== null) {
      setCurrentUser(updatedUser);
    }
    setEditModalOpen(false);
  };

  const handleAddPet = () => {
    setAddPetModalOpen(true);
  };

  const closeAddPetModal = (updatedPets) => {
    if (Array.isArray(updatedPets)) {
      setCurrentPets(updatedPets);
    }
    setAddPetModalOpen(false);
  };

  const fetchPets = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/v1/pets/${user.id}`);
      const data = await response.json();
      if (response.ok) {
        setCurrentPets(data);
      } else {
        throw new Error('Failed to fetch pets');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div className="user-profile">
      <UserInfo user={currentUser} pets={currentPets} onEdit={handleEditInfo} onAddPet={handleAddPet} />
      <UserHistory idUser={user.id} />
      {isEditModalOpen && <EditInfoModal user={currentUser} onClose={handleCloseModal} />}
      {isAddPetModalOpen && <AddPet onClose={closeAddPetModal} idUser={currentUser.id} />}
    </div>
  );
};

export default UserProfile;
