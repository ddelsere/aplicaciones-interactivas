import React, { useState } from 'react';
import '../services/serviceForm.css';

const FormBooking = ({ idUser, service, onClose, startDate, finishDate }) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        contactHours: '',
        message: '',
        startDate: startDate,
        finishDate: finishDate,
        idUser: idUser.idClient,
        idService: service.id,
        idProvider: service.idProvider
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

        const endpoint = `http://localhost:8081/api/v1/bookings/`;

        try {
            console.log(formState);
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState),
            });

            const data = await response.json();
            if (response.ok) {
                setFormState({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    contactHours: '',
                    message: '',
                    idUser: idUser,
                    idService: service.id,
                    idProvider: service.idProvider
                });
                onClose();
                //TODO: redirect al profile para que vea sus reservas
            } else {
                setFormState((prevState) => ({
                    ...prevState,
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
                <h2>Complete sus datos</h2>
                <form onSubmit={handleSubmit} style={{gap: "3em"}}>
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" value={formState.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="mail@example.com" value={formState.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Teléfono</label>
                        <input type="text" name="phoneNumber" placeholder="1145456767" value={formState.phoneNumber} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="contactHours">Franja horaria de contacto</label>
                        <input type="text" name="contactHours" value={formState.contactHours} onChange={handleChange} />
                    </div>
                    <div className="full-width">
                        <label htmlFor="message">Motivo por el cual esta interesado</label>
                        <textarea name="message" placeholder="Agregue un dato o comentario para que el cuidado lo tenga en cuenta" value={formState.message} onChange={handleChange} />
                    </div>
                    <button type="submit">SOLICITAR!</button>
                </form>
            </div>
        </div>


    );
};

export default FormBooking;