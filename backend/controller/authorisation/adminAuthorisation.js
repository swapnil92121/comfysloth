const adminAuthorisation=(req,res)=>{
    const {name,email}=req.adminData
    res.status(200).json({
        name,email
    })
}


module.exports={adminAuthorisation}