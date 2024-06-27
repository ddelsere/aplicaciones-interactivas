import React from 'react';
import './MainContent.css';
import Content from './Content';
import foto_pri from '../assets/images/principal.jpg';

import foto_huellas from '../assets/images/huellas.png';

import foto_ayudar from '../assets/images/ayudar.png';
import foto_seguro from '../assets/images/seguro.png';
import foto_encaje from '../assets/images/encaje.png';
import Footer from './Footer';

function MainContent() {
  return (
    <main className="main-content">
      <div className="hero text-center">
        <img src={foto_pri} alt="Dog and woman" className="hero-image img-fluid"/>
        <Content />
   
      </div>
      <div className='pata'>
        <section className="contratar">
          <div className="overlay-content">
            <h2 className="text-center mb-4">¿Por qué Pataguarda?</h2>
            <div className="reasons">
              <div className='parte1'>
              <h3>Siempre aquí para ti</h3>
                <div className="reason1">
                  
                  <p>Cuando necesites paseos diarios, estés planeando un viaje, atrapado en el trabajo o simplemente quieras que tu mejor amigo tenga compañía; ofrecemos cuidado cualquier día, en cualquier momento.</p>
                  <img src={foto_huellas} alt="foto huellas" className="paws"/>
                  <img
                  className="ayuda-icon"
                  loading="lazy"
                  alt=""
                  src={foto_ayudar}
                />
                </div>
              <h3>La seguridad es lo primero</h3>
                <div className="reason2">
                  
                  <p>Todos nuestros cuidadores de mascotas pasan por una exhaustiva verificación de antecedentes, y nuestros servicios están completamente asegurados para tu tranquilidad.</p>
                  <img src={foto_huellas} alt="foto huellas" className="paws"/>
                  <img
                  className="ayuda-icon"
                  loading="lazy"
                  alt=""
                  src={foto_seguro}
                />
                </div>
                
              <h3>Encaja a la perfección contigo</h3>
                <div className="reason3">
                  
                  <p>Compare múltiples opciones al instante, reserve en línea de manera conveniente, reciba actualizaciones diarias con fotos y chat, y disfrute de un servicio de atención al cliente siempre disponible.</p>
                  <img src={foto_huellas} alt="foto huellas" className="paws"/>
                  <img
                  className="ayuda-icon"
                  loading="lazy"
                  alt=""
                  src={foto_encaje}
                />
                </div>
              </div>
              
            </div>
          </div>
        </section>
        
      </div>
        
    </main>
  );
}

export default MainContent;
