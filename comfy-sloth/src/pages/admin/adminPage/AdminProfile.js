import { useState } from "react"
import { Buttons } from "../../../components/Buttons"

export const AdminProfile = () => {
    const [showPasswordBlock, setshowPasswordBlock] = useState(false)
    return (
        <>
            <div>
                <form className="AdminProfile" onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <button onClick={() => {
                        setshowPasswordBlock(!showPasswordBlock)
                    }} style={{ width: '25%', backgroundColor: 'rgb(196, 155, 127)', border: 'none' }} className="btn btn-primary">CHANGE PASSWORD</button>


                    {showPasswordBlock && <>
                        <div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Old Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                        </div>
                    </>}
                    <br />
                    <button style={{ width: '100%', marginTop: '5%' }} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}