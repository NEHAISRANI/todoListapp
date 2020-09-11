const knex = require("./connection"); 


knex.schema.hasTable('todotable').then((exists) => {
  if (!exists) {
    return knex.schema.createTable('todotable', (table) => {
      table.increments('ID')
      table.string('Task') 
    })
    .catch((err) => { 
      console.log(err,"There is some err while writing the quety")
    })
  } 
  return console.log('table is created!')
}); 

