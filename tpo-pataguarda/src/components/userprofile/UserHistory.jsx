// src/components/UserHistory/UserHistory.js

import React from 'react';
// import './UserHistory.css';
import '../services/serviceCard.css'
import '../services/serviceList.css';
import { useState, useEffect } from 'react';

const UserHistory = ({ idUser }) => {
  const [reservas, setReservas] = useState([]);


  const fetchBookings = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/v1/bookings/${idUser}/${'C'}`);
      const data = await response.json();
      if (response.ok) {
        setReservas(data);
      } else {
        throw new Error('Failed to fetch bookings');
      }
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    if (idUser) {
      fetchBookings();
    }
  }, [idUser]);

  return (
    <div className="services-list">
      <h2>Tu Historial</h2>
      {reservas.map((reserva, index) => (
        <div key={index} className="service-card client">
          <div className="service-details">
            <div><strong>Tipo de servicio:</strong> {reserva.booking.Service.category}</div>
            <div><strong>Proveedor:</strong> {reserva.provider.name} {reserva.provider.surname}</div>
            <div><strong>Teléfono:</strong> {reserva.provider.phoneNumber}</div>
            <div><strong>Estado:</strong> {reserva.booking.status}</div>
            <div><strong>Fecha desde:</strong> {reserva.booking.startDate ? reserva.startDate : '-'}</div>
            <div><strong>Fecha hasta:</strong> {reserva.booking.finishDate ? reserva.finishDate : '-'}</div>
            <div><strong>Frecuencia:</strong> {reserva.booking.Service.frequency}</div>
            <div><strong>Email:</strong> {reserva.provider.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserHistory;
