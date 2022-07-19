import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Nav_Bar } from "../../components/Nav_Bar"
import { Routs_section_on_pages } from "../../components/Routs_section_on_pages"
import '../../css/login.css'
import { login, removeStatus } from "../../reducer/auth"
import Alert from '@mui/material/Alert';


export const Login = () => {


    const { loginStatus,auth } = useSelector(store => store.auth)
    const [logindata, setlogindata] = useState({ email: null, password: null })
    const [wait, setwait] = useState(false)

    const dispatch = useDispatch()
    let navigation = useNavigate();



    if (loginStatus && wait) {
        setTimeout(() => {
            dispatch(removeStatus())
            if(auth) navigation('/')
        }, 2000)
        setwait(false)
    }



    useEffect(()=>{
        if(auth) navigation('/')
    })



    return (
        <>
            {/* navbar */}
            <Nav_Bar />


            {/* Routs_section_on_pages */}
            <Routs_section_on_pages rout={'Login'} />


            <div>
                <center>
                    <div className="login">
                        <div className="container">
                            <h1>Login</h1>
                            <form onSubmit={(event) => {
                                setwait(!wait)
                                dispatch(login(logindata))
                                event.preventDefault()
                            }} className="form">
                                <div>

                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                        <input type="text" value={logindata.email} onChange={(e) => {
                                            setlogindata({ ...logindata, email: e.target.value })
                                        }} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                    </div>


                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                                        <input type="password" value={logindata.password} onChange={(e) => {
                                            setlogindata({ ...logindata, password: e.target.value })
                                        }} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                    </div>


                                    <button type="submit" style={{ fontWeight: 700, width: '100%', backgroundColor: "#9b7762", border: '1px solid #9b7762' }} class="btn btn-primary">{wait ? "Wait" : 'Submit'}</button>


                                    {loginStatus && (loginStatus == 'success' ?
                                        <Alert style={{ marginTop: '2%' }} severity="success">{loginStatus}!</Alert> :
                                        <Alert style={{ marginTop: '2%' }} severity="error">{loginStatus}!</Alert>)}

                                    <p style={{ marginTop: '3%' }}>Not a member yet?<Link style={{ textDecoration: 'none' }} to={'/register'}>Register</Link></p>



                                </div>
                            </form>
                        </div>

                    </div>
                </center>
            </div>
        </>
    )
}