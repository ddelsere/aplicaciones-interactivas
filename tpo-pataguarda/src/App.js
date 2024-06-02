import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import dogImage from './assets/images/foto-inicio.jpg'

function App() {
  return (
    <div className="App">
      <header className="bg-success text-white p-3">
        <nav className="container">
          <ul className="nav justify-content-between">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">PATAGUARDA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#join">¡ÚNETE AL EQUIPO!</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#account">MI CUENTA</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container my-4">
        <section className="hero text-center">
          <img src={dogImage} alt="Dog and woman" className="img-fluid" />
          <div className="hero-text bg-light p-4 my-3 rounded">
            <p>Elige entre paseos de 30, 60 o 90 minutos...</p>
            <button className="btn btn-success">¡Agendar!</button>
          </div>
        </section>
        <section className="why-choose-us my-5">
          <h2 className="text-center mb-4">¿Por qué Pataguarda?</h2>
          <div className="row">
            <div className="col-md-4 text-center mb-3">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3>Siempre aquí para ti</h3>
                <p>...</p>
                <span className="icon">[Icon]</span>
              </div>
            </div>
            <div className="col-md-4 text-center mb-3">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3>La seguridad es lo primero</h3>
                <p>...</p>
                <span className="icon">[Icon]</span>
              </div>
            </div>
            <div className="col-md-4 text-center mb-3">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3>Encaja a la perfección contigo</h3>
                <p>...</p>
                <span className="icon">[Icon]</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Pataguarda. Todos los derechos reservados.</p>
        <div className="social-icons">
          <a className="text-white mx-2" href="#facebook">FB</a>
          <a className="text-white mx-2" href="#instagram">IG</a>
          <a className="text-white mx-2" href="#twitter">TW</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

