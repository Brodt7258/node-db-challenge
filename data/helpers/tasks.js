const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  getByProject,
  insert
};

function get() {
  return db('tasks');
};

function getById(id) {
  return db('tasks')
    .where({ id })
    .first();
};

function getByProject(projectId) {
  return db('tasks')
    .where('project_id', id);
};

function insert(task) {
  return db('tasks')
    .insert(task)
    .then(ids => {
      return getById(ids[0]);
    });
};