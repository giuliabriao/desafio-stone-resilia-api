const { onUpdateTrigger } = require('../../../knexfile')

exports.up = async knex => knex.schema.createTable('projects', table => {
    table.increments('id')
    table.text('title').notNullable()
    table.text('description').notNullable()
    table.text('category').notNullable()
    table.string('image')
    table.integer('valuation')
    table.string('address')
    table.integer('goal').notNullable()
    table.integer('balance').notNullable()
    table.date('date_limit').notNullable()
    table.string('account').unique().notNullable()
    
    //relations
    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')
    
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    
    
}).then( () => knex.raw(onUpdateTrigger('projects')))

exports.down = async knex => knex.schema.dropTable('projects')