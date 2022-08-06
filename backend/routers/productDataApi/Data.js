const express = require('express')
const { Data, singleData } = require('../../controller/productData/Data')
const router = express.Router()

router.get('/data', Data)

router.get('/single/data/:id', singleData)



module.exports = router