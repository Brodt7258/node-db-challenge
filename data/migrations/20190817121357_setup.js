
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', function(projects) {
      projects.increments();
      projects.string('name')
        .notNullable();
      projects.string('description');
      projects.boolean('completed')
        .defaultTo(false);
    })
    .createTable('tasks', function(tasks) {
      tasks.increments();
      tasks.string('description')
        .notNullable();
      tasks.string('notes');
      tasks.boolean('completed')
        .defaultTo(false);
      tasks.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('resources', function(resources) {
      resources.increments();
      resources.string('name')
        .notNullable();
      resources.string('description');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources');
};
