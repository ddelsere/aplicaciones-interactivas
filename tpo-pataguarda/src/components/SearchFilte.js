import PropTypes from "prop-types";
import "./SearchFilter.css";

const SearchFilter = ({ className = "" }) => {
  return (
    <div className={`search-filter ${className}`}>
      <div className="search-criteria">
        <img className="foto-incio-icon" alt="" src="/foto-incio@2x.png" />
        <div className="buscador">
          <div className="rectangulo-fondo" />
          <div className="search-input">
            <div className="search-prompt">
              <div className="service-prompt">
                <div className="estoy-buscando-servicio">{`Estoy buscando servicio para mi: `}</div>
              </div>
              <div className="service-type">
                <div className="que-tipo-de">
                  Que tipo de servicio buscabas?
                </div>
                <div className="boton-paseos">
                  <div className="paseos" />
                  <div className="paseos1">Paseos</div>
                </div>
              </div>
              <div className="location">
                <div className="en-que-zona">En que zona?</div>
                <div className="location-input" />
              </div>
              <div className="para-que-fecha">Para que fecha?</div>
            </div>
            <div className="pet-type">
              <div className="pet-icons">
                <div className="pet-selection">
                  <div className="pet-options">
                    <div className="pet-icon-shapes" />
                    <a className="gato">Gato</a>
                  </div>
                  <div className="pet-options1">
                    <div className="pet-options-child" />
                    <a className="perro">Perro</a>
                  </div>
                </div>
              </div>
              <div className="service-category">
                <div className="category-buttons">
                  <div className="boton-adiestramiento">
                    <div className="adiestramiento1" />
                    <div className="adiestramientos">Adiestramientos</div>
                  </div>
                  <div className="boton-cuidado">
                    <div className="boton-cuidado-child" />
                    <div className="cuidado-domestico1">Cuidado domestico</div>
                  </div>
                </div>
                <div className="frequency">
                  <div className="frequency-options">
                    <div className="con-que-frecuencia">{`Con que frecuencia? `}</div>
                    <div className="frequency-selection">
                      <div className="rectangle-parent">
                        <div className="rectangle-div" />
                        <div className="unica">Unica</div>
                      </div>
                      <div className="daily-option">
                        <div className="daily-selection">
                          <div className="daily-selection-child" />
                          <div className="diaria">Diaria</div>
                        </div>
                      </div>
                      <div className="frequency-values">
                        <div className="frequency-values-child" />
                        <div className="semanal">Semanal</div>
                      </div>
                      <div className="frequency-values1">
                        <div className="frequency-values-item" />
                        <div className="mensual">Mensual</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rating">
                  <div className="que-calificacion-buscabas">{`Que calificacion buscabas? `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rating-filter">
            <div className="rating-stars">
              <div className="rating-star-shapes" />
              <div className="rating-stars-inner">
                <img
                  className="arrow-icon"
                  loading="lazy"
                  alt=""
                  src="/arrow-1.svg"
                />
              </div>
              <div className="rating-star-shapes1" />
            </div>
            <div className="star-rating">
              <div className="two-star-rating">
                <img
                  className="two-star-shapes"
                  loading="lazy"
                  alt=""
                  src="/star-7.svg"
                />
                <img
                  className="two-star-shapes1"
                  loading="lazy"
                  alt=""
                  src="/star-8.svg"
                />
                <div className="three-star-rating">
                  <div className="three-star-shapes">
                    <img
                      className="three-star-icons"
                      loading="lazy"
                      alt=""
                      src="/star-9.svg"
                    />
                    <img
                      className="three-star-icons1"
                      loading="lazy"
                      alt=""
                      src="/star-10.svg"
                    />
                    <img
                      className="three-star-icons2"
                      loading="lazy"
                      alt=""
                      src="/star-11.svg"
                    />
                  </div>
                  <div className="search-button">
                    <div className="boton-buscar">
                      <div className="buscar" />
                      <b className="buscar1">{`BUSCAR `}</b>
                      <div className="search-icon">
                        <img
                          className="vector-icon"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchFilter.propTypes = {
  className: PropTypes.string,
};

export default SearchFilter;