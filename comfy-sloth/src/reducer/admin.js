import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//http://localhost:4000

export const adminLogin = createAsyncThunk('adminLogin', async ({ email, password }) => {
    let payload = null
    await axios.post(`http://localhost:4000/comfysloth/api/auth/admin/login`, { email, password }).then((res) => {
        payload = res
    }).catch((err) => {
        payload = err
    })
    return payload
})

export const adminPageAuth = createAsyncThunk('adminPageAuth', async () => {
    let payload = null
    await axios.get(`http://localhost:4000/comfysloth/api/admin/authorisation/`, {
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





const initialState = {
    adminAuth: false,
    adminAuthStatus: false,
    adminInfo:{id:null,email:null}
}

const slice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        clearAdminAuthStatus: (state, action) => {
            state.adminAuthStatus = false
        }

    },
    extraReducers: {
        //admin login
        [adminLogin.fulfilled]: (state, action) => {
            let payload = action.payload
            if (payload.status === 200) {
                state.adminAuth = true
                state.adminAuthStatus = 'success'
                localStorage.setItem('token', payload.data.token)
                state.adminInfo={email:payload.data.email,id:payload.data.id}
                console.log(state.adminInfo)
            } else {
                state.adminAuth = false
                state.adminAuthStatus = payload.response.data.status
            }
        },
        [adminLogin.rejected]: (state, action) => {
            state.adminAuth = false
            state.adminAuthStatus = false
        },


        //admin auth
        [adminPageAuth.fulfilled]: (state, action) => {
            const payload = action.payload

            if (payload.status === 200) {
                state.adminAuth = true
            } else {
                state.adminAuth = false
            }
        },
        [adminPageAuth.rejected]: (state, action) => {
            
        }
    }
})


export const { clearAdminAuthStatus } = slice.actions

export default slice.reducer