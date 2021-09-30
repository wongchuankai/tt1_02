const pool = require('../db/db')
const queries = require('../queries/queries')

const signup = (req, res) => {
    const body = req.body
    const username = body.username
    const password = body.password

    return res.status(200).json( {success:true, msg:"signup successfully."})
}

const login = (req, res) => {
    const body = req.body
    const username = body.username
    const password = body.password

    
    return res.status(200).json( {success:true, msg:"login successfully."})
}

module.exports = {
    signup,
    login

}