import axios from "axios";

const API_URL = "http://localhost:3000/api/bugs/";

const getBugs = () => {
  return axios.get(API_URL);
};

const getBug = (id) => {
  return axios.get(API_URL + id);
};

const createBug = (bug) => {
  return axios.post(API_URL, bug);
};

const updateBug = (id, bug) => {
  return axios.put(API_URL + id, bug);
};

const deleteBug = (id) => {
  return axios.delete(API_URL + id);
};

export default {
  getBugs,
  getBug,
  createBug,
  updateBug,
  deleteBug,
};
