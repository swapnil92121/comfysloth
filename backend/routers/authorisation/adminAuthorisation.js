const express=require('express')
const { adminAuthorisation } = require('../../controller/authorisation/adminAuthorisation')
const router=express.Router()


router.get('/',adminAuthorisation)


module.exports=router