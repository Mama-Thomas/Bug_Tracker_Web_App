const pool = require("../config/dbConfig");

const getBugs = async () => {
  return pool.query("SELECT * FROM Bugs");
};

const createBug = async (
  title,
  description,
  projectId,
  statusId,
  severityId,
  assignedTo,
  reportedBy
) => {
  return pool.query(
    "INSERT INTO Bugs (Title, Description, ProjectId, StatusId, SeverityId, AssignedTo, ReportedBy) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [
      title,
      description,
      projectId,
      statusId,
      severityId,
      assignedTo,
      reportedBy,
    ]
  );
};

const updateBug = async (
  id,
  title,
  description,
  statusId,
  severityId,
  assignedTo
) => {
  return pool.query(
    "UPDATE Bugs SET Title=$1, Description=$2, StatusId=$3, SeverityId=$4, AssignedTo=$5 WHERE BugId=$6 RETURNING *",
    [title, description, statusId, severityId, assignedTo, id]
  );
};

const deleteBug = async (id) => {
  return pool.query("DELETE FROM Bugs WHERE BugId=$1", [id]);
};

module.exports = {
  getBugs,
  createBug,
  updateBug,
  deleteBug,
};
