const mongoose=require('mongoose')
const playlist=new mongoose.Schema({
 name:{
  type:String,
  required:[true,'please enter the name'],
  trime:true,
 },
 email:{
  type:String,
  required:[true,'please enter the email'],
  unique:true,
  match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please enter valid email'],
  trim:true,
 },
 password:{
  type:String,
  trime:true,
  required:[true,'please enter the password'],
 }
})

module.exports=mongoose.model('auth',playlist)