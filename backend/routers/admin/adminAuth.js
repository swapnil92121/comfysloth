const express=require('express')
const router=express.Router()
const {login,userUpdate} =require('../../controller/admin/adminAuth')



//api

router.post('/login',login)

router.put('/user/update',userUpdate)




module.exports=router