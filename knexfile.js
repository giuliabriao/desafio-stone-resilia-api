// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "SEU_DATABASE_AQUI",
      user: "postgres",
      password: "SUA_SENHA_AQUI",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations` //aqui definiu que a pasta migrations vá para esse caminho
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds` //a seeds nós usamos para popular o banco  
    }
  },
  onUpdateTrigger: table => `
    CREATE TRIGGER ${table}_updated_at
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE on_update_timestamp()
    `
};