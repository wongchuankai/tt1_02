const signUpQuery = "INSERT INTO Customer(username, password, first_name, last_name, postal_code, gender) VALUES($1,$2,$3,$4,$5,$6)"
const getUser = "Select * from users where username = $1"
const getAllCustomer = "Select * from customer"
const loginQueryUsername = "SELECT * FROM customer WHERE username = $1"
const addtocartUser = "INSERT INTO cart VALUES($1,$2)"
const test = "Select * from test"


module.exports = {
    signUpQuery,
    getUser,
    test,
    getAllCustomer,
    loginQueryUsername,
    addtocartUser
}