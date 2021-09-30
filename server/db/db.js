const Pool = require('pg').Pool

const dev_config = {
    user: "postgres",
    host: "localhost",
    database: '',
    password: "admin",
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