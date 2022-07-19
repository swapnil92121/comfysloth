import { Link } from 'react-router-dom'
import '../css/Home.css'
import { useDispatch } from 'react-redux'
import { addCart } from '../reducer/fetchDataReducer'


export const Buttons = ({ value, fontsize = '.875rem', link = '/', cartData = 'none' }) => {
    const dispatch = useDispatch()
    return (
        <>
            <Link to={link} style={{ textDecoration: 'none' }}>
                <button style={{ fontSize: fontsize }} className='common_button' onClick={() => {
                   cartData!='none' && dispatch(addCart(cartData))
                }}>{value}</button>
            </Link>
        </>
    )
}