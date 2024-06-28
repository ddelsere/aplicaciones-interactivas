const BASE_URL = "http://localhost:8081/api/v1";
const BASE_URL_USERS = BASE_URL + "/users/";

const parseUsers = (usersFromAPI) => usersFromAPI.users;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getAllUsers = () =>
  fetch(BASE_URL_USERS)
    .then((users) => users.json())
    .then(parseUsers);
export const getUserById = (id) =>
    fetch(`${BASE_URL_USERS}${id}`)
        .then((user) => user.json())
        .then(parseUsers);
export const createUser = (user) =>
  fetch(BASE_URL_USERS, {
    method: "POST",
    headers,
    body: JSON.stringify(user),
  }).then((todo) => todo.json());
export const updateUser = (user) =>
  fetch(`${BASE_URL_USERS}${user.id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(user),
  });

