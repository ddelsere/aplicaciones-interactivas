import { useEffect, useState } from "react";
import { getServices, createService, deleteService, getServicesByFilter, updateService } from '../../services/servicesApi';

function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices().then((servicesFromResponse) => setServices(servicesFromResponse));
    }, []);

    const create = (newService) => {
        createService(newService).then((serviceFromResponse) =>
            setServices([...services, serviceFromResponse])
        );
    };

    
}
