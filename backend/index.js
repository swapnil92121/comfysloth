//imports
const express = require('express')
const app = express()
const connectivity = require('./db/connectivity')
require('dotenv').config()
const {userAuthorisation}=require('./middleware/userAuthorisation')
const uploadfile=require('express-fileupload')
const cors=require('cors')



//middleware function
app.use(cors())
app.use(express.static('./public'))
app.use(uploadfile())
app.use(express.json())


//product api
app.use('/comfysloth/api', require('./routers/productDataApi/Data'))
//user auth api
app.use('/comfysloth/api/auth', require('./routers/authentication'))
//user authorisation middleware
app.use('/comfysloth/api/user/authorisation',userAuthorisation, require('./routers/authorisation/userAuthorisation'))







//start
const start = () => {
 try {
  connectivity(process.env.mongodb_connectivity)
  app.listen(process.env.PORT || 4000, () => {
   console.log('connect')
  })
 } catch {
  console.log('not connect...')
 }
}

start()