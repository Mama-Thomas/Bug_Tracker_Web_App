import axios from "axios";

const API_URL = "http://localhost:3000/api/projects/";

const getProjects = () => {
  return axios.get(API_URL);
};

const getProject = (id) => {
  return axios.get(API_URL + id);
};

const createProject = (project) => {
  return axios.post(API_URL, project);
};

const updateProject = (id, project) => {
  return axios.put(API_URL + id, project);
};

const deleteProject = (id) => {
  return axios.delete(API_URL + id);
};

export default {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
