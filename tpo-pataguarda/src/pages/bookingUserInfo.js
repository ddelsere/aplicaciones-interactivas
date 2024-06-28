import React from 'react';
import '../components/servicesClient/userInfo.css';
import UserInfo from '../components/servicesClient/UserInfoBooking';
import ServiceCardBooking from '../components/servicesClient/ServiceCardClient';
import { useLocation } from 'react-router-dom';


function Booking() {


    const location = useLocation();  
    const { service, user, idClient, startDate, finishDate } = location.state || {};
    
    return (
        <div className='booking-user-info' style={{ backgroundColor: "#203629", paddingBottom: "1%" }}>

            <UserInfo user={user} />
            <ServiceCardBooking title={user.name + ' ' + user.surname} service={service} idUser={idClient} startDate={startDate} finishDate={finishDate} />

        </div>
    );
}

export default Booking;