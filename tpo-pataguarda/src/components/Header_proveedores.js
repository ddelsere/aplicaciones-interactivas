import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useLocation } from 'react-router-dom';

function HeaderProvider({provider}) {
  
  // const location = useLocation();
  // const { provider } = location.state || {};
  console.log(provider)
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/" id="nombre">PATAGUARDA</Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarNav" aria-expanded={navbarVisible} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navbarVisible ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
              <Link className="nav-link" to="/services-provider" state={{ provider }}>MIS SERVICIOS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/provider-profile" state={{ provider }}>MI PERFIL</Link>
            </li>
           
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderProvider;
