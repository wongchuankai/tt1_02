const Pool = require('pg').Pool

const db_name = process.env.POSTGRES_DB || "d3qbcvbetr1kmh";
const db_password = process.env.POSTGRES_PASSWORD || "dc79e08abf80b691de9378647cd6f20feff9ded1f3d1de2d7ad166340f5153db";
const db_user =  process.env.POSTGRES_USER || "tdhubcthrfnnrc";
const db_host = "ec2-52-207-47-210.compute-1.amazonaws.com"

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