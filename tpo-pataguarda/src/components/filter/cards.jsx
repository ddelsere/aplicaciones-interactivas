import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cards.css';
import foto_perfil from '../../assets/images/hombre1.jpg';

const Cards = ({ client, filtro }) => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  
  const startDate = filtro.startDate;
  const finishDate = filtro.finishDate;

  useEffect(() => {
    console.log(fetch)
    const fetchServices = async () => {
      try {
        const queryString = new URLSearchParams(filtro).toString();
        const response = await fetch(`http://localhost:8081/api/v1/services/?${queryString}`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }

        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchServices();
  }, [filtro]); // Add filtro as a dependency

  return (
    <div className="services-container-filter">
      {error && <p>{error}</p>}
      {services.length === 0 ? (
        <p>Loading...</p>
      ) : (
        services.map(({ service, user }) => (
          <div key={service.id} className="service-card-filter">
            <img className="profile-picture" src={foto_perfil} alt='perfil'></img>
            <h2>{`${user.name} ${user.surname}`}</h2>
            <p className="category">Categoria: <span>{service.category}</span></p>
            <div className="rating">
              {service.score ? '⭐'.repeat(service.score) : 'Sin calificación'}
            </div>
            <Link to={'/booking'} state={{ service, user, client, startDate, finishDate }} className="info-link">+ Info</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Cards;
