import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home_Page } from './pages/Home_Page'
import { About } from './pages/About'
import { Single_product } from './pages/Single_product'
import { Products } from './pages/Products'
import { Cart_page } from './pages/Cart_page'
import { Footer } from './components/Footer'
import { useEffect } from 'react'
import { AllProduct } from './reducer/fetchDataReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { Checkout } from './pages/Checkout'
import { Error } from './pages/Error'
import { Auth } from './reducer/auth'
import { LoginAdmin } from './pages/admin/Login'
import { AdminPage } from './pages/admin/Index'



export const App = () => {


  const { auth } = useSelector(store => store.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Auth())
    dispatch(AllProduct())
  }, [])



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home_Page />} />
          <Route path='/about' element={<About />} />
          <Route path='/single_product/:id' element={<Single_product />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart_page />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {auth && <Route path='/checkout' element={auth && <Checkout />} />}

          {/* admin */}
          <Route path='/admin/login' element={<LoginAdmin />} />
          <Route path='/admin/page' element={<AdminPage/>} />


          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}