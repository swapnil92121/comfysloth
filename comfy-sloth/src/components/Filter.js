import {  useDispatch, } from 'react-redux'
import { clear_filter, color_filter, Company_filter, free_shipping, Price_filter, Search_filter } from "../reducer/fetchDataReducer";
import { Category_components, Color_component, Company_components } from './Filter_components';



export const Filter = ({category_data,company_components,colors_data,set_range_data,set_free_shipping,free_Shipping,range_data}) => {


 const dispatch = useDispatch()
 

 return (
  <>
   <div className="products_block_1">

   {/* input */}
    <div className="form_control_1">
     <input onChange={(e) => dispatch(Search_filter(e.target.value))} type="text" name="text" placeholder="search" className="search-input" />
    </div>


    {/* category */}
    <div className="form_control_2">
     <h5>category</h5>
     <div id="form_control_2_category_option" className="form_control_2_category_option">

      {
       category_data.map((val) => {
        return (
         <>
          <Category_components data={val} />
         </>
        )
       })
      }
     </div>
    </div>



    {/* company */}
    <div className="form_control_3">
     <h5>company</h5>
     <select name="company" onChange={(e) => {
      dispatch(Company_filter(e.target.value))
     }} className="company">
      {
       company_components.map((val) => {
        return (
         <>
          <Company_components data={val} />
         </>
        )
       })
      }
     </select>
    </div>



    {/* colors */}
    <div className="form_control_4">
     <h5>colors</h5>
     <div className="colors">
      <button onClick={() => {
       dispatch(color_filter('all'))
      }} name="color" className="all_btn">all</button>
      {
       colors_data.map((val) => {
        return (
         <>
          <Color_component data_color={val.data_color} bacground_color={val.bacground_color} />
         </>
        )
       })
      }
     </div>
    </div>




    {/* price */}
    <div className="form_control_5">
     <h5>price</h5>
     <p className="price">${range_data / 100}</p>
     <input type="range" onChange={(e) => {
      set_range_data(e.target.value)
      dispatch(Price_filter(e.target.value))
     }} name="price" min={0} max={309999} defaultValue={309999} />
    </div>



    {/* free shipping */}
    <div className="form_control_shipping">
     <label htmlFor="shipping">free shipping</label>
     <input onChange={(e) => {
      set_free_shipping(!free_Shipping)
      dispatch(free_shipping(free_Shipping))
     }} type="checkbox" name="shipping" id="shipping" />
    </div>



    {/* clear filters */}
    <button onClick={() => {
     dispatch(clear_filter())
    }} type="button" className="clear_btn">clear filters</button>


   </div>
  </>
 )
}