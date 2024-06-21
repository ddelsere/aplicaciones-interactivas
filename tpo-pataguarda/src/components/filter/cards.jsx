import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cards.css';

const ServicesFilter = () => {
    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            const filter = {
                // price: 50000,
                // frequency: "Diario",
                // zone: "Caballito",
                // score: null,
                // species: "PERRO",
                category: "Paseo",
                // startDate: "06-13-2024",
                // finishDate: "07-30-2024"
            };

            try {
                const queryString = new URLSearchParams(filter).toString();
                const response = await fetch(`http://localhost:8081/api/v1/services/?${queryString}`, {
                    method: 'GET'
                    
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch services');
                }

                const data = await response.json();
                // console.log(data);
                setServices(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchServices();
    }, []);

    return (
        <div className="services-container">
            {error && <p>{error}</p>}
            {services.length === 0 ? (
                <p>Loading...</p>
            ) : (
                services.map(({ service, user }) => (
                    <div key={service.id} className="service-card">
                        <div className="profile-picture"></div>
                        <h2>{`${user.name} ${user.surname}`}</h2>
                        <p className="category">Categoria: <span>{service.category}</span></p>
                        <div className="rating">
                            {'⭐'.repeat(service.score)}
                        </div>
                        <Link to={`/booking?serviceId=${service.id}&userId=${user.id}`}  className="info-link">+ Info</Link>
                    </div>
                ))
            )}
        </div>
    );
};

export default ServicesFilter;
