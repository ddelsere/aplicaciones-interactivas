import React, { useState, useEffect } from 'react';
import ServiceForm from './serviceForm';
import ServiceCard from './serviceCard';
import './serviceList.css';

const ServicesList = ({idProvider}) => {
    const [services, setServices] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingServiceId, setEditingServiceId] = useState(null);

    const fetchServices = async () => {
        try {
            const response = await fetch(`http://localhost:8081/api/v1/services/${idProvider}`);
            const data = await response.json();
            if (response.ok) {
                setServices(data);
            } else {
                console.error(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const openModal = (service = null) => {
        console.log(service)
        setEditingServiceId(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingServiceId(null);
        fetchServices();
    };

    const deleteService = async (id) => {
        const endpoint = `http://localhost:8081/api/v1/services/${id}`
        const response = await fetch(endpoint, {
            method: 'DELETE',
        });

        const data = await response.json();
        if (response.ok) {
            //lo elimino de la lista
            fetchServices();
        }
    }

    return (
        <div className="services-list">
            <h2>SERVICIOS ACTIVOS</h2>
            <button className="add-service-button" onClick={() => openModal()}>AGREGAR NUEVO SERVICIO</button>
            <div className="services-container">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} onEdit={openModal} onDelete={deleteService} />
                ))}
            </div>
            {isModalOpen && <ServiceForm idProvider={idProvider} service={editingServiceId} onClose={closeModal} />}
        </div>
    );
};

export default ServicesList;