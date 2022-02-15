const route = require('express').Router()

const { postSignup, postLogin, getLogout, postTokenValidation } = require('../controllers/authController')

route.post('/api/signup', postSignup)

route.post('/api/login', postLogin)

route.post('/api/token-validation', postTokenValidation)

route.get('/api/logout', getLogout)

module.exports = route