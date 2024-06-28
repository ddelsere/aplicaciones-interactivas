import React, { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';

const RegisterClient = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        surname: '',
        address: '',
        phoneNumber: '',
        type: 'C'
    })
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const { message, ...body } = form;
        try {
            const response = await fetch(`http://localhost:8081/api/v1/users`, {
                method: 'POST', headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            if (response.ok) {
                setMessage("Se ha registrado exitosamente!");
                setTimeout(() => {
                    navigate('/login');
                  }, 3000); // Redirige al login despues de tres segundos
              } else {
                setMessage('Error al registrar el proveedor.');
              }


        } catch (error) {
            setError(error.message);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
    setForm((prevData) => ({...prevData, [name]: value }));
    };

    return (
        <div className="login-container">
            <div>
                <h1>Bienvenido a Pataguarda</h1>
                <h2>Inicia Sesión</h2>
                <form onSubmit={handleLogin}>
                <div className="input-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="surname">Apellido</label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            value={form.surname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phoneNumber">Telefono</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Domicilio</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Crear usuario</button>
                </form>
                {error && <p className="error">{error}</p>}
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    
    );
};

export default RegisterClient;