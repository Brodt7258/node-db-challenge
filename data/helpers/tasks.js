const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  getByProject,
  insert
};

function get() {
  return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.id')
    .select(
      'tasks.description as description',
      'notes',
      'tasks.completed as completed',
      'project_id',
      'projects.name as project_name',
      'projects.description as project_desc'
    );
};

function getById(id) {
  return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.id')
    .select(
      'tasks.description as description',
      'notes',
      'tasks.completed as completed',
      'project_id',
      'projects.name as project_name',
      'projects.description as project_desc'
    )
    .where('tasks.id', id)
    .first();
};

function getByProject(projectId) {
  return db('tasks')
    .select(
      'id',
      'description',
      'notes',
      'completed'
    )
    .where('project_id', projectId);
};

function insert(task) {
  return db('tasks')
    .insert(task)
    .then(ids => {
      return getById(ids[0]);
    });
};