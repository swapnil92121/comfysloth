const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')


const encript_Password=async (password)=>{
 const salt=await bcrypt.genSalt(10)
 const encriptpassword=bcrypt.hash(password,salt)
 return encriptpassword
}

const Token=async (id,name,email)=>{
 return jwt.sign({id,name,email},process.env.secret)
}

const decript_Password=(password,hash_password)=>{
 const encriptpassword=bcrypt.compare(password,hash_password)
 return encriptpassword
}

module.exports={encript_Password,Token,decript_Password}