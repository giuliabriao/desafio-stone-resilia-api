const knex = require('../database');
const createTransaction = require('../services/CreateTransactionService');
const listTransaction = require('../services/ListTransactionService');

module.exports = {

    // List transaction
    async index(req, res) {
        const transactions = await listTransaction.index()
        return res.json(transactions)
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