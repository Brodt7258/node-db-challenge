
exports.up = function(knex) {
  return knex.schema
    .createTable('projects_resources', function(pr) {
      pr.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      pr.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      pr.primary(['project_id', 'resource_id']);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects_resources');
};
