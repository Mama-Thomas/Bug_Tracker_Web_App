import axios from "axios";

const API_URL = "http://localhost:3000/api/users/";

const getUsers = () => {
  return axios.get(API_URL);
};

const getUser = (id) => {
  return axios.get(API_URL + id);
};

const updateUser = (id, user) => {
  return axios.put(API_URL + id, user);
};

const deleteUser = (id) => {
  return axios.delete(API_URL + id);
};

export default {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
