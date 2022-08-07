const comfyslothData=require('../../db/model/data')
const comfysloth_Single_Data=require('../../db/model/singleProduct')


const updateProduct = async (req, res) => {
    const {id}=req.params
    const {name,price,image,company,description,shipping}=req.body
    try{
        await comfyslothData.updateOne({_id:id},{name,price,image,company,description,shipping})
        await comfysloth_Single_Data.updateOne({_id:id},{name,price,company,description,shipping})
        res.status(200).json({ status: 'product update' })
    }catch{
        res.status(400).json({ status: 'can not able to update' })
    }
}

const deleteProduct=async (req,res)=>{
    const {id}=req.params
    try{
        await comfyslothData.deleteOne({_id:id})
        await comfysloth_Single_Data.deleteOne({_id:id})
        res.status(200).json({ status: 'product delete' })
    }catch{
        res.status(400).json({ status: 'can not able to deleter' })
    }
}

module.exports = {updateProduct,deleteProduct}