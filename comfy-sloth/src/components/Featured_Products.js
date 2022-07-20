import { Cart } from '../components/ProductCart'
import Loader from "react-js-loader";
import { Buttons } from '../components/Buttons'


export const Featured_Products = ({ All_Product }) => {
 return (
  <>
   <div className='Home_page_block_2'>
    <h1 style={{ paddingTop: '6%' }}>Featured Products</h1>
    <div className='Home_page_block_2_underline'></div>
    {All_Product ?
     <div className="container" style={{ marginTop: '7%' }}>
      <div className="row">
       {
        All_Product.map((elm, val) => {
         if (elm.name === 'entertainment center' || elm.name === 'high-back bench' || elm.name === 'modern bookshelf') {
          return (<>

           <div className="col">
            <Cart width={'345px'} hight={'225px'} id={elm._id} img={elm.image} name={elm.name} price={elm.price} />
           </div>

          </>)
         }
        })
       }

      </div>
     </div>
     :
     <div style={{ position: 'absolute', marginLeft: '37%' }}>
      <Loader type="spinner-default" bgColor={"#5f4435"} color={'#5f4435'} size={100} />
     </div>
    }

    <Buttons link={'/products'} value={'all products'} />

   </div>
  </>
 )
}