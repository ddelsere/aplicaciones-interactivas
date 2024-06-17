import React, { useState, useEffect } from 'react';
import ServiceForm from './ServiceForm';

const ServicesList = () => {
    const [services, setServices] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingServiceId, setEditingServiceId] = useState(null);

    const fetchServices = async () => {
        try {
            const response = await fetch('/api/services');
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

    const openModal = (serviceId = null) => {
        setEditingServiceId(serviceId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingServiceId(null);
        fetchServices();
    };

    return (
        <div>
            <h2>Services List</h2>
            <button onClick={() => openModal()}>Create Service</button>
            <ul>
                {services.map((service) => (
                    <li key={service.id}>
                        {service.name} - {service.description}
                        <button onClick={() => openModal(service.id)}>Edit</button>
                    </li>
                ))}
            </ul>
            {isModalOpen && <ServiceForm serviceId={editingServiceId} onClose={closeModal} />}
        </div>
    );
};

export default ServicesList;