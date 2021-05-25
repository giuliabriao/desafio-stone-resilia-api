const createUser = require('../services/users/CreateUserService');
const listUser = require('../services/users/ListUserService');
const meUser = require('../services/users/MeService');
const updateUser = require('../services/users/UpdateUserService');
const deleteUser = require('../services/users/DeleteUsers');


module.exports = {

  async index(req, res, next) {
    try {
      const users = await listUser.index()
      return res.json(users)
    } catch (error) {
      next(error)
    }
  },

  async me(req, res, next) {
    try {
      const { username } = req.query;

      const user = await meUser.me(username)
    
      return res.json(user)


    } catch (error) {
      next(error)
    }
  },


  async create(req, res, next) {

    try {
      const {
        firstName,
        lastName,
        username,
        avatar,
        email,
        birth,
        password
      } = req.body

      await createUser.create({
        firstName,
        lastName,
        username,
        avatar,
        email,
        birth,
        password
      })
      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  },


  async update(req, res, next) {
    try {
      const {
        firstName,
        lastName,
        username,
        avatar,
        email,
        birth,
        password
      } = req.body

      const { id } = req.params

      await updateUser.update({
        firstName,
        lastName,
        username,
        avatar,
        email,
        birth,
        password,
        id
      })

      return res.send()
    } catch (error) {
      next(error)
    }
  },


  async delete(req, res, next) {
    try {
      const { id } = req.params
      await deleteUser.delete({ id })

      return res.send()
    } catch (error) {
      next(error)
    }
  }
}