require('dotenv').config()
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : 'todo'
    }
  }); 



module.exports = knex ;


