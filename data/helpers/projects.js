const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  //getUserPosts,
  insert,
  update,
  remove,
};

function get() {
  return db('projects');
}

function getById(id) {
  return db('projects')
    .where({ id })
    .first();
}

// function getUserPosts(userId) {
//   return db('posts as p')
//     .join('users as u', 'u.id', 'p.user_id')
//     .select('p.id', 'p.text', 'u.name as postedBy')
//     .where('p.user_id', userId);
// }

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