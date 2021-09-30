const {Router} = require('express')
const router = Router()
const passport = require('passport');
const jwt = require('jsonwebtoken');
const user_controller = require('../controller/user-controller')
const shop_controller = require('../controller/shop-controller')

router.post("/signup", user_controller.signup )
router.post(
    '/login',
    async (req, res, next) => {
      passport.authenticate(
        'login',
        async (err, user, info) => {
          try {
            if (err || !user) {
                console.log(err)
                if(!user) {
                    return next(new Error("Invalid user"))
                }
                const error = new Error('An error occurred.');
                
              return next(error);
            }
  
            req.login(
              user,
              { session: false },
              async (error) => {
                if (error) return next(error);
                //todo
                const user = {
                    username :"",
                    userid: ""
                }
                // const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: user  }, 'secret');
  
                return res.json({ token });
              }
            );
          } catch (error) {
            return next(error);
          }
        }
      )(req, res, next);
    }
  );


module.exports = router