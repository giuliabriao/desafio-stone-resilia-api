const knex = require("../../database");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth');


module.exports = {
  async create({ email, password }) {
    const user = await knex("users")
      .where("email", email)
      .first()
    
    if (!user) {
      const message = {message: 'credentials invalid'}
      return message;
    }

    const comparePassword = await bcrypt.compare(password, user.password)

    if (!comparePassword) {
      const message = {message: 'credentials invalid'}
      return message;
    }

    const token = jwt.sign({id: user.id}, authConfig.jwt.secret, {
      subject: String(user.id),
      expiresIn: authConfig.jwt.expiresIn
    })

    return {user, token}
  }
};
