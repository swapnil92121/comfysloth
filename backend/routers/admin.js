const express=require('express')
const router=express.Router()
const {login} =require('../controller/admin')



//api

router.post('/login',login)





module.exports=router