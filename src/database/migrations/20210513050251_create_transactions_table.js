
exports.up = async knex => knex.schema.createTable('transacion', table => {
    table.increments('id')
    table.float('value').notNullable()
    table.date('date').notNullable()
    table.string('sender').notNullable()
    table.string('receptor').notNullable()
})


exports.down = async knex => knex.schema.dropTable('transacion')
