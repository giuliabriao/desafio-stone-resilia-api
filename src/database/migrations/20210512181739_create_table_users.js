// const { onUpdateTrigger } = require('../../../knexfile')

exports.up = async knex => knex.schema.createTable('users', table => {
    table.increments('id')
    table.text('firstName').notNullable()
    table.text('lastName').notNullable()
    table.text('username').unique().notNullable()
    table.string('avatar')
    table.text('email').unique().notNullable()
    table.date('birth').unique().notNullable()
    table.string('password').notNullable()

    
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
// .then( () => knex.raw(onUpdateTrigger('users')))


exports.down = async knex => knex.schema.dropTable('users')