import axios from "axios";

const API_URL = "http://localhost:3000/api/users/";

const register = (firstName, lastName, email, password, roleId) => {
  return axios.post(API_URL + "register", {
    firstName,
    lastName,
    email,
    password,
    roleId,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
