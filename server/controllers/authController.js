const jwt = require('jsonwebtoken')
const User = require('../models/User')

const createToken = (userId) => {
    return jwt.sign(userId, 'david&aric');
}

const postSignup = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.create({ email, password })
        const token = createToken(user._id.toString())
        res.cookie('token', token, { httpOnly: true })
        res.status(200).json(req.body)
    } catch (error) {
        res.status(400).json(error)
    }
}

const postLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id.toString())
        res.cookie('token', token, { httpOnly: true })
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message })
    }
}

const postTokenValidation = async (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, 'david&aric', (error,decoded) => {
            if(error){
                res.status(400).json({isAuth:false})
            }else {
                res.status(200).json({isAuth:true})
            }
        })
    } else {
        res.status(400).json({isAuth:false})
    }
    
}

module.exports = {
    postSignup,
    postLogin,
    postTokenValidation
}