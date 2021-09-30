const pool = require('../db/db')
const queries = require('../queries/queries')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const auth = require('../auth/auth')

function hashPassword(password) {
    return bcrypt.hash(password, 10)
}

const test = (req, res) => {
    pool.query(queries.test, (error, results) => {
        if(error) {
            return res.status(200).json({
                results: []
            })
        }
        return res.status(200).json({
            results: results.rows,
            msg: "test ok"
        })
    })
}


function usernameAlreadyExist(username) {
    return `Key (username)=(${username}) already exists.`
}
const signup = async (req, res) => {
    console.log("HERE")
    const body = req.body
    const username = body.username
    const password = body.password
    const first_name = body.first_name
    const last_name = body.last_name
    const postal_code = body.postal_code
    const gender = body.gender
    console.log("HERE1")
    
    var hashedPassword = await bcrypt.hash(password, 10)
    console.log("HERE2")
    
    pool.query(queries.signUpQuery, [username, hashedPassword, first_name, last_name, postal_code, gender], (error, result) => {
        if(error) {
            if(usernameAlreadyExist(username) === error["detail"]) {
                return res.status(400).json({
                    success: false,
                    msg: "Username already taken"
                })    
            }
            console.log(error)
            return res.status(400).json({
                success: false,
                msg: "Error when signing up"
            })
        } 
        return res.status(200).json({
            success: true,
            msg: "Sign up successful"
        })
    })
}

const login = (req, res) => {
    const body = req.body
    const username = body.username
    const password = body.password



    
    return res.status(200).json( {success:true, msg:"login successfully."})
}


const getAllCustomer = (req, res) => {
    pool.query(queries.getAllCustomer, (error, results) => {
        if(error) {
            console.log(error)

            return res.status(200).json({
                results: []
            })
        }
        return res.status(200).json(results.rows)
    })
}
module.exports = {
    signup,
    login,
    test,
    getAllCustomer
}