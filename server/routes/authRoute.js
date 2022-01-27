const route = require('express').Router()

const { postSignup, postLogin, postTokenValidation } = require('../controllers/authController')

route.post('/api/signup', postSignup)

route.post('/api/login', postLogin)

route.post('/api/token-validation', postTokenValidation)

module.exports = route