const Pool = require('pg').Pool

const db_name = "dbs"
const db_password =  "admin";
const db_user =  "postgres";
const db_host = "localhost"

const dev_config = {
    user: db_user,
    host: db_host,
    database: db_name,
    password: db_password,
    port: 5432,
}
const proConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    }               // for heroku
}

const pool = new Pool(
    process.env.NODE_ENV === "production" ? proConfig : dev_config
)

module.exports = pool