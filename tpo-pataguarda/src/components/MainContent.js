import React from 'react';
import './MainContent.css';
import Content from './Content';
import foto_pri from '../assets/images/principal.jpg';

import foto_huellas from '../assets/images/huellas.png';
import foto_vector from '../assets/images/vector.png';
import foto_ayudar from '../assets/images/ayudar.png';
import foto_seguro from '../assets/images/seguro.png';
import foto_encaje from '../assets/images/encaje.png';

function MainContent() {
  return (
    <main className="main-content">
      <div className="hero text-center">
        <img src={foto_pri} alt="Dog and woman" className="hero-image img-fluid"/>
        <Content />
       
      </div>
      <section className="contratar">
        <img className="inicio-pataguarda-child" alt="" src={foto_vector} />
        <div className="overlay-content">
          <h2 className="text-center mb-4">¿Por qué Pataguarda?</h2>
          <div className="reasons">
            <div className='parte1'>
              <div className="reason 1">
                <h3>Siempre aquí para ti</h3>
                <p>Cuando necesites paseos diarios, estés planeando un viaje, atrapado en el trabajo o simplemente quieras que tu mejor amigo tenga compañía; ofrecemos cuidado cualquier día, en cualquier momento.</p>
              </div>
              <div className="reason 2">
                <h3>La seguridad es lo primero</h3>
                <p>Todos nuestros cuidadores de mascotas pasan por una exhaustiva verificación de antecedentes, y nuestros servicios están completamente asegurados para tu tranquilidad.</p>
              </div>
              <div className="reason 3">
                <h3>Encaja a la perfección contigo</h3>
                <p>Compara múltiples opciones al instante, reserve en línea de manera conveniente, reciba actualizaciones diarias con fotos y chat, y disfrute de un servicio de atención al cliente siempre disponible.</p>
              </div>
            </div>
            <div className='parte2'>
              <img src={foto_huellas} alt="foto huellas" className="paws"/>
              <img src={foto_huellas} alt="foto huellas" className="paws"/>
              <img src={foto_huellas} alt="foto huellas" className="paws"/>
              <img src={foto_huellas} alt="foto huellas" className="paws"/>
            </div>
            <div className='parte3'> 
              <img
                className="ayuda-icon"
                loading="lazy"
                alt=""
                src={foto_ayudar}
              />

              <img
                className="segu-icon"
                loading="lazy"
                alt=""
                src={foto_seguro}
              />

              <img
                className="enca-icon"
                loading="lazy"
                alt=""
                src={foto_encaje}
              />
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
