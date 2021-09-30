const Pool = require('pg').Pool

const db_name = process.env.POSTGRES_DB || "policy_db";
const db_password = process.env.POSTGRES_PASSWORD || "password";
const db_user =  process.env.POSTGRES_USER || "admin";
const db_host = "db"

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