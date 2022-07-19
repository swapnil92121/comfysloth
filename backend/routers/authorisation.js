const express=require('express')
const { authorisation } = require('../controller/authorisation')
const router=express.Router()

router.get('/',authorisation)



module.exports=router