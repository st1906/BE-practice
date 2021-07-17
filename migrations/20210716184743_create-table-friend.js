const { friendTableName } = require("../repo/consts");

exports.up = function (knex) {
  return knex.schema.createTable(friendTableName, (tb) => {
    tb.increments("id");
    tb.string("first_name").notNullable();
    tb.string("last_name").notNullable();
    tb.string("nickname");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(friendTableName);
};
