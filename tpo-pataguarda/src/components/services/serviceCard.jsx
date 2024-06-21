import React from 'react';
import './serviceCard.css';
import { useState } from 'react';
import CommentsModalProvider from '../comments/commentsProvider'; 

const ServiceCard = ({ service, onEdit, onDelete }) => {

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
                <a href="#" onClick={() => openModal(service.id)} >Ver comentarios</a>
                <a href="#" onClick={() => onDelete(service.id)}>Eliminar</a>
                <a href="#" onClick={() => onEdit(service)}>Modificar</a>
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