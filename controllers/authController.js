// authController.js
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')

exports.signUp = async (req, res, next) => {
    const { username, password } = req.body
    const hashedpassword = await bcrypt.hash(password, 12)
    try {
        const newUser = await User.create({ username: username, password: hashedpassword })
        res.status(200).json({
            status: 'success',
            data: {
                user: newUser
            }
        })
    } catch (e) {
        console.log(e)
        res.status(400).json({
            status: 'fail'
        })
    }
}

exports.signIn = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'user not found',
            })
        }
        const isCorrectPass = await bcrypt.compare(password, user.password)
        if (!isCorrectPass) {
            return res.status(400).json({
                status: 'fail',
                message: 'incorrect username or password',
            })
        }
        res.status(200).json({
            status: 'success',
            data: {
                user: user,
            }
        })

    } catch (e) {
        console.log(e)
        res.status(400).json({
            status: 'fail',
        })
    }
}