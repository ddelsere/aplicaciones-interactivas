import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ServiceForm = ({ serviceId, onClose }) => {
    const [formState, setFormState] = useState({
        category: 'Paseo',
        price: 0,
        startDate: '',
        finishDate: '',
        frequency: 'Diario',
        zone: 'Caballito',
        species: 'Gato',
        description: '',
        message: '',
    });

    // const history = useHistory();

    useEffect(() => {
        if (serviceId) {
            const fetchService = async () => {
                try {
                    const response = await fetch(`/api/services/${serviceId}`);
                    const data = await response.json();
                    if (response.ok) {
                        setFormState({ ...data, message: '' });
                    } else {
                        console.error(`Error: ${data.error}`);
                    }
                } catch (error) {
                    console.error(`Error: ${error.message}`);
                }
            };

            fetchService();
        }
    }, [serviceId]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const method = serviceId ? 'PUT' : 'POST';
        const endpoint = serviceId ? `/api/services/${serviceId}` : '/api/services';
        const { message, ...body } = formState;

        try {
            const response = await fetch(endpoint, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await response.json();
            if (response.ok) {
                setFormState({
                    category: 'Paseo',
                    price: 0,
                    startDate: '',
                    finishDate: '',
                    frequency: 'Diario',
                    zone: 'Caballito',
                    species: 'Gato',
                    description: '',
                    message: '',
                });
                onClose();
                // history.push(`/services/${serviceId ? serviceId : data.id}`);
            } else {
                setFormState((prevState) => ({
                    ...prevState,
                    message: `Error: ${data.error}`,
                }));
            }
        } catch (error) {
            setFormState((prevState) => ({
                ...prevState,
                message: `Error: ${error.message}`,
            }));
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{serviceId ? 'Update Service' : 'Create Service'}</h2>
                <form onSubmit={handleSubmit}>
                    <select name="category" value={formState.category} onChange={handleChange}>
                        <option value="Paseo">Paseo</option>
                        <option value="Adiestramiento">Adiestramiento</option>
                        <option value="Cuidado domestico">Cuidado domestico</option>
                    </select>
                    <input type="number" name="price" placeholder="Price" value={formState.price} onChange={handleChange} />
                    <input type="date" name="startDate" placeholder="Start Date" value={formState.startDate} onChange={handleChange} />
                    <input type="date" name="finishDate" placeholder="Finish Date" value={formState.finishDate} onChange={handleChange} />
                    <select name="frequency" value={formState.frequency} onChange={handleChange}>
                        <option value="Diario">Diario</option>
                        <option value="Semanal">Semanal</option>
                        <option value="Mensual">Mensual</option>
                    </select>
                    <select name="zone" value={formState.zone} onChange={handleChange}>
                        <option value="Caballito">Caballito</option>
                        <option value="Palermo">Palermo</option>
                        <option value="Floresta">Floresta</option>
                        <option value="Belgrano">Belgrano</option>
                    </select>
                    <div>
                        <input type="radio" name="species" value="Gato" checked={formState.species === 'Gato'} onChange={handleChange} /> Gato
                        <input type="radio" name="species" value="Perro" checked={formState.species === 'Perro'} onChange={handleChange} /> Perro
                    </div>
                    <textarea name="description" placeholder="Description" value={formState.description} onChange={handleChange} />
                    <button type="submit">{serviceId ? 'Update Service' : 'Create Service'}</button>
                </form>
                <button onClick={onClose}>Close</button>
                <p>{formState.message}</p>
            </div>
        </div>
    );
};

export default ServiceForm;