
exports.up = function (knex, Promise) {
  return knex.schema.createTable('wines', (table) => {
    table.increments();
    table.text('name');
    table.text('type');
    table.int('');
    table.integer('elevation');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('wines');
};
