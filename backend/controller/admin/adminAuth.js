const auth = require('../../db/model/authentication')
const { decript_Password, Token, encript_Password } = require('../logical_function')


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
            const token = await Token(data._id, data.name, data.email)
            res.status(200).json({
                status: 'login',
                id:data._id,
                email,
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

const userUpdate = async (req, res) => {
    const { id,email, oldPassword, newPassword } = req.body
    if (!email) {
        res.status(400).json({
            status: 'Enter The Data'
        })
    }
    if (email && (!oldPassword && !newPassword)) {
        try {
            var userData=await auth.findOneAndUpdate({ _id:id }, { email })
            res.status(200).json({
                status:userData
            })
        } catch {
            res.status(400).json({
                status: 'Error'
            })
        }
    }
    if(email && oldPassword && newPassword){
        try{
            const checkPassword=await decript_Password(oldPassword,userData.password)
            console.log(checkPassword)
            if(checkPassword){
                const encriptPassword=await encript_Password(newPassword)
                await auth.findOneAndUpdate({ _id:id }, { password:encriptPassword })
                res.status(200).json({
                    status:'update'
                })
            }else{
                res.status(400).json({
                    status: 'Error'
                })
            }
        }catch{
            res.status(400).json({
                status: 'Error'
            })
        }
    }
}


module.exports = { login, userUpdate }