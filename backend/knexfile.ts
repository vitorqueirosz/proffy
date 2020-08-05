import path from 'path';


// module.exports = {
//     client: 'pg',
//     connection: {
//         host : 'localhost',
//         user : 'postgres',
//         password : 'database',
//         database : 'backend_proffy'
//     },
//     migrations: {
//         directory: path.resolve(__dirname, 'src', 'database', 'migrations')
//     },
//     useNullAsDefault: true

// }

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true

}