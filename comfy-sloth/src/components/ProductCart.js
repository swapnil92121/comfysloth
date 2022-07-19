import { Link } from "react-router-dom"
import { Buttons } from "./Buttons"

export const Cart = ({ img, name, price, id, hight, width }) => {
    return (
        <>
            <Link to={`/single_product/${id}`} style={{ textDecoration: 'none' }}>
                <div className='Home_page_block_2_products'>
                    <div>
                        <img src={img} alt="entertainment center" style={{ height: hight, width: width }} />
                    </div>
                    <footer>
                        <h5>{name}</h5>
                        <p>${price / 100}</p>
                    </footer>
                </div>
            </Link>
        </>
    )
}

export const CartList = ({ description, img, name, price, id, hight, width }) => {
    return (
        <>
            <Link to={`/single_product/${id}`} style={{ textDecoration: 'none' }}>
                <div style={{ width: '100%', display: 'flex' }} className='CartList_block_2_products'>
                    <div className="section1">
                        <img src={img} alt="entertainment center" style={{ height: hight, width: width }} />
                    </div>
                    <div className="section2">
                        <h4>{name}</h4>
                        <h5 className="price">${price / 100}</h5>
                        <p>{description}</p>
                        <Buttons link={`/single_product/${id}`} fontsize={'.475rem'} value={'Detail'} />
                    </div>
                </div>
            </Link>
        </>
    )
}