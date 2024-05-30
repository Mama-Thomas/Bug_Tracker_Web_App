const pool = require("../config/dbConfig");

const getUsers = async () => {
  return pool.query("SELECT * FROM Users");
};

const getUserById = async (id) => {
  return pool.query("SELECT * FROM Users WHERE UserId=$1", [id]);
};

const createUser = async (firstName, lastName, email, password, roleId) => {
  return pool.query(
    "INSERT INTO Users (FirstName, LastName, Email, Password, RoleId, IsActive) VALUES ($1, $2, $3, $4, $5, TRUE) RETURNING *",
    [firstName, lastName, email, password, roleId]
  );
};

const updateUser = async (id, firstName, lastName, email, password, roleId) => {
  return pool.query(
    "UPDATE Users SET FirstName=$1, LastName=$2, Email=$3, Password=$4, RoleId=$5 WHERE UserId=$6 RETURNING *",
    [firstName, lastName, email, password, roleId, id]
  );
};

const deleteUser = async (id) => {
  return pool.query("DELETE FROM Users WHERE UserId=$1", [id]);
};

const getUserByEmail = async (email) => {
  return pool.query("SELECT * FROM Users WHERE Email=$1", [email]);
};

const updateBugsAssignedTo = async (userId, newAssignedTo) => {
  return pool.query("UPDATE Bugs SET AssignedTo=$1 WHERE AssignedTo=$2", [
    newAssignedTo,
    userId,
  ]);
};

const updateBugsReportedBy = async (userId, newReportedBy) => {
  return pool.query("UPDATE Bugs SET ReportedBy=$1 WHERE ReportedBy=$2", [
    newReportedBy,
    userId,
  ]);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail,
  updateBugsAssignedTo,
  updateBugsReportedBy,
};
