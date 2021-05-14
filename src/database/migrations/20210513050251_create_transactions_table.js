
exports.up = async knex => knex.schema.createTable('transacion', table => {
    table.increments('id')
    table.float('value').notNullable()
    table.date('date').notNullable()

    //relations
    table.integer('sender')
        .references('users.id')
        .notNullable()
    
    table.integer('receptor')
        .references('projects.id')
        .notNullable()
})


exports.down = async knex => knex.schema.dropTable('transacion')
