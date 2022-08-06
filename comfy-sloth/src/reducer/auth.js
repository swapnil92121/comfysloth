import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



//async fetch
export const register = createAsyncThunk('register', async ({ name, email, password }) => {
 let payload = null
 await axios.post(`https://comfysloth.herokuapp.com/comfysloth/api/auth/register`, { name, email, password }).then((res) => {
  payload = res
 }).catch((err) => {
  payload = err
 })
 return payload
})


export const Auth = createAsyncThunk('auth', async () => {
 let payload = null
 await axios.get(`https://comfysloth.herokuapp.com/comfysloth/api/authorisation`, {
  headers: {
   'token': localStorage.getItem('token')
  }
 }).then((res) => {
  payload = res
 }).catch((err) => {
  payload = err
 })
 return payload
})


export const login = createAsyncThunk('login', async ({ email, password }) => {
 let payload = null
 await axios.post(`https://comfysloth.herokuapp.com/comfysloth/api/auth/login`, { email, password }).then((res) => {
  payload = res
 }).catch((err) => {
  payload = err
 })
 return payload
})




const initialState = {
 auth: false,
 userName: null,
 registerStatus: null,
 loginStatus: null,
 username:null
}



const slice = createSlice({
 name: 'auth',
 initialState,
 reducers: {

  logout: (state, action) => {
   localStorage.removeItem('token')
   state.auth = false
  },

  removeStatus:(state,action)=>{
    state.loginStatus=null
    state.registerStatus=null
  }


 }, extraReducers: {

  //register
  [register.fulfilled]: (state, action) => {
   const payload = action.payload
   if (payload.status === 200) {
    state.auth = true
    state.registerStatus='success'
    state.username=payload.data.name
    localStorage.setItem('token', payload.data.token)
   } else {
    console.log(payload.response)
    state.registerStatus = payload.response.data.error.errors.email.message
    state.auth = false
   }
  },
  [register.rejected]: (state, action) => {
   state.auth = false
   state.registerStatus = 'enter All Detail'
  },



  //auth
  [Auth.fulfilled]: (state, action) => {
   const payload = action.payload
   if (payload.status === 200) {
    state.auth = true
    state.username=payload.data.name
   } else {
    state.auth = false
   }
  },
  [Auth.rejected]: (state, action) => {
   state.auth = false
  },




  //login
  [login.fulfilled]: (state, action) => {
   const payload = action.payload
   if (payload.status === 200) {
    state.auth = true
    state.loginStatus='success'
    state.username=payload.data.name
    localStorage.setItem('token', payload.data.token)
   } else {
    state.loginStatus = payload.response.data.error
    state.auth = false
   }
  },
  [login.rejected]: (state, action) => {
   state.auth = false
   state.loginStatus = 'enter All Detail'
  },




 }
})


export const { logout,removeStatus } = slice.actions

export default slice.reducer