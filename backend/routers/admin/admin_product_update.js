const express=require('express')
const {updateProduct, deleteProduct} = require('../../controller/admin/admin-product-update')
const router=express.Router()



//admin product api
router.put('/update-product/:id',updateProduct)

router.delete('/delete-product/:id',deleteProduct)




module.exports=router