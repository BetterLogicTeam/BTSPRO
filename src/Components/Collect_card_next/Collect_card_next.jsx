import React from 'react'
import { Link } from 'react-router-dom';

import { BsFillHeartFill } from 'react-icons/bs';
import "./Collect-card-next.css"
function Collect_card_next(props) {
  return (
    
  
       <div className="mb-3 float-center w-100 me-0 me-md-2 mt-3 ">
        
  <div class="card M-card  M-card-border  M-border " >
  

    <div className='border sssssss M-border  pb-3 pt-3 px-4'>
  <img src={props.chose}className="card-img-top M-border px-1" alt="..."/></div>

<span className='content-2 ps-4 text-start d-flex '><h5 className='C-2 pe-2 text-white mt-5'>03 Kool Ape Social Club</h5> 
<span className='C-2-heart mt-5 me-1'><BsFillHeartFill className='C2-hearts ms-0 ms-md-1 fs-5 '/></span>
</span>
<div className="content-3 fs-5 ps-4">
    <span className='fs-6 text-white '>Price :</span><span className='fs-6 text-info'> 0.04 BNB - 14.10 $</span><br/>
    <span className='fs-6 text-white '>Status :</span><span className='fs-6 text-info'> Available for buying</span><br/>
   
    
</div>
</div></div> 

  )
}

export default Collect_card_next
 