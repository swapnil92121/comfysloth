import { useEffect, useState } from "react"
import { Nav_Bar } from "../components/Nav_Bar"
import { Routs_section_on_pages } from "../components/Routs_section_on_pages"
import '../css/product.css'
import { useSelector, useDispatch, } from 'react-redux'
import Loader from "react-js-loader";
import { AllProduct, sort_product } from "../reducer/fetchDataReducer";
import { Filter } from "../components/Filter";
import { Product_sort_toggle, Product_sort_toggle_col, Product_sort_toggle_row } from "../components/Product_sort_toggle"




export const Products = () => {

    const { All_Product, filterData } = useSelector(store => store.fetchData)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(AllProduct())
    }, [])




    const category_data = ['all', 'office', 'living room', 'kitchen', 'bedroom', 'dining', 'kids']
    const company_components = ['all', 'marcos', 'liddy', 'ikea', 'caressa']
    const colors_data = [
        {
            data_color: "#ff0000",
            bacground_color: "rgb(255, 0, 0)",
        },
        {
            data_color: "#00ff00",
            bacground_color: "rgb(0, 255, 0)",
        },
        {
            data_color: "#0000ff",
            bacground_color: "rgb(0, 0, 255)",
        },
        {
            data_color: "#000",
            bacground_color: "rgb(0, 0, 0)",
        },
        {
            data_color: "#ffb900",
            bacground_color: "rgb(255, 185, 0)",
        }
    ]

    const sort_data = ['price (lowest)', 'price (highest)', 'name (a - z)', 'name (z - a)']


    const [range_data, set_range_data] = useState(309999)
    const [Toggle_product, set_Toggle_product] = useState(true)
    const [free_Shipping, set_free_shipping] = useState(true)


    return (
        <>
            {/* nav_bar */}
            <Nav_Bar />


            {/* routs_on_page */}
            <Routs_section_on_pages rout={`Products`} />

            {/* block_1 */}
            <div className="product_block_1">

                <Filter
                    category_data={category_data}
                    company_components={company_components}
                    colors_data={colors_data}
                    set_range_data={set_range_data}
                    set_free_shipping={set_free_shipping}
                    free_Shipping={free_Shipping}
                    range_data={range_data}
                />

                <div>
                    {All_Product ?
                        <div className="product_block_2">
                            <Product_sort_toggle
                                sort_product={sort_product}
                                set_Toggle_product={set_Toggle_product}
                                sort_data={sort_data}

                            />
                            {
                                Toggle_product ?
                                    <>
                                        <Product_sort_toggle_row filterData={filterData}/>
                                    </> :
                                    <>
                                        <Product_sort_toggle_col filterData={filterData} />
                                    </>
                            }

                        </div> :
                        <div style={{ position: 'absolute', marginLeft: '25%', marginTop: '5%' }}>
                            <Loader type="spinner-default" bgColor={"#5f4435"} color={'#5f4435'} size={100} />
                        </div>
                    }

                </div>

            </div>



        </>
    )
}