const auth = require('../../db/model/authentication')
const { decript_Password, Token } = require('../logical_function')


const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).json({
            status: 'Enter all the detail'
        })
    }
    const data = await auth.findOne({ email })
    if (data) {
        const password_check = await decript_Password(password, data.password)
        if (password_check) {
            const token=await Token(data._id,data.name,data.email)
            res.status(200).json({
                status: 'login',
                token

            })
        } else {
            res.status(400).json({
                status: 'Enter correct password'
            })
        }
    } else {
        res.status(400).json({
            status: 'Enter correct email'
        })
    }
}


module.exports = { login }