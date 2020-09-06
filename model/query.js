var knex = require('./connection')

let post_query = (up)=>{
    return knex('todotable').insert(up)

} 

let get_query = (id)=>{
    return knex.select("*").from('todotable').where('id',id)
}

let put_query=(update,id)=>{

    return knex('todotable').update(update).where('id',id) 

}

let delete_query=(deleteid)=>{
    return knex('todotable').del().where("id",deleteid)
}
module.exports={post_query,get_query,put_query,delete_query}    































