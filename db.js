const Pool = require("pg").Pool

const pool = new Pool({
    user: 'postgres',
    password: 'PostgresAdmin',
    host: 'localhost',
    port: 5432,
    database: 'capregsoft_db'
});

module.exports = pool;