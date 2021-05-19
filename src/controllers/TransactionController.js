
const createTransaction = require('../services/transactions/CreateTransactionService');
const listTransaction = require('../services/transactions/ListTransactionService');
const validate = require('../services/transactions/TransactionValidationService');

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

      const validationErrors = await validate(req.body)

      if (validationErrors.length > 0) {
        return res.status(422).send(validationErrors)
      } else {

        await createTransaction.create({
          value,
          date,
          sender,
          receptor,
        })

        return res.status(201).send("Tudo certo!")
      }

    } catch (error) {
      next(error)
    }
  },
}