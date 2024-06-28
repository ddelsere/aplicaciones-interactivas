import React, { useState, useEffect } from 'react';
import ServiceForm from './serviceForm';
import ServiceCard from './serviceCard';
import './serviceList.css';
import { useLocation, useNavigate } from 'react-router-dom';

const ServicesList = () => {
    const location = useLocation();
    const navigate = useNavigate();
  console.log(location.state.provider.id)
    const [idProvider, setIdProvider] = useState(location.state.provider?.id || null);
  
    const [services, setServices] = useState([]);
    const [isModalCreateUpdateOpen, setIsModalCreateUpdateOpen] = useState(false);
    const [editingServiceId, setEditingServiceId] = useState(null);
  
    const fetchServices = async () => {
      if (!idProvider) {
        console.error("idProvider is undefined");
        return;
      }
  
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
      if (idProvider) {
        fetchServices();
      }
    }, [idProvider]);
  
    const openModalCreateUpdate = (service = null) => {
      setEditingServiceId(service);
      setIsModalCreateUpdateOpen(true);
    };
  
    const closeModalCreateUpdate = () => {
      setIsModalCreateUpdateOpen(false);
      setEditingServiceId(null);
      fetchServices();
    };
  
    const deleteService = async (id) => {
      try {
        const endpoint = `http://localhost:8081/api/v1/services/${id}`;
        const response = await fetch(endpoint, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          fetchServices();
        } else {
          const data = await response.json();
          console.error(`Error: ${data.error}`);
        }
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    };
  

  return (
    <div className="services-list">
      <h2>SERVICIOS ACTIVOS</h2>
      <button className="add-service-button" onClick={() => openModalCreateUpdate()}>AGREGAR NUEVO SERVICIO</button>
      <div className="services-container" >
        { services.map((service) => (
          <ServiceCard key={service.id} service={service} onEdit={openModalCreateUpdate} onDelete={deleteService} />
        ))}
      </div>
      {isModalCreateUpdateOpen && <ServiceForm idProvider={idProvider} service={editingServiceId} onClose={closeModalCreateUpdate} />}
    </div>
  );
};

export default ServicesList;
