import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useDispatch } from 'react-redux';
import { Cart, CartList } from './ProductCart';


export const Product_sort_toggle = ({ sort_product, set_Toggle_product, sort_data }) => {


 const dispatch = useDispatch()

 return (
  <>
   <div className="product_block_2_sort">
    <div className="product_block_2_switch_parten">
     <AutoAwesomeMosaicIcon onClick={() => set_Toggle_product(true)} style={{ transform: 'scale(1)', margin: '2%' }} />
     <FilterListIcon onClick={() => set_Toggle_product(false)} style={{ transform: 'scale(1)', margin: '2%' }} />
    </div>
    <div className="product_block_2_sort">
     <form>
      <label for="sort">sort by</label>
      <select defaultValue='name (a - z)' name="sort" id="sort" onChange={(e) => {
       dispatch(sort_product(e.target.value))
      }} className="sort-input">
       {
        sort_data.map((val) => {
         return (
          <>
           <option value={val}>{val}</option>
          </>
         )
        })
       }
      </select>
     </form>
    </div>
   </div>
  </>
 )
}


export const Product_sort_toggle_row = ({ filterData }) => {
 return (
  <>
   {
    filterData.map((elm, val) => {
     return (
      <div style={{ float: 'left', margin: '1%' }}>
       <Cart width={'286px'} hight={'170px'} id={elm._id} img={elm.image} name={elm.name} price={elm.price} />
      </div>)
    })
   }
  </>
 )
}

export const Product_sort_toggle_col = ({filterData}) => {
 return (
  <>
   {
    filterData.map((elm, val) => {
     return (
      <div>
       <CartList description={elm.description} width={'300px'} hight={'200px'} id={elm._id} img={elm.image} name={elm.name} price={elm.price} />
      </div>)
    })
   }
  </>
 )
}