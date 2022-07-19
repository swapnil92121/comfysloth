//import
const auth = require('../db/model/authentication')
const { encript_Password, Token, decript_Password } = require('../controller/logical_function')





//login
const login = async (req, res) => {
 const { email, password } = req.body
 try {
  const [data] = await auth.find({ email })
  if (data) {
   const decript_password = await decript_Password(password, data.password)
   if (decript_password) {
    const token = await Token(data._id,data.name)
    if (token) {
     res.status(200).json({
      userid: data._id, token,name:data.name
     })
    }
   } else {
    res.status(400).json({
     error: 'please enter password again'
    })
   }
  } else {
   res.status(400).json({
    error: 'please enter email again'
   })
  }
 } catch (err) {
  res.status(400).json({
   status: 'not login',
   error: err
  })
 }
}



//register
const register = async (req, res) => {
 const { name, email, password } = req.body 
 if (!name || !email || !password) res.status(400).json({
  error: {
   errors: {
    email: {
     message: 'please enter detail'
    }
   }
  }
 })
 try {
  const [checkUserEmail] = await auth.find({ email })
  if (checkUserEmail) res.status(400).json({
   error: {
    errors: {
     email: {
      message: "Already Register"
     }
    }
   }
  })
  const encript_password = await encript_Password(password)
  if (encript_password) {
   const data = await auth.create({ name, email, password: encript_password })
   if (data) {
    const token = await Token(data._id,data.name)
    if (token) {
     res.status(200).json({
      userid: data._id, token,name:data.name
     })
    }
   }
  }
 } catch (error) {
  res.status(400).json({
   status: 'not register',
   error
  })
 }
}

module.exports = { login, register }