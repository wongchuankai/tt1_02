const {Router} = require('express')
const router = Router()
const passport = require('passport');
const jwt = require('jsonwebtoken');
const user_controller = require('../controller/user-controller')
const shop_controller = require('../controller/shop-controller');
const pool = require('../db/db');

router.post("/test", user_controller.test)
router.post("/signup", user_controller.signup )
router.get('/getAllCustomer', user_controller.getAllCustomer)
router.post('/login', user_controller.login);
router.post('/addtocart', user_controller.addtocart);

module.exports = router