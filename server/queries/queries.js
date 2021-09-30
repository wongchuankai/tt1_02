const signup = "INSERT INTO Customer(username, password, first_name, last_name, postal_code, gender, created_at) VALUES($1,$2,$3,$4,$5,$6,$7)"

module.exports = {
    signup
}