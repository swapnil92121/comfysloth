

const adminAuthorisation=(req,res)=>{
    const {id,email}=req.adminData
    res.status(200).json({
        id,email
    })
}


module.exports={adminAuthorisation}