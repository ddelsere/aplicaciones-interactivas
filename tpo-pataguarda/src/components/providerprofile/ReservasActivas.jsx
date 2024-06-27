import React, { useState, useEffect } from 'react';
import './ReservasActivas.css';
import '../services/serviceCard.css'
import '../services/serviceList.css';

const ReservasActivas = ({ idProvider }) => {
  const [reservas, setReservas] = useState([]);
  const [selectedReserva, setSelectedReserva] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  const fetchBookings = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/v1/bookings/${idProvider}/${'P'}`);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setReservas(data);
      } else {
        throw new Error('Failed to fetch bookings');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch bookings when the component mounts
  useEffect(() => {
    console.log('fetch');
    console.log(idProvider);
    if (idProvider) {
      fetchBookings();
    }
  }, [idProvider]);

  const handleModificarEstado = (reserva) => {
    setSelectedReserva(reserva);
    setNewStatus(reserva.status); 
  };

  const handleEstadoChange = (e) => {
    setNewStatus(e.target.value); 
  };

  const handleSaveStatus = async () => {
    const updatedReserva = {
      ...selectedReserva,
      status: newStatus
    };

    try {
      const response = await fetch(`http://localhost:8081/api/v1/bookings/${selectedReserva.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedReserva)
      });

      if (response.ok) {
        setReservas(reservas.map(res => (res.id === selectedReserva.id ? updatedReserva : res)));
        setSelectedReserva(null);
      } else {
        console.error('Error updating booking');
      }
    } catch (error) {
      console.error('Error updating booking', error);
    }
  };

  return (
    <div className="services-list">
      {reservas.map((reserva, index) => (
        <div key={index} className="service-card client">
          <div className="service-details">
          <div><strong>Tipo de servicio:</strong> {reserva.Service.category}</div>
          <div><strong>Cliente:</strong> {reserva.User.name} {reserva.User.surname}</div>
          <div><strong>Teléfono:</strong> {reserva.phoneNumber}</div>
          <div><strong>Estado:</strong> {reserva.status}  <span className="estado-modificar" onClick={() => handleModificarEstado(reserva)}>Modificar</span></div>
          <div><strong>Fecha desde:</strong> {reserva.startDate ? reserva.startDate : '-'}</div>
          <div><strong>Fecha hasta:</strong> {reserva.finishDate ? reserva.finishDate : '-'}</div>
          <div><strong>Frecuencia:</strong> {reserva.Service.frequency}</div>
          <div><strong>Email:</strong> {reserva.email}</div>
          <div><strong>Franja horaria:</strong> {reserva.contactHours}</div>
          <div><strong>Mensaje:</strong> {reserva.message}</div>
        </div>
        </div>
      ))}

      {selectedReserva && (
        <div className="estado-modal">
          <label>Estado reserva</label>
          <select value={newStatus} onChange={handleEstadoChange}>
            <option value="PENDIENTE">Pendiente</option>
            <option value="ACEPTADA">Aceptada</option>
            <option value="RECHAZADA">Rechazada</option>
            <option value="FINALIZADA">Finalizada</option>
          </select>
          <button onClick={handleSaveStatus}>Guardar</button>
          <button onClick={() => setSelectedReserva(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default ReservasActivas;
