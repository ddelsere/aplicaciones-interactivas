import React, { useState } from 'react';
import './Header.css';


function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#" id="nombre">PATAGUARDA</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="../pages/servicios">¡ÚNETE AL EQUIPO!</a>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link cuenta-btn" onClick={toggleDropdown}>
                MI CUENTA <span className="arrow-down">&#9662;</span>
              </button>
              <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
                <a href="#">Iniciar sesión</a>
                <a href="#">Registrarse</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
