const pool = require("../config/dbConfig");

const getProjects = async () => {
  return pool.query("SELECT * FROM Projects");
};

const createProject = async (name, startDate, endDate, projectManagerId) => {
  return pool.query(
    "INSERT INTO Projects (Name, StartDate, EndDate, ProjectManagerId) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, startDate, endDate, projectManagerId]
  );
};

const updateProject = async (
  id,
  name,
  startDate,
  endDate,
  projectManagerId
) => {
  return pool.query(
    "UPDATE Projects SET Name=$1, StartDate=$2, EndDate=$3, ProjectManagerId=$4 WHERE ProjectId=$5 RETURNING *",
    [name, startDate, endDate, projectManagerId, id]
  );
};

const deleteProject = async (id) => {
  return pool.query("DELETE FROM Projects WHERE ProjectId=$1", [id]);
};

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};
