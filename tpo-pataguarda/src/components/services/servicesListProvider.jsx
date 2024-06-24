import React, { useState, useEffect } from 'react';
import ServiceForm from './serviceForm';
import ServiceCard from './serviceCard';
import './serviceList.css';
import { useLocation } from 'react-router-dom';

const ServicesList = () => {

    const location = useLocation();  
    const { idProvider } = location.state || {};

    const [services, setServices] = useState([]);
    const [isModalCreateUpdateOpen, setIsModalCreateUpdateOpen] = useState(false);
    const [editingServiceId, setEditingServiceId] = useState(null);
    const [idProviderEditing, setIdProviderEditing] = useState(idProvider);


    const fetchServices = async (id) => {
        try {
            console.log(id)
            const response = await fetch(`http://localhost:8081/api/v1/services/${id}`);
            const data = await response.json();
            console.log(data);
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
        fetchServices(idProviderEditing);
    }, []);

    const openModalCreateUpdate = (service = null) => {
        setEditingServiceId(service);
        setIsModalCreateUpdateOpen(true);
        setIdProviderEditing(idProvider);
    };

    const closeModalCreateUpdate = () => {
        setIsModalCreateUpdateOpen(false);
        setEditingServiceId(null);
        fetchServices(idProviderEditing);
        setIdProviderEditing(null);
    };



    const deleteService = async (id) => {
        const endpoint = `http://localhost:8081/api/v1/services/${id}`
        const response = await fetch(endpoint, {
            method: 'DELETE',
        });

        const data = await response.json();
        if (response.ok) {
            fetchServices(idProvider);
        }
    }

    return (
        <div className="services-list">
            <h2>SERVICIOS ACTIVOS</h2>
            <button className="add-service-button" onClick={() => openModalCreateUpdate()}>AGREGAR NUEVO SERVICIO</button>
            <div className="services-container">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} onEdit={openModalCreateUpdate} onDelete={deleteService}  />
                    
                ))}
            </div>
            {isModalCreateUpdateOpen && <ServiceForm idProvider={idProvider} service={editingServiceId} onClose={closeModalCreateUpdate} />}
            
        </div>
    );
};

export default ServicesList;