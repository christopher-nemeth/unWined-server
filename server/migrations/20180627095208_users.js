
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments().primary()
    table.text('user_name')
    table.text('email')
    table.text('image_url')
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
};