import React, { useState } from 'react';
import UserInfo from './UserInfo.jsx'; // Reutilizamos este componente
import EditInfoModal from './EditInfoModal.jsx';
import UserProfileHeader from './UserProfileHeader.jsx'; // Reutilizamos este componente con modificaciones
import ReservasActivas from './ReservasActivas.jsx'; // Nuevo componente
// import './ProviderProfile.css'; // Archivo de estilos específicos
import { useLocation } from 'react-router-dom';
import '../servicesClient/userInfo.css';

const ProviderProfile = ({provider}) => {
  const location = useLocation();

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [providerData, setProviderData] = useState(provider);

  const handleEditInfo = () => {
    setEditModalOpen(true);
  };

  const handleCloseModal = (updatedUser) => {
    setEditModalOpen(false);
    if (updatedUser) {
      
      setProviderData(prevState => ({
        ...prevState,
        User: updatedUser
      }));
    }
  };

  return (
    <div className="user-profile">
      
        {/* <UserProfileHeader 
          userName={provider.User.name} surname={provider.User.surname}
          // userImage={provider.photo}
          // rating={provider.rating} // Pasamos la calificación como prop
        /> */}
        {/* <UserInfo user={providerData.User} onEdit={handleEditInfo} /> */}
        <UserInfo user={providerData.User} onEdit={handleEditInfo}  />
      

      <ReservasActivas idProvider={provider.id} />

      {isEditModalOpen && <EditInfoModal user={provider.User} onClose={handleCloseModal} />}
    </div>
  );
};

export default ProviderProfile;
