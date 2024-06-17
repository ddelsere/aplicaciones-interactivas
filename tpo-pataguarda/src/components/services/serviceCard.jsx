import React from 'react';
import './serviceCard.css';

const ServiceCard = ({ service, onEdit, onDelete }) => {
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
                    <p><strong>Duracion</strong></p>
                    <p>{service.duration}</p>
                </div>
            </div>
            <div className="service-actions">
                <a href="#">Ver comentarios</a>
                <a href="#" onClick={() => onDelete(service.id)}>Eliminar</a>
                <a href="#" onClick={() => onEdit(service)}>Modificar</a>
            </div>
        </div>
    );
};

export default ServiceCard;