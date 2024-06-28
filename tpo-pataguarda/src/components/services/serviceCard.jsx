import React from 'react';
import './serviceCard.css';
import { useState } from 'react';
import CommentsModalProvider from '../comments/commentsProvider'; 

const ServiceCard = ({ service, onEdit, onDelete }) => {
    console.log(service)

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

    return (
        <div className="service-card">
            <h3>SERVICIOS ACTIVOS</h3>
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
            <span className="comments-link" onClick={() => openModal(service.id)}>Ver comentarios</span>
            <span className="comments-link" onClick={() => onDelete(service.id)}>Eliminar</span>
            <span className="comments-link" onClick={() => onEdit(service)}>Modificar</span>
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

export default ServiceCard;