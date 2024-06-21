import React from 'react';

import UserInfo from '../components/servicesClient/UserInfoBooking';
import ServiceCardBooking from '../components/servicesClient/ServiceCardClient';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Booking() {
//     const location = useLocation();
//   const { service, user } = location.state || {};
const { userId, serviceId } = useParams();
    console.log(userId);
    console.log(serviceId);

  return (
    <div>
      
      <UserInfo user={userId} />
      {/* <ServiceCardBooking title={user.name + ' ' + user.surname} service={service} /> */}
      
    </div>
  );
}

export default Booking;