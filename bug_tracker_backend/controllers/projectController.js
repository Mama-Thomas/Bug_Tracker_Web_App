const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../models/projectModel");

exports.getProjects = async (req, res) => {
  try {
    const result = await getProjects();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProject = async (req, res) => {
  const { name, startDate, endDate, projectManagerId } = req.body;
  try {
    const result = await createProject(
      name,
      startDate,
      endDate,
      projectManagerId
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, startDate, endDate, projectManagerId } = req.body;
  try {
    const result = await updateProject(
      id,
      name,
      startDate,
      endDate,
      projectManagerId
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteProject(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
