const Pool = require('pg').Pool
require("dotenv").config()

const dev_config = {
    user: process.env.LOCAL_POSTGRES_USER,
    host: process.env.LOCAL_POSTGRES_HOST,
    database: process.env.LOCAL_POSTGRES_DB,
    password: process.env.LOCAL_POSTGRES_PASSWORD,
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