import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/" id="nombre">PATAGUARDA</Link>
        <button className="navbar-toggler" type="button" onClick={toggleDropdown} aria-controls="navbarNav" aria-expanded={dropdownVisible} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${dropdownVisible ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/pages/servicios">¡ÚNETE AL EQUIPO!</Link>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link cuenta-btn" onClick={toggleDropdown}>
                MI CUENTA <span className="arrow-down">&#9662;</span>
              </button>
              <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
                <Link to="/login">Iniciar sesión</Link>
                <Link to="/register">Registrarse</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
