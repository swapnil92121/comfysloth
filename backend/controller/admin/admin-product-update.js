const comfyslothData = require('../../db/model/data')
const comfysloth_Single_Data = require('../../db/model/singleProduct')
const path=require('path')


const updateProduct = async (req, res) => {
    const { id } = req.params
    try {
        const {image}=req.files
        const imgPath=path.join(__dirname,`../../public/upload/${image.name}`)
        await image.mv(imgPath)
        //await comfyslothData.updateOne({_id:id},req.body)
        //await comfysloth_Single_Data.updateOne({_id:id},req.body)
        res.status(200).json({
            status: 'product update'
        })
    } catch {
        res.status(400).json({ status: 'can not able to update' })
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        await comfyslothData.deleteOne({ _id: id })
        await comfysloth_Single_Data.deleteOne({ _id: id })
        res.status(200).json({ status: 'product delete' })
    } catch {
        res.status(400).json({ status: 'can not able to deleter' })
    }
}

module.exports = { updateProduct, deleteProduct }