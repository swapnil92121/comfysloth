//imports
const expres = require('express')
const app = expres()
const connectivity = require('./db/connectivity')
require('dotenv').config()
const {authorisation}=require('./middleware/authorisation')
const cors=require('cors')



//middlewear
app.use(cors())
app.use(expres.json())
app.use('/comfysloth/api', require('./routers/Data'))
app.use('/comfysloth/api/auth', require('./routers/authentication'))
app.use('/comfysloth/api/auth/admin',require('./routers/admin'))
app.use('/comfysloth/api/authorisation',authorisation, require('./routers/authorisation'))




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