import logo from '../images/logo.svg'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useSelector } from 'react-redux';
import '../css/HamBurgerSlider.css'





export const HamBurgerSlider = ({ setTogal, togal }) => {
    const { CartData } = useSelector(store => store.fetchData)
    return (
        <>
            <div className="HamBurgerSlider">
                <aside className="sidebar show-sidebar" id={togal ?'right_slide':'left_slide'}>
                    <div className="sidebar-header">
                        <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}><img src={logo} className="logo" alt="coding addict" /></Link>
                        <button onClick={() => {
                            setTogal(!togal)
                        }} className="close-btn">
                            <CloseIcon />
                        </button>
                    </div>
                    <ul className="links">
                        <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}><li>home</li></Link>
                        <Link to={`/about`} style={{ textDecoration: 'none', color: 'black' }}><li>about</li></Link>
                        <Link to={`/products`} style={{ textDecoration: 'none', color: 'black' }}><li>products</li></Link>
                    </ul>
                    <div className='cart-btn-wrapper'>
                        <Link to={'/cart'} style={{ textDecoration: 'none', color: 'black' }}><li className='cart-btn'>Cart<ShoppingCartIcon style={{ marginTop: '5%' }} /><span class="cart_value">{CartData.length}</span></li></Link>
                        <Link to={'/login'} style={{ textDecoration: 'none', color: 'black' }}><li className='auth-btn'>Login<PersonAddAltIcon style={{ marginTop: '5%', color: '#102a42' }} /></li></Link>
                    </div>
                </aside>
            </div>

        </>
    )
}