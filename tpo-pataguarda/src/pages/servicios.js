import React, { useState } from 'react';
import '../pages/servicios.css';
import foto_ani from '../assets/images/perro-gato.png';
import foto_flexi from '../assets/images/flexibilidad.jpg';
import foto_pasion from '../assets/images/pasion.jpg';
import foto_dinero from '../assets/images/dinero.jpg';


function Servicios() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    correoElectronico: '',
    domicilio: '',
    contraseña: '',
    fotoPerfil: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({...prevData, [name]: value }));
  };

  const handleFileChange = (event) => {
    setFormData((prevData) => ({...prevData, fotoPerfil: event.target.files[0] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Aquí puedes enviar los datos del formulario a tu backend
    // utilizando fetch o axios.
    // Por ejemplo:
    try {
      const response = await fetch('/api/providers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Maneja el éxito de la solicitud.
        console.log('Proveedor registrado exitosamente!');
        // Puedes redirigir al usuario a otra página o mostrar un mensaje de éxito.
      } else {
        // Maneja el error de la solicitud.
        console.error('Error al registrar proveedor:', response.status);
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    }
  };

  return (
    <main className="main-container">
      <section className="form-section1">
        <h1>¡Conviértete en parte de nuestra manada!</h1>
        
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-content">
            <div className="form-column1">
              <div className='nombre'>
                <label for="nombre">Nombre:</label>
                <input type="text"  name="nombre" value={formData.nombre} onChange={handleChange} required />
              </div>
              <div className='apellido'>
                <label for="nombre">Apellido:</label>
                <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
              </div>
              
              <div className='telefono'>
                <label for="telefono">Teléfono:</label>
                <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
              </div>

              <div className='correoElectronico'>
                <label for="correoElectronico">Correo Electrónico:</label>
                <input type="email" name="correoElectronico" value={formData.correoElectronico} onChange={handleChange} required />
              </div>

              <div className='domicilio'>
                <label for="domicilio">Domicilio:</label>
                <input type="text" name="domicilio" value={formData.domicilio} onChange={handleChange} required />
              </div>

              <div className='contraseña'>
                <label for="contraseña">Contraseña:</label>
                <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} required />
              </div>
              
              
            </div>
            <div className="form-column">
              <div className="upload-photo-container">
                <div className="upload-photo-circle">
                  <input type="file" accept="image/*" className="upload-photo" onChange={handleFileChange} />
                </div>
                <span className="update-photo-text">Subir Foto</span>
              </div>
              <button type="submit">¡Vamos allá!</button>
            </div>
          </div>
          
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
  );
}

export default Servicios;