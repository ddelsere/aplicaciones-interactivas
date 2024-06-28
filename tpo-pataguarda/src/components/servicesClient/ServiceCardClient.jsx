import React, { useState } from 'react';
import '../services/serviceCard.css';
import CommentsModalClient from '../comments/CommentsModalClient';
import FormBooking from './FormBooking';

const ServiceCardBooking = ({ idUser, title, service, startDate, finishDate, userType }) => {
    

    const [isModalBookingsOpen, setIsBookingCommentsOpen] = useState(false);
    const [selectedServiceId, setSelectedServiceId] = useState(null);
    const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);

    const onSolicitar = () => {
        setSelectedServiceId(selectedServiceId);
        setIsBookingCommentsOpen(true);
    }

    const closeSolicitar = () => {
        setIsBookingCommentsOpen(false);
        setSelectedServiceId(null);
    }

    const openCommentsModal = () => {
        setIsCommentsModalOpen(true);
    }

    const closeCommentsModal = () => {
        setIsCommentsModalOpen(false);
    }

    return (
        <div className="service-card-client">
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
                    <p>{'⭐'.repeat(service.score)}</p>
                </div>
            </div>
            <div className="service-actions-client">
                <span className="comments-link" onClick={openCommentsModal}>Ver comentarios</span>
                <button className='custom-button' onClick={onSolicitar}>SOLICITAR</button>
            </div>

            {isModalBookingsOpen && (
                <FormBooking 
                    service={service} 
                    idUser={idUser} 
                    onClose={closeSolicitar} 
                    startDate={startDate} 
                    finishDate={finishDate} 
                />
            )}

            {isCommentsModalOpen && (
                <CommentsModalClient 
                    idUser={idUser} 
                    idService={service.id} 
                    userType={'C'} 
                    onClose={closeCommentsModal} 
                />
            )}
        </div>
    );
};

export default ServiceCardBooking;