const jwt = require('jsonwebtoken')

const adminAuthorisation = async (req, res, next) => {
    const { token } = req.headers
    if (!token) {
        res.status(400).json({ status: 'not authorize' })
    } else {
        const responce = await jwt.verify(token, process.env.secret)
        if (responce) {
            req.adminData = responce
            next()
        } else {
            res.status(400).json({ status: 'not authorize' })
        }
    }
}


module.exports = { adminAuthorisation }