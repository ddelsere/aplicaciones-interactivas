import React from 'react';
import '../components/servicesClient/userInfo.css';
import UserInfo from '../components/servicesClient/UserInfoBooking';
import ServiceCardBooking from '../components/servicesClient/ServiceCardClient';
import { useLocation } from 'react-router-dom';
import HeaderClientes from '../components/Header_clientes';


function Booking() {


    const location = useLocation();  
    const { service, user, client, startDate, finishDate } = location.state || {};
    console.log(client)
    
    return (
        <div>
        <HeaderClientes user={client} />
        <div className='booking-user-info' style={{ backgroundColor: "#203629", paddingBottom: "1%" }}>

            <UserInfo user={user} />
            <ServiceCardBooking title={user.name + ' ' + user.surname} service={service} idUser={client.id} startDate={startDate} finishDate={finishDate} />

        </div>

        </div>
    );
}

export default Booking;