

//authorisation
const authorisation = (req, res) => {
 const {id,name}=req.user
 res.status(200).json({
  status: 'auth',
  id,name
 })
}





module.exports = { authorisation }