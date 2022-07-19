import { useEffect, useState } from "react";
import { Rating } from 'react-simple-star-rating'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { Buttons } from "../components/Buttons";
import { Nav_Bar } from "../components/Nav_Bar";
import { Routs_section_on_pages } from "../components/Routs_section_on_pages";
import { singleProduct } from "../reducer/fetchDataReducer";
import '../css/singleProduct.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Loader from "react-js-loader";




export const Single_product = () => {



    let { id } = useParams();
    const dispatch = useDispatch()
    const { single_product } = useSelector(store => store.fetchData)
    useEffect(() => {
        dispatch(singleProduct(id))
    }, [])
    const [cart_count, set_cart_count] = useState(0)
    const [img_count, set_img_count] = useState(0)





    return (
        <>
            {/* nav_bar */}
            <Nav_Bar />

            {
                single_product ?
                    <>
                        {/* routs_on_page */}
                        <Routs_section_on_pages rout={`single_product/${single_product.name}`} />
                        <div className="single_product">
                            <Buttons value={'BACK TO PRODUCTS'} />

                            <div>
                                <div className="single_product">
                                    <div className="row">


                                        <div className="col">
                                            {/* left section */}
                                            <section className="single_product_section_1">
                                                <img className="single_product_section_1_img" src={single_product.images[img_count].url} />
                                                <div className="gallery">
                                                    {
                                                        [...Array(5).keys()].map((val, ele) => {
                                                            return <img onClick={() => set_img_count(val)} src={single_product.images[val].thumbnails.large.url} />
                                                        })
                                                    }
                                                </div>
                                            </section>
                                        </div>


                                        <div className="col">
                                            {/* right section */}
                                            <section className="single_product_section_2">
                                                <h2>{single_product.name}</h2>
                                                <div className="single_product_section_2_star">
                                                    <div className="stars">
                                                        <Rating size={25} initialValue={single_product.stars} />
                                                        <p className="reviews">({single_product.reviews} customer reviews)</p>
                                                    </div>
                                                </div>
                                                <h5 className="price">${single_product.price / 100}</h5>
                                                <p className="desc">{single_product.description}</p>
                                                <p className="info"><span>Stock : </span>{single_product.stock}</p>
                                                <p className="info"><span>SKU :</span>{id}</p>
                                                <p className="info"><span>Brand :</span>{single_product.company}</p>
                                                <hr />
                                                <section className="single_product_section_3">
                                                    <AddIcon style={{ marginTop: '8%', width: '7%', }} onClick={() => {
                                                        if (cart_count < single_product.stock) {
                                                            set_cart_count(cart_count + 1)
                                                        }
                                                    }} />
                                                    <h2 className="amount">{cart_count}</h2>
                                                    <RemoveIcon style={{ marginTop: '8%', width: '7%' }} onClick={() => {
                                                        if (cart_count > 0) {
                                                            set_cart_count(cart_count - 1)
                                                        }
                                                    }} />
                                                </section>
                                                <Buttons cartData={{
                                                    id,
                                                    cart_count,
                                                    single_product_price:single_product.price,
                                                    single_product_name:single_product.name,
                                                    single_product_images:single_product.images[0].thumbnails.small.url,
                                                    single_product_color:single_product.colors[0],
                                                    }} value={'ADD TO CART'} link={'/cart'} />
                                            </section>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </> :
                    <>
                        <div style={{ position: 'absolute', marginLeft: '37%', marginTop: '13%' }}>
                            <Loader type="spinner-default" bgColor={"#5f4435"} color={'#5f4435'} size={100} />
                        </div>
                    </>
            }



           
        </>
    )
}