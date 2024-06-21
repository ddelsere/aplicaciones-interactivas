import React from 'react';
import '../services/serviceCard.css';
import { useState, useEffect } from 'react';
import CommentsModalProvider from '../comments/commentsProvider'; 

const ServiceCardBooking = ({ title, service}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedServiceId, setSelectedServiceId] = useState(null);

    
  
    const openModal = (selectedServiceId) => {
      setSelectedServiceId(selectedServiceId);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedServiceId(null);
    };

    const onSolicitar = () => {
        //TODO: que abra el modal de solicitar
    }

    return (
        <div className="service-card">
            <h3>{title}</h3>
            <div className="service-details">
                <div>
                    <p><strong>Categoria</strong></p>
                    <p>{service.category}</p>
                </div>
                <div>
                    <p><strong>Descripcion</strong></p>
                    <p>{service.description}</p>
                </div>
                <div>
                    <p><strong>Costo</strong></p>
                    <p>${service.price}</p>
                </div>
                <div>
                    <p><strong>Frecuencia</strong></p>
                    <p>{service.frequency}</p>
                </div>
                <div>
                    <p><strong>Calificacion</strong></p>
                    <p>{'★'.repeat(service.score)}</p>
                </div>
            </div>
            <div className="service-actions">
                <a href="#" onClick={() => openModal(service.id)} >Ver comentarios</a>
                <button onClick={onSolicitar}>SOLICITAR</button>
            </div>
            {isModalOpen && (
        <CommentsModalProvider
          idService={service.id}
          userType="P"
          onClose={closeModal}
        />
      )}
        </div>
    );
};

export default ServiceCardBooking;