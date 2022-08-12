import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Nav_Bar } from "../../components/Nav_Bar"
import { Routs_section_on_pages } from "../../components/Routs_section_on_pages"
import { adminLogin, adminPageAuth, clearAdminAuthStatus } from "../../reducer/admin"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"


export const LoginAdmin = () => {

    const [login, setLogin] = useState({ email: '', password: '' })
    const { adminAuthStatus, adminAuth } = useSelector(store => store.admin)
    const [wait, setwait] = useState(false)
    const dispatch = useDispatch()
    const navigation = useNavigate()

    if (adminAuthStatus && wait) {
        if (adminAuthStatus === 'success') {
            toast.success(`${adminAuthStatus}!`)
            navigation('/admin/page')
        } else {
            toast.error(`${adminAuthStatus}!`)
        }
        setwait(false)
    }

    useEffect(() => {
        dispatch(adminPageAuth())
        if (adminAuth) {
            navigation('/admin/page')
        }
    })

    return (
        <>
            {/* navbar */}
            <Nav_Bar />


            {/* Routs_section_on_pages */}
            <Routs_section_on_pages rout={'Login'} />

            <center>
                <form style={{ width: "50%", textAlign: 'left', margin: '5%' }} onSubmit={(e) => {
                    setwait(true)
                    dispatch(adminLogin(login))
                    e.preventDefault()
                }}>
                    <div className="mb-3">
                        <h5 htmlFor="exampleInputEmail1" className="form-label">Email address</h5>
                        <input value={login.email} type="email" onChange={(e) => {
                            setLogin({ ...login, email: e.target.value })
                        }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text"><i><p>We'll never share your email with anyone else.</p></i></div>
                    </div>


                    <div className="mb-3">
                        <h5 htmlFor="exampleInputPassword1" className="form-label">Password</h5>
                        <input value={login.password} onChange={(e) => {
                            setLogin({ ...login, password: e.target.value })
                        }} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>


                    <button type="submit" onClick={() => {
                        dispatch(clearAdminAuthStatus())
                    }} style={{ width: '100%', backgroundColor: 'rgb(196, 155, 127)', border: 'none' }} className="btn btn-primary">{wait ? 'wait' : 'Submit'}</button>
                    <ToastContainer autoClose={1500} position="bottom-center" />
                </form>
            </center>


        </>
    )
}