import axios from "axios";
const USERS_URL = "http://localhost:4000/api/users";
// const SERVER = "https://tuiter-node-server-app-23.onrender.com";
// const USERS_URL = `${SERVER}/api/users`;

const api = axios.create({ withCredentials: true });

export const login = async (user) => {
  const response = await api.post(`${USERS_URL}/login`, user);
  return response.data;
};

export const logout = async () => {
  const response = await api.post(`${USERS_URL}/logout`);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.post(`${USERS_URL}/profile`);
  console.log(response.data);
  return response.data;
  // return response;
};

export const updateUser = async (id, user) => {
  const response = await api.put(`${USERS_URL}/${id}`, user);
  return response.data;
};

// export const register = async ({ username, password }) => {
//   const response = await api.post(`${USERS_URL}/register`, {
//     username,
//     password,
//   });
//   const user = response.data;
//   return user;
// };

export const register = async (user) => {
  const response = await axios.post(`${USERS_URL}/register`, user);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(USERS_URL, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${USERS_URL}/${id}`);
  return response.data;
};
