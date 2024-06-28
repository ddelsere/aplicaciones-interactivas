import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleNavbar = () => {
    setNavbarCollapsed(!navbarCollapsed);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link className="navbar-brand" to="/" id="nombre">PATAGUARDA</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar} 
          aria-controls="navbarNav" 
          aria-expanded={navbarCollapsed} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>
        <div className={`navbar-collapse ${navbarCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/pages/servicios">¡ÚNETE AL EQUIPO!</Link>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link cuenta-btn" onClick={toggleDropdown}>
                MI CUENTA <span className="arrow-down">&#9662;</span>
              </button>
              <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
                <Link to="/login">Iniciar sesión</Link>
                <Link to="/register-client">Registrarse</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
