const comfyslothData = require('../db/model/data')
const comfysloth_Single_Data = require('../db/model/singleProduct')








const Data = async (req, res) => {
   const data=await comfyslothData.find()
   res.status(200).send(data)
}

const singleData = async (req, res) => {
   const { id } = req.params
   const data = await comfysloth_Single_Data.findById({ _id: id })
   res.status(200).send(data)
}

module.exports = { Data, singleData }