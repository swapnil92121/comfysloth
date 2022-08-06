const express=require('express')
const {updateProduct} = require('../../controller/admin/admin-product-update')
const router=express.Router()



//admin product api
router.put('/update-product/:id',updateProduct)




module.exports=router