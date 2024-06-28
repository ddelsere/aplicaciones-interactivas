import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Content.css';
import foto_paseo from '../assets/images/paseo.png';
import foto_silba from '../assets/images/silbato.png';
import foto_cuidar from '../assets/images/cuidado.png';

const descriptions = {
  paseo: 'Elige entre paseos de 20, 30 o 60 minutos. Nuestros paseadores expertos garantizan que tu mascota reciba el ejercicio necesario. Disfruta la tranquilidad sabiendo que tu amigo peludo está feliz y activo.',
  adiestramiento: 'Ofrecemos adiestramiento profesional para perros y gatos. Utilizando técnicas efectivas y compasivas, te ayudarán a establecer una conexión más fuerte con tu mascota y a resolver cualquier comportamiento no deseado.',
  cuidado: '¿Necesitas cuidado para tu mascota mientras estás fuera? ¡Nosotros nos encargamos! Ofrecemos visitas a domicilio para el cuidado de mascotas, proporcionando a tu amigo peludo la atención y el cariño que se merece en la comodidad de tu hogar.'
};

const Content = ({ className = "" }) => {
  const [active, setActive] = useState('paseo');
  const navigate = useNavigate();

  const onDoitButtonContainerClick = useCallback(() => {
    navigate('/login' )
  }, []);

  return (
    <div className='contenedor'>
      <div className="parte-superior">
        <div className={`parte parte-superior-1 ${active === 'paseo' ? 'active' : ''}`} onClick={() => setActive('paseo')}>
          <img src={foto_paseo} alt="Paseo" />
          <span>Paseo</span> 
        </div>
        <div className={`parte parte-superior-2 ${active === 'adiestramiento' ? 'active' : ''}`} onClick={() => setActive('adiestramiento')}>
          <img src={foto_silba} alt="Adiestramiento" />
          <span>Adiestramiento</span>
        </div>
        <div className={`parte parte-superior-3 ${active === 'cuidado' ? 'active' : ''}`} onClick={() => setActive('cuidado')}>
          <img src={foto_cuidar} alt="Cuidado" />
          <span>Cuidado Domestico</span> 
        </div>
      </div>
      <div className="parte parte-inferior">
        <div className="parte-inferior-izquierda">{descriptions[active]}</div>
        <div className="parte-inferior-derecha">
          <button onClick={onDoitButtonContainerClick}>¡Hagámoslo!</button>
        </div>
      </div>
    </div>
  );
}

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
