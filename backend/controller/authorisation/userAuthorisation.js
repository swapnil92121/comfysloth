

//authorisation
const userAuthorisation = (req, res) => {
 const {id,name,email}=req.user
 res.status(200).json({
  status: 'auth',
  id,name,email
 })
}





module.exports = { userAuthorisation }