const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  associateResource,
  getResources
};

function get() {
  return db('projects');
}

function getById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function insert(project) {
  return db('projects')
    .insert(project)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('projects')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('projects')
    .where('id', id)
    .del();
}

function associateResource(project_id, resource_id) {
  return db('projects_resources')
    .insert({
      project_id,
      resource_id
    })
    .then(() => {
      return {
        project_id,
        resource_id
      };
    });
}

function getResources(project_id) {
  return db('projects_resources')
    .join('resources', 'projects_resources.resource_id', 'resources.id')
    .select(
      'id',
      'name',
      'description'
    )
    .where('projects_resources.project_id', project_id);
};