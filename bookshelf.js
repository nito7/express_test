var config    = {
  client: 'mysql',
  connection: {
    host:     '127.0.0.1',
    database: 'pawn_exp',
    user:     'root',
    password: 'root'
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: './db/seeds/development'
  }
};

var knex         = require('knex');
var bookshelf    = require('bookshelf');
var my_bookshelf = bookshelf.initialize(knex(config));
module.exports   = my_bookshelf

