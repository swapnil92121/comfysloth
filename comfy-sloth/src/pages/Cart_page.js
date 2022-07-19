import { useSelector } from "react-redux"
import { Buttons } from "../components/Buttons"
import { Nav_Bar } from "../components/Nav_Bar"
import { Routs_section_on_pages } from "../components/Routs_section_on_pages"
import '../css/Cart.css'
import { clearCartData, deliteSingleCartData, UpdateCart } from "../reducer/fetchDataReducer";
import { Cart_page_component } from "../components/Cart_page_component";




export const Cart_page = () => {

    
    const { CartData, Subtotal } = useSelector(store => store.fetchData)


    return (
        <>
            {/* nav_bar */}
            <Nav_Bar />

            {/* Routs_section_on_pages */}
            <Routs_section_on_pages rout={'cart'} />

            {
                CartData.length != 0 ?
                    <>
                        <Cart_page_component
                            clearCartData={clearCartData}
                            deliteSingleCartData={deliteSingleCartData}
                            UpdateCart={UpdateCart}
                            Subtotal={Subtotal}
                            CartData={CartData}
                        />
                    </>
                    :
                    <center>
                        <div style={{ marginTop: '20%' }}>
                            <h2>Your cart is empty</h2>
                            <Buttons link="/products" value={'FILL IT'} />
                        </div>
                    </center>
            }

        </>
    )
}