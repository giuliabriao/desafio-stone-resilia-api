
const createTransaction = require('../services/transactions/CreateTransactionService');
const listTransaction = require('../services/transactions/ListTransactionService');

module.exports = {

  // List transaction
  async index(req, res, next) {
    try {
      const transactions = await listTransaction.index()
      return res.json(transactions)
    } catch (error) {
      next(error)
    }
  },

  // Create transactions
  async create(req, res, next) {

    try {
      const {
        value,
        date,
        sender,
        receptor,
      } = req.body

      createTransaction.create({
        value,
        date,
        sender,
        receptor,
      })
      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  },

}