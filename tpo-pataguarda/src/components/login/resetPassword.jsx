import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            if (password === repeatPassword) {
                const body = {email: email, password: password};

                const response = await fetch('http://localhost:8081/api/v1/login/reset-password', {
                    method: 'PUT',
                    headers: {
                        'Content-Type':'application/json'
                        
                    },
                    body: JSON.stringify(body),
                });

                
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                
                setMessage('Se ha cambiado la contraseña exitosamente');
                setTimeout(() => {
                    navigate('/login');
                  }, 3000); // Redirige al login despues de tres segundos
            } else {
                setError(error.message);
            }
        } catch (error) {
            setMessage("Las contraseñnas deben coincidir");
        }

    };

    return (
        <div>
            <Header/>
        <div className="login-container">
            <div>
                <h1>Bienvenido a Pataguarda</h1>
                <h2>Inicia Sesión</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="repeatPassword"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Ingresar</button>
                </form>
                {error && <p className="error">{error}</p>}
                {message && <p className="message">{message}</p>}
            </div>

        </div>
        </div>
    );
};

export default ResetPassword;