export const Home_page_block_3 = ({data}) => {
 return (
  <>
   <div className="Home_page_block_3">
    <article className="header">
     <h3>custom furniture <br /> built only for you</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
    </article>
    <div className="services-center">
     <div className="container">
      <div className="row">
       {
        data.map((elm, val) => {
         return (
          <>
           <div className="col">
            <article className="service">
             <span className="icon">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
               <path d={elm.icons}></path>
              </svg>
             </span>
             <h4>{elm.head}</h4>
             <p>{elm.peragraph}</p>
            </article>
           </div>
          </>
         )
        })
       }
      </div>
     </div>

    </div>
   </div>
  </>
 )
}