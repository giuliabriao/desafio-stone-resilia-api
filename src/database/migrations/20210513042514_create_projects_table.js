const { onUpdateTrigger } = require('../../../knexfile')

exports.up = async knex => knex.schema.createTable('projects', table => {
    table.increments('id')
    table.text('title').notNullable()
    table.text('description').notNullable()
    table.text('category').notNullable()
    table.string('image')
    table.string('valuetion')
    table.string('address')
    table.text('goal').notNullable()
    table.text('balance').notNullable()
    table.date('account').unique().notNullable()
    
    //relations
    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')
    
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
}).then( () => knex.raw(onUpdateTrigger('projects')))


exports.down = async knex => knex.schema.dropTable('projects')