import React, { useState } from 'react';
import '../pages/servicios.css';
import foto_ani from '../assets/images/perro-gato.png';
import foto_flexi from '../assets/images/flexibilidad.jpg';
import foto_pasion from '../assets/images/pasion.jpg';
import foto_dinero from '../assets/images/dinero.jpg';
import Header from '../components/Header';


function Servicios() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
    email: '',
    address: '',
    password: '',
    type: 'P',
    fotoPerfil: null,
  });
  const [message, setMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (event) => {
    setFormData((prevData) => ({ ...prevData, fotoPerfil: event.target.files[0] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await fetch('http://localhost:8081/api/v1/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Se ha registrado exitosamente!")
      } else {
        setMessage('Error al registrar el proveedor.')
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    }
  };

  return (
    <div>
      <Header />
      <main className="main-container">
        <section className="form-section1">
          <h1>¡Conviértete en parte de nuestra manada!</h1>

          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-content">
              <div className="form-column1">
                <div className='nombre'>
                  <label for="nombre">Nombre:</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className='apellido'>
                  <label for="nombre">Apellido:</label>
                  <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
                </div>

                <div className='telefono'>
                  <label for="telefono">Teléfono:</label>
                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </div>




                
              </div>
              <div className="form-column2">
                <div className='correoElectronico'>
                  <label for="correoElectronico">Correo Electrónico:</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className='domicilio'>
                  <label for="domicilio">Domicilio:</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </div>

                <div className='contraseña'>
                  <label for="contraseña">Contraseña:</label>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                
                <button type="submit">¡Vamos allá!</button>
              </div>
            </div>

            {message ? <p>{message}</p> : ''}
          </form>
        </section>

        <section className="intro">
          <div className="intro-content">

            <p className="intro-text">
              “Embarcate en una experiencia única: ofrecer tus servicios con Pataguarda es una manera divertida y flexible de ganar dinero mientras compartes tu tiempo con adorables mascotas.”
            </p>
            <img src={foto_ani} alt="Mascotas" className="intro-image" />
          </div>
        </section>

        <section className="benefits">
          <h2>¿Por qué trabajar en Pataguarda?</h2>
          <div className="benefits-container">
            <div className="benefit">
              <img src={foto_flexi} alt="Flexibilidad Horaria" className="benefit-icon" />
              <h3>Flexibilidad Horaria</h3>
              <p>Tienes el control total sobre tu horario de trabajo. ¡Toda la libertad de trabajar en los momentos que mejor se adapten a tu estilo de vida!</p>
            </div>
            <div className="benefit">
              <img src={foto_pasion} alt="Pasión por los Animales" className="benefit-icon" />
              <h3>Pasión por los Animales</h3>
              <p>Te brinda la oportunidad de pasar tiempo con mascotas y brindarles el mejor cuidado. ¡Es un trabajo gratificante y satisfactorio!</p>
            </div>
            <div className="benefit">
              <img src={foto_dinero} alt="Ingresos Adicionales" className="benefit-icon" />
              <h3>Ingresos Adicionales</h3>
              <p>Es una forma satisfactoria y divertida de generar ingresos adicionales, haciendo lo que amas: pasar tiempo con adorables mascotas.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Servicios;