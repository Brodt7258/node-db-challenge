const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  // getByProject,
  insert
};

function get() {
  return db('resources');
};

function getById(id) {
  return db('resources')
    .where({ id })
    .first();
};

// function getByProject(projectId) {
//   return db('resources')
//     .where('project_id', id);
// };

function insert(resource) {
  return db('resources')
    .insert(resource)
    .then(ids => {
      return getById(ids[0]);
    });
};