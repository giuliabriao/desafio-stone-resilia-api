
const session = require('../services/sessions/createSession');

module.exports = {

  async create(req, res, next) {

    const {email, password} = req.body;
    
    try {
      const sessions = await session.create({email, password});
      delete sessions.user.password;

      return res.status(201).json(sessions);
    } catch (error) {
      next(error);
    }
  },
}