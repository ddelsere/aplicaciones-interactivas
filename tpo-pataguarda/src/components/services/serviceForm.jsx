import React, { useState} from 'react';
import './serviceForm.css';

const ServiceForm = ({ idProvider, service, onClose }) => {

    const [formState, setFormState] = useState(service ? 
        {
            category: 'Paseo',
            price: service.price,
            startDate: service.startDate,
            finishDate: service.finishDate,
            frequency: service.frequency,
            zone: service.zone,
            species: service.species,
            description: service.description,
            idProvider: idProvider,
            message: '',
        }
         : {
        category: 'Paseo',
        price: 0,
        startDate: '',
        finishDate: '',
        frequency: 'Diario',
        zone: 'Caballito',
        species: 'Gato',
        description: '',
        idProvider: idProvider,
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const method = service ? 'PUT' : 'POST';
        const endpoint = service ? `http://localhost:8081/api/v1/services/${service.id}` : 'http://localhost:8081/api/v1/services/';
        const { message, ...body } = formState;

        try {
            console.log(formState);
            const response = await fetch(endpoint, {
                method,
                headers: {
                    'Content-Type':'application/json'                   
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
                    idProvider: idProvider,
                    message: '',
                });
                onClose();
            } else {
                setFormState((prevState) => ({
                    ...prevState,
                    message: `Error: ${data.error}`,
                }));
            }
            onClose();
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
        <button type="button" onClick={onClose}>×</button>
        <h2>{service ? 'Modificar servicio' : 'Nuevo servicio'}</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="category">Categoria</label>
                <select name="category" value={formState.category} onChange={handleChange}>
                    <option value="">Seleccione una categoria</option>
                    <option value="Paseo">Paseo</option>
                    <option value="Adiestramiento">Adiestramiento</option>
                    <option value="Cuidado domestico">Cuidado domestico</option>
                </select>
            </div>
            <div>
                <label htmlFor="price">Costo</label>
                <input type="number" name="price" placeholder="Costo" value={formState.price} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="startDate">Fecha inicio</label>
                <input type="date" name="startDate" placeholder="Fecha inicio" value={formState.startDate} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="finishDate">Fecha fin</label>
                <input type="date" name="finishDate" placeholder="Fecha fin" value={formState.finishDate} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="frequency">Frecuencia</label>
                <select name="frequency" value={formState.frequency} onChange={handleChange}>
                    <option value="">Seleccione la frecuencia</option>
                    <option value="Diario">Diaria</option>
                    <option value="Semanal">Semanal</option>
                    <option value="Mensual">Mensual</option>
                    <option value="Unica">Unica</option>
                </select>
            </div>
            <div>
                <label htmlFor="zone">Zona</label>
                <select name="zone" value={formState.zone} onChange={handleChange}>
                    <option value="">Seleccione la zona</option>
                    <option value="Caballito">Caballito</option>
                    <option value="Palermo">Palermo</option>
                    <option value="Floresta">Floresta</option>
                    <option value="Belgrano">Belgrano</option>
                </select>
            </div>
            <div className="full-width">
                <label>Especie</label>
                <div className="radio-group">
                    <input type="radio" name="species" value="Gato" checked={formState.species === 'Gato'} onChange={handleChange} /> Gato
                    <input type="radio" name="species" value="Perro" checked={formState.species === 'Perro'} onChange={handleChange} /> Perro
                </div>
            </div>
            <div className="full-width">
                <label htmlFor="description">Descripcion</label>
                <textarea name="description" placeholder="Descripcion" value={formState.description} onChange={handleChange} />
            </div>
            <button type="submit">{service ? 'Modificar servicicio' : 'Agregar'}</button>
        </form>
        <p>{formState.message}</p>
    </div>
</div>


    );
};

export default ServiceForm;