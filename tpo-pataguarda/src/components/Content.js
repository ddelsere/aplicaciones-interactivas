import { useCallback } from "react";
import PropTypes from "prop-types";
import "./Content.css";
import foto_paseo from '../assets/images/paseo.png';
import foto_silba from '../assets/images/silbato.png';
import foto_cuidar from '../assets/images/cuidado.png'
const Content = ({ className = "" }) => {
  const onDoitButtonContainerClick = useCallback(() => {
    // Please sync "INCIAR SESION" to the project
  }, []);

  return (
    <section className={`content ${className}`}>
      <div className="component-2">
        <div className="component-2-child" />
        <div className="component-2-item" />
        <div className="service-description">
          <div className="service-options">
            <div className="paseos">
              <img
                className="options-divider-icon"
                loading="lazy"
                alt=""
                src={foto_paseo}
              />
              <i className="paseos1">Paseos</i>
            </div>
            <div className="adiestramiento">
              <img
                className="adiestramiento-child"
                alt=""
                src={foto_silba}
              />
              <i className="adiestramiento1">Adiestramiento</i>
            </div>
            <div className="care-container">
              <div className="cuidado">
                <img
                  className="visits-image-icon"
                  alt=""
                  src={foto_cuidar}
                />
                <i className="visitas">Visitas a Domicilio</i>
              </div>
            </div>
          </div>
        </div>
        <div className="choice-container">
          <i className="elige-entre-paseos">
            Elige entre paseos de 20, 30 o 60 minutos. Nuestros paseadores
            expertos garantizan que tu mascota reciba el ejercicio necesario.
            Disfruta la tranquilidad sabiendo que tu amigo peludo está feliz y
            activo.
          </i>
          <div className="button-container1">
            <div className="doit-button" onClick={onDoitButtonContainerClick}>
              <i className="hagmoslo">¡Hagámoslo!</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;