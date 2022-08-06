const express=require('express')
const { userAuthorisation } = require('../../controller/authorisation/userAuthorisation')
const router=express.Router()

router.get('/',userAuthorisation)



module.exports=router