const {Router} = require('express')
const router = Router()

const controller = require('../controller/controller')

router.post("/signup", controller.signup )

module.exports = router