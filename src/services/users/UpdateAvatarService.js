const knex = require("../../database");

module.exports = {
  async update(url, id) {
    await knex("users").update({ avatar: url }).where({ id });
  },
};
