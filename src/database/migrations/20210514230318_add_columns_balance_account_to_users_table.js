exports.up = knex => knex.schema.alterTable('users', table => {
    table.integer("balance").defaultTo(1000)
    table.string("account").unique()
  })

  exports.down = knex => knex.schema.alterTable('users', table => {
    table.dropColumn("balance")
    table.dropColumn("account")
  })