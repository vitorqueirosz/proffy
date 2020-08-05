import knex from 'knex';
import path from 'path';


const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

// const db = knex({
//     client: 'pg',
//     connection: {
//         host : 'localhost',
//         user : 'postgres',
//         password : 'database',
//         database : 'backend_proffy'
//     },
//     useNullAsDefault: true
// });

export default db;