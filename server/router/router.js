const {Router} = require('express')
const router = Router()

const user_controller = require('../controller/user-controller')
const shop_controller = require('../controller/shop-controller')

router.post("/signup", user_controller.signup )



module.exports = router