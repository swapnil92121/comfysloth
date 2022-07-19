import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Checkout_Component } from "../components/Checkout_Component"
import { Nav_Bar } from "../components/Nav_Bar"
import { Routs_section_on_pages } from "../components/Routs_section_on_pages"
import '../css/checkout.css'

export const Checkout = () => {

  const { auth } = useSelector(store => store.auth)
  const { totalCart } = useSelector(store => store.fetchData)
  const { username } = useSelector(store => store.auth)
  const navigation = useNavigate()

  useEffect(() => {
    !auth && navigation('/')
  })

  return (
    <>
      {/* nav_bar */}
      <Nav_Bar />


      {/* routs_on_page */}
      <Routs_section_on_pages rout={`Checkout`} />


      {/* block */}

      {
        auth ?
          <>
            <Checkout_Component username={username} totalCart={totalCart} />
          </> :
          <>
            <div>
              <h1>not authorise user</h1>
            </div>
          </>
      }

    </>
  )
}