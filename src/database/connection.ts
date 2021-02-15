import knex from 'knex'

const connection = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : '',
        database : 'node_api',
        charset: 'utf8'
    },
    migrations: {
        directory: __dirname + '/src/database/migrations',
    },
    seeds: {
        directory: __dirname + 'src/database/seeds'
    }
})

export default connection
