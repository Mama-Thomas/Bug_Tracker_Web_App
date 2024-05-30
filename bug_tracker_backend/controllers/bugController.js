const {
  getBugs,
  createBug,
  updateBug,
  deleteBug,
} = require("../models/bugModel");

exports.getBugs = async (req, res) => {
  try {
    const result = await getBugs();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBug = async (req, res) => {
  const {
    title,
    description,
    projectId,
    statusId,
    severityId,
    assignedTo,
    reportedBy,
  } = req.body;
  try {
    const result = await createBug(
      title,
      description,
      projectId,
      statusId,
      severityId,
      assignedTo,
      reportedBy
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBug = async (req, res) => {
  const { id } = req.params;
  const { title, description, statusId, severityId, assignedTo } = req.body;
  try {
    const result = await updateBug(
      id,
      title,
      description,
      statusId,
      severityId,
      assignedTo
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBug = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteBug(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
