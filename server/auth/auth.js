const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const queries = require('../queries/queries')
const pool = require('../db/db')
require('dotenv').config()
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
    'login',
    new localStrategy(
    {
    usernameField: 'username',
    passwordField: 'password'
    },
    async (username, password, done) => {
    try {
        pool.query(queries.getUser, [username], (error, results) => {
            if(error) {
                return done("user not found", false, { message: 'User not found' });
            } 
            if(results.rows.length === 0) {
                return done("invalid username", false, { message: 'Invalid username.' });

            }
            else {
                bcrypt.compare(password, results.rows[0].password, (error, res) => {
                    if(error) {
                    console.log(error
                        )
                return done("user not found", false, { message: 'User not found' });
                    } else {
                    if(res) {
                        const user = {
                        username: username
                        }
                        return done(null, user,  { message: 'Logged in Successfully' });
                    } else {
                        return done(null, false, { message: 'Invalid password' });
                    }
                    }
                })
            }
        })
    } catch (error) {
        return done(error);
    }
    }
    )
);


passport.use(
    new JWTstrategy(
      {
        secretOrKey: 'TOP_SECRET',
        jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
      },
      async (token, done) => {
        try {
          return done(null, token.user);
        } catch (error) {
          done(error);
        }
      }
    )
  );