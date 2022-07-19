//imports
const express=require('express')
const router=express.Router()
const {login,register}=require('../controller/authentication')





//routes
router.post('/login',login)

router.post('/register',register)







//export
module.exports=router