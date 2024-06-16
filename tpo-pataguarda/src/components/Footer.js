import React from 'react';
import facebookIcon from '../assets/images/facebook.png';
import instagramIcon from '../assets/images/instagram.png';
import twitterIcon from '../assets/images/twitter.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Pataguarda. Todos los derechos reservados.</p>
      <div className="redes">
        <img src={facebookIcon} alt="Facebook" className="social-icon"/>
        <img src={instagramIcon} alt="Instagram" className="social-icon"/>
        <img src={twitterIcon} alt="Twitter" className="social-icon"/>
      </div>
    </footer>
  );
}

export default Footer;
