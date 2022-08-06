const jwt=require('jsonwebtoken')



const userAuthorisation=async (req,res,next)=>{
 try{
  const token = req.headers.token
  const data = jwt.verify(token, process.env.secret)
  req.user=data
  next()
 }catch(err){
  res.status(400).json({error:'not auth'})
 }
}


module.exports={userAuthorisation}