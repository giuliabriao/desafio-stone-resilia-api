const knex = require('../../database');
// const knex_case = require('knex-case');

module.exports = {

    async create({
        value,
        date,
        sender,
        receptor,
    }) {
        try {

            const transaction = await knex('transacion');

            const projectsQuery = await knex('projects')
                .where('id', receptor)
                .first()

                console.log(projectsQuery.balance);

            if (projectsQuery.balance < projectsQuery.goal) {
                    projectsQuery.increment("balance", value)

                    transaction.insert({
                        value,
                        date,
                        sender,
                        receptor,
                    });

                    return res.status(201).send()
            }

            const usersQuery = await knex('users')
            .where('id', sender)
            .first()

            if (value < usersQuery.balance) {
                usersQuery.decrement("balance", value)

                transaction.insert({
                    value,
                    date,
                    sender,
                    receptor,
                });

                return res.status(201).send()
            }
        } catch (error) {
            return error
        }
    }
}

            // await knex('projects')
            //     .where('id', receptor)
            //     .when('receptor.balance', '<', "receptor.goal")
            //     .increment("balance", value)

            // await knex('users')
            //     .where('id', sender)
            //     .when('value', '<', 'sender.balance')
            //     .decrement("balance", value)


/*if (value < sender.balance) {
    await knex('users')
        .where('id', sender)
        .decrement("balance", value)

    await knex('transacion').insert({
        value,
        date,
        sender,
        receptor,
    });

    return res.status(201).send()

    console.log("Transação feita com sucesso");
} else {
    return res.status(400).send("This value exceeds the user's balance value")
}

return res.status(201).send()

/*var projectsQuery = await knex('projects')
    .where('id', receptor)
    .increment("balance", value)

if (receptor.balance < receptor.goal)
    projectsQuery.where('somecolumn', req.query.param) // <-- only if param exists
else
    projectsQuery.where('somecolumn', req.query.param2) // <-- for instance

query.then(function (results) {
    //query success
    res.send(results);
})
    .then(null, function (err) {
        //query fail
        res.status(500).send(err);
    });
});*/

/*const receptorCase = Knex.queryBuilder()
    .when('receptor.balance', '<', "receptor.goal")
    .thenElse(
        Knex.queryBuilder()
            .when('column', '=', `''`)
            .thenElse(2, 0)
    )
    .else(0)
    .toQuery();

if (receptor.balance < receptor.goal) {
    await knex('projects')
        .where('id', receptor)
        .increment("balance", value)

    await knex('transacion').insert({
        value,
        date,
        sender,
        receptor,
    });

    return res.status(201).send()

    console.log("Transação feita com sucesso");
} else {
    return res.status(400).send("This value exceeds the goal value")
}

if (value < sender.balance) {
    await knex('users')
        .where('id', sender)
        .decrement("balance", value)

    await knex('transacion').insert({
        value,
        date,
        sender,
        receptor,
    });

    return res.status(201).send()

    console.log("Transação feita com sucesso");
} else {
    return res.status(400).send("This value exceeds the user's balance value")
}*/