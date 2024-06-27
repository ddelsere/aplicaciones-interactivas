import React, { useState } from 'react';
import './FiltroServicios.css';
import Cards from './filter/cards';
import { useNavigate } from 'react-router-dom';

const FiltroServicios = ({ idClient, setFiltro }) => {
  const [pet, setPet] = useState('');
  const [category, setCategory] = useState('');
  const [zone, setZone] = useState('');
  const [frequency, setFrequency] = useState('');
  const [startDate, setStartDate] = useState('');
  const [finishDate, setFinishDate] = useState('');
  const [score, setScore] = useState(0);

  const handleSearch = () => {
    const newFiltro = {};

  if (pet) newFiltro.pet = pet;
  if (category) newFiltro.category = category;
  if (zone) newFiltro.zone = zone;
  if (frequency) newFiltro.frequency = frequency;
  if (startDate) newFiltro.startDate = startDate;
  if (finishDate) newFiltro.finishDate = finishDate;
  if (score) newFiltro.score = score;
    setFiltro(newFiltro);
  };

  return (

      <div className="container">
        <div className="form-group horizontal">
          <label>Estoy buscando servicio para mi:</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="pet" value="gato" onChange={(e) => setPet(e.target.value)} />
              Gato
            </label>
            <label>
              <input type="radio" name="pet" value="perro" onChange={(e) => setPet(e.target.value)} />
              Perro
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className='tipo'>¿Qué tipo de servicio buscas?</label>
          <div className="button-group">
            <button className={category === 'Paseo' ? 'selected' : ''} onClick={() => setCategory('Paseo')}>Paseos</button>
            <button className={category === 'Adiestramiento' ? 'selected' : ''} onClick={() => setCategory('Adiestramiento')}>Adiestramientos</button>
            <button className={category === 'Cuidado domestico' ? 'selected' : ''} onClick={() => setCategory('Cuidado domestico')}>Cuidado doméstico</button>
          </div>
        </div>
        <div className="form-group horizontal">
          <div className="zone-group">
            <label className=''>¿En qué zona?</label>
            <input className='zona' type="text" value={zone} onChange={(e) => setZone(e.target.value)} />
          </div>
          <div className="frequency-group">
            <label>¿Con qué frecuencia?</label>
            <div className="button-group">
              <button className={frequency === 'Unica' ? 'selected' : ''} onClick={() => setFrequency('Unica')}>Única</button>
              <button className={frequency === 'Diaria' ? 'selected' : ''} onClick={() => setFrequency('Diaria')}>Diaria</button>
              <button className={frequency === 'Semanal' ? 'selected' : ''} onClick={() => setFrequency('Semanal')}>Semanal</button>
              <button className={frequency === 'Mensual' ? 'selected' : ''} onClick={() => setFrequency('Mensual')}>Mensual</button>
            </div>
          </div>
        </div>
        <div className="form-group horizontal">
          <div className="date-group">
            <label>¿Para qué fecha?</label>
            <div className="date-inputs">
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              <span>→</span>
              <input type="date" value={finishDate} onChange={(e) => setFinishDate(e.target.value)} />
            </div>
          </div>
          <div className="rating-group">
            <label>¿Qué calificación buscas?</label>
            <div className="rating-buttons">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= score ? 'star selected' : 'star'}
                  onClick={() => setScore(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
        <button className="search-button" onClick={handleSearch}>Buscar</button>
      </div>
      
   
  );
};

export default FiltroServicios;
