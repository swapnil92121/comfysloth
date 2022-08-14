import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { adminProfileUpdate } from "../../../reducer/admin"

export const AdminProfile = () => {
    const [showPasswordBlock, setshowPasswordBlock] = useState(false)

    const { adminInfo } = useSelector(store => store.admin)
    const dispatch = useDispatch()

    const [adminLogin, setAdminLogin] = useState({ email: adminInfo.email, oldPassword: null, newPassword: null })


    return (
        <>
            <div>
                <form className="AdminProfile" onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={adminLogin.email} onChange={(e) => {
                            setAdminLogin({ ...adminLogin, email: e.target.value })
                        }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <button onClick={() => {
                        setshowPasswordBlock(!showPasswordBlock)
                    }} style={{ width: '25%', backgroundColor: 'rgb(196, 155, 127)', border: 'none' }} className="btn btn-primary">CHANGE PASSWORD</button>

                </form>
                {showPasswordBlock && <>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Old Password</label>
                            <input value={adminLogin.oldPassword} onChange={(e) => {
                                setAdminLogin({ ...adminLogin, oldPassword: e.target.value })
                            }} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                            <input value={adminLogin.newPassword} onChange={(e) => {
                                setAdminLogin({ ...adminLogin, newPassword: e.target.value })
                            }} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                    </div>
                </>}
                <br />
                <button style={{ width: '100%', marginTop: '5%' }} onClick={() => {
                    dispatch(adminProfileUpdate({ ...adminLogin, id: adminInfo.id }))
                }} type="submit" className="btn btn-primary">Submit</button>
            </div>
        </>
    )
}