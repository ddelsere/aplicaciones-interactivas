// src/components/AddPet/AddPet.js
import React, { useState } from 'react';
import './AddPet.css';

const AddPet = ({ onClose, idUser }) => {
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            name: petName,
            species: petType,
            idUser: idUser
        };

        const response = await fetch('http://localhost:8081/api/v1/pets/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (response.ok) {
            const newPet = await response.json();

            const petsResponse = await fetch(`http://localhost:8081/api/v1/pets/${idUser}`);
            const updatedPets = await petsResponse.json();

            if (petsResponse.ok) {
                onClose(updatedPets); 
            } else {
                console.error("Error fetching updated pets");
            }
        } else {
            console.error("Error adding pet");
        }
    };

    return (
        <div className="add-pet-modal">
            <h2>Agregar Mascota</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre de la Mascota:
                    <input
                        type="text"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        required
                    />
                </label>
                <fieldset className="pet-type-fieldset">
                    <legend>Tipo de Mascota:</legend>
                    <label>
                        <input
                            type="radio"
                            value="Perro"
                            checked={petType === 'Perro'}
                            onChange={(e) => setPetType(e.target.value)}
                        />
                        Perro
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Gato"
                            checked={petType === 'Gato'}
                            onChange={(e) => setPetType(e.target.value)}
                        />
                        Gato
                    </label>
                </fieldset>
                <div className="modal-buttons">
                    <button type="submit">Agregar</button>
                    <button type="button" onClick={() => onClose()}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default AddPet;
