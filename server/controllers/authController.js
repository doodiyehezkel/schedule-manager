const jwt = require('jsonwebtoken')
const User = require('../models/User')

const createToken = (userId) => {
    return jwt.sign(userId, 'david&aric');
}

const postSignup = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.create({ email, password })
        const userId = user._id.toString()
        const token = createToken(userId)
        res.cookie('token', token, { httpOnly: true })
        res.status(200).json({ userId })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const postLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password);
        const userId = user._id.toString()
        const token = createToken(userId)
        res.cookie('token', token, { httpOnly: true })
        res.status(200).json({ userId });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getLogout = async (req, res) => {
    res.cookie('token', '', { maxAge: 1 })
    res.status(200).json({message: 'logout successfully'})
}

const postTokenValidation = async (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, 'david&aric', async (error, decoded) => {
            if (error) {
                res.status(400).json(error)
            } else {
                const user = await User.findById(decoded)
                res.status(200).json({
                    userId: decoded,
                })
            }
        })
    } else {
        res.status(400).json({ error: 'user is undefined' })
    }

}

module.exports = {
    postSignup,
    postLogin,
    getLogout,
    postTokenValidation
}