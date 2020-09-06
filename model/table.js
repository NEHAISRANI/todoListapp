var knex=require("./connection")
knex.schema.createTable('todotable',(table)=> {
    table.increments('id'),
    table.string('task')
    })
    .then(()=>{
        console.log("table created");
    }).catch((err)=>{
        console.log(err);
    }) 
