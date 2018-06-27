
exports.up = function (knex, Promise) {
  return knex.schema.createTable('wine', (table) => {
    table.increments()
    table.text('wine_name')
    table.text('color')
    table.text('varietal')
    table.integer('vintage')
    table.text('country_origin')
    table.text('tasting_notes')
    table.integer('rating')
    table.text('image_url')
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index()
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('wine');
};