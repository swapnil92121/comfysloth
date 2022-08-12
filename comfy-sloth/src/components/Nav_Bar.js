import logo from '../images/logo.svg'
import '../css/navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { HamBurgerSlider } from '../components/HamBurgerSlider'
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../reducer/auth';






export const Nav_Bar = () => {
    const { CartData } = useSelector(store => store.fetchData)
    const { auth } = useSelector(store => store.auth)
    const [togal, setTogal] = useState(false)
    
    const dispatch=useDispatch()

    


    return (
        <>
            <HamBurgerSlider setTogal={setTogal} togal={togal} />
            <div className='navbar'>
                <ul>
                    <li className='navbar_li1'>
                        <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}><img src={logo} /></Link>
                    </li>
                    <li className='navbar_li2'>
                        <ul>
                            <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}><li>Home</li></Link>
                            <Link to={`/about`} style={{ textDecoration: 'none', color: 'black' }}><li>About</li></Link>
                            <Link to={`/products`} style={{ textDecoration: 'none', color: 'black' }}><li>Products</li></Link>
                            <Link to={`/admin/login`} style={{ textDecoration: 'none', color: 'black' }}><li>Admin</li></Link>
                            {auth && <Link to={auth && `/checkout`} style={{ textDecoration: 'none', color: 'black' }}><li>{auth && 'Checkout'}</li></Link>}
                        </ul>
                    </li>
                    <li className='navbar_li3'>
                        <ul>
                            <Link to={'/cart'} style={{ textDecoration: 'none', color: 'black' }}><li>Cart<ShoppingCartIcon style={{ marginTop: '10%' }} /><span class="cart_value">{CartData.length}</span></li></Link>
                            <Link to={!auth && '/login'}
                                style={{ textDecoration: 'none', color: 'black' }}
                            ><li onClick={()=>{
                                dispatch(logout())
                            }}>{auth ? 'Logout' : 'Login'}
                                    {auth ? <LogoutIcon style={{ marginTop: '5%' }} />
                                        : <PersonAddAltIcon style={{ marginTop: '5%' }} />}
                                </li>
                            </Link>
                        </ul>
                        <button onClick={() => {
                            setTogal(!togal)
                        }} type="button" className="nav-toggle">
                            <MenuIcon />
                        </button>
                    </li>

                </ul>
            </div>
        </>
    )
}