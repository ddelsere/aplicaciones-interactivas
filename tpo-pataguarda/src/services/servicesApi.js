const BASE_URL = "http://localhost:8080/api/v1";
const BASE_URL_SERVICES = BASE_URL + "/services/";

const parseServices = (servicesFromAPI) => servicesFromAPI.todos;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getServices = () =>
    fetch(BASE_URL_SERVICES)
      .then((services) => services.json())
      .then(parseServices);
  export const createService = (service) =>
    fetch(BASE_URL_SERVICES, {
      method: "POST",
      headers,
      body: JSON.stringify(service),
    }).then((todo) => todo.json());
  export const updateService = (service) =>
    fetch(`${BASE_URL_SERVICES}${service.id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(service),
    });
  export const deleteTodo = (serviceId) =>
    fetch(`${BASE_URL_SERVICES}${serviceId}`, {
      method: "DELETE",
    });