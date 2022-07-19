import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Buttons } from "../components/Buttons"
import { totalAmount } from '../reducer/fetchDataReducer';






export const Cart_page_component = ({ clearCartData, deliteSingleCartData, UpdateCart, Subtotal, CartData }) => {

  const { auth } = useSelector(store => store.auth)

  const dispatch = useDispatch()


  return (
    <>
      <section className="cart_page_section">
        <div className="cart_page_block1">
          <div className="content">
            <h5>item</h5>
            <h5>price</h5>
            <h5>quantity</h5>
            <h5>subtotal</h5>
          </div>
          <hr />
        </div>
        {
          CartData.map((val, ind) => {
            return (
              <article className="all_cart_block">
                <div className="title">
                  <img src={val.single_product_images} alt="modern poster" />
                  <div>
                    <h5 className="name">{val.single_product_name}</h5>
                    <p className="color">color :<span style={{ background: val.single_product_color }} /></p>
                  </div>
                </div>
                <h5 className="price">${val.single_product_price / 100}</h5>
                <div className="amount-btns">
                  <AddIcon style={{ marginTop: '2%' }} onClick={() => {
                    dispatch(UpdateCart({ id: val.id, cart_count: val.cart_count + 1 }))
                  }} />
                  <h2 className="amount">{val.cart_count}</h2>
                  <RemoveIcon style={{ marginTop: '2%' }} onClick={() => {
                    dispatch(UpdateCart({ id: val.id, cart_count: val.cart_count - 1 }))
                  }} />
                </div>
                <h5 className="subtotal">${(val.single_product_price * val.cart_count) / 100}</h5>
                <button onClick={() => {
                  dispatch(deliteSingleCartData(val.id))
                }} className="remove-btn">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" /></svg>
                </button>
              </article>
            )
          })
        }
        <hr />
        <div className="link_container">
          <Buttons value={'continue shopping'} link={'/products'} />
          <button onClick={() => dispatch(clearCartData())} type="button" className="link-btn clear-btn">clear shopping cart</button>
        </div>
        <section className="sc-fFubgz bjNVbG">
          <div>
            <article>
              <h5>subtotal :<span>${parseFloat(Subtotal).toFixed(2)}</span></h5>
              <p>shipping fee :<span>$5.34</span></p>
              <hr />
              <h4>order total :<span>${parseFloat(Subtotal + 5.34).toFixed(2)}</span></h4>
            </article>
            <Link style={{ textDecoration: 'none' }} to={auth ? `/checkout` : `/login`}><button className="btn" onClick={() => {
                auth && dispatch(totalAmount(parseFloat(Subtotal + 5.34).toFixed(2)))
            }}>{auth ? 'proceed to checkout' : 'login'}</button></Link>
          </div>
        </section>
      </section>
    </>
  )
}




