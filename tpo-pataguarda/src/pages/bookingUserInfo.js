import React from 'react';

import UserInfo from '../components/servicesClient/UserInfoBooking';
import ServiceCardBooking from '../components/servicesClient/ServiceCardClient';
import { useLocation } from 'react-router-dom';


function Booking() {


    const location = useLocation();
    console.log('estoy en Booking')
    const { service, user, idClient, startDate, finishDate } = location.state || {};
    console.log(user);
    return (
        <div style={{ backgroundColor: "#2E3B32", paddingBottom: "1%" }}>

            <UserInfo user={user} />
            <ServiceCardBooking title={user.name + ' ' + user.surname} service={service} idUser={idClient} startDate={startDate} finishDate={finishDate} />

        </div>
    );
}

export default Booking;