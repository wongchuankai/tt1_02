const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const router = require('./router/router')
const pool = require('./db/db')
const apiPort = process.env.PORT || 8000

const authUsers = (request, response) => {
    response.status(200).send("OK")
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
  });
app.use('/api', router)

const passport = require('passport');
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', authUsers)
app.post('/login', authUsers)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
