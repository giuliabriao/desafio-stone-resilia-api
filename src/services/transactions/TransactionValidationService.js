const knex = require('../../database');

async function allowInvestmentInProject(params) { //Projeto ñ pode receber mais do que tem de meta

    const tableProjects = await knex('projects')
        .where('id', params.receptor)

    if (tableProjects[0].balance > tableProjects[0].goal) {
        return "Não pode receber mais do que a meta"
    }
}

async function allowInvestmentFromUser(params) { //Usuário quer doar mais do que tem de saldo
    const tableUsers = await knex('users')
        .where('id', params.sender)

    if (tableUsers[0].balance < params.value) {
        return "Não pode doar mais do que tem de saldo"
    }
}

async function validate(transaction) {

    const errorValidateFunctions = [
        allowInvestmentFromUser(transaction),
        allowInvestmentInProject(transaction)
    ]

    const errorMessages = await Promise.all(errorValidateFunctions)
    return errorMessages.filter(v => v); //só retorna o que não for undefined, vulgo false
}

module.exports = validate