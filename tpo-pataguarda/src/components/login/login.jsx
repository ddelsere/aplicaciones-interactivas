import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8081/api/v1/login?email=${email}&password=${password}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Login failed');
      }
      console.log(data);
      setMessage(`Welcome, ${data.name}!`);
      if(data.type === "P"){
        //redirect to profile
      }else{
        //redirect to home, ver como pasarle la data de que se logueo como cliente para qe le aparezca el header de clientes
            navigate('/');
      }

    } catch (error) {
      setError(error.message);
    }
  };

  return (
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
          <div className="forgot-password">
          <Link to="/reset-password">Olvide mi contraseña</Link>
          </div>
          <button type="submit">Ingresar</button>
        </form>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
      </div>
      
    </div>
  );
};

export default Login;