const comfyslothData=require('../../db/model/data')
const comfysloth_Single_Data=require('../../db/model/singleProduct')


const updateProduct = (req, res) => {
    const {id}=req.params
    res.status(200).json({ status: 'product updatye' })
}

module.exports = {updateProduct}