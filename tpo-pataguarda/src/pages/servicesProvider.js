import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesList from '../components/services/servicesListProvider';

function ServiciosProvider({idProvider}) {
  return (
    <div>
      {/* <Header /> */}
      <ServicesList idProvider={idProvider} />
      {/* <Footer /> */}
    </div>
  );
}

export default ServiciosProvider;