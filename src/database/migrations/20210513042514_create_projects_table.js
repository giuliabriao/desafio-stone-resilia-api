
exports.up = async knex => knex.schema.createTable('projects', table => {
    table.increments('id')
    table.text('title').notNullable()
    table.text('description').notNullable()
    table.text('category').notNullable()
    table.string('image')
    table.integer('valuetion')
    table.string('address')
    table.integer('goal').notNullable()
    table.integer('balance').notNullable()
    table.string('account').unique().notNullable()
    
    //relations
    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')
    
    table.timestamp(true, true)
    
})

exports.down = async knex => knex.schema.dropTable('projects')