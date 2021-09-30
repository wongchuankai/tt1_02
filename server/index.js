const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const router = require('./router/router')
require('./auth/auth');

const apiPort = process.env.PORT || 8000

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
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
