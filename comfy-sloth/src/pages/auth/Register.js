import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Nav_Bar } from "../../components/Nav_Bar"
import { Routs_section_on_pages } from "../../components/Routs_section_on_pages"
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux";
import { register, removeStatus } from "../../reducer/auth";





export const Register = () => {

 const { registerStatus, auth } = useSelector(store => store.auth)
 const [registerdata, setregisterdata] = useState({ name: null, email: null, password: null })
 const [wait, setwait] = useState(false)


 const dispatch = useDispatch()
 let navigation = useNavigate();


 if (registerStatus && wait) {
  setTimeout(() => {
   dispatch(removeStatus())
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
   <Routs_section_on_pages rout={'Register'} />



   <div>
    <center>
     <div className="login">
      <div className="container">


       <h1>Register</h1>


       <form onSubmit={(event) => {
        setwait(!wait)
        dispatch(register(registerdata))
        event.preventDefault()
       }} className="form">


        <div>
         <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
          <input type="text" value={registerdata.name} onChange={(e) => {
           setregisterdata({ ...registerdata, name: e.target.value })
          }} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
         </div>



         <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
          <input type="text" value={registerdata.email} onChange={(e) => {
           setregisterdata({ ...registerdata, email: e.target.value })
          }} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
         </div>


         <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
          <input type="password" value={registerdata.password} onChange={(e) => {
           setregisterdata({ ...registerdata, password: e.target.value })
          }} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
         </div>


         <button type="submit" style={{ fontWeight: 700, width: '100%', backgroundColor: "#9b7762", border: '1px solid #9b7762' }} class="btn btn-primary">{wait ? "Wait" : 'Submit'}</button>



         {registerStatus && (registerStatus == 'success' ?
          <Alert style={{ marginTop: '2%' }} severity="success">{registerStatus}!</Alert> :
          <Alert style={{ marginTop: '2%' }} severity="error">{registerStatus}!</Alert>)}


         <p style={{ marginTop: '3%' }}>Go Back To<Link style={{ textDecoration: 'none' }} to={'/login'}>Login</Link></p>
        </div>
       </form>
      </div>
     </div>
    </center>
   </div>
  </>
 )
}