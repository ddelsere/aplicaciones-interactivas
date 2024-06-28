import React from 'react';
import './UserProfileHeader.css';

const UserProfileHeader = ({ userName, surname, userImage, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>&#9733;</span>
      );
    }
    return stars;
  };

  return (
    <div className="user-profile-header">
      <img src={userImage} alt={`${userName}'s profile`} className="profile-image" />
      <div className="profile-info">
        <h1>{userName} {surname}</h1>
        {/* <div className="rating">
          {renderStars()}
        </div> */}
      </div>
    </div>
  );
};

export default UserProfileHeader;
