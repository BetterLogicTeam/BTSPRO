import React from 'react'
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./Market_card.css"
function Market_card(props) {
  return (
    
  
       <div className="mb-3 float-center w-100 me-0 me-md-2 mt-3 ">
        
  <div class="card M-card  M-card-border  M-border " >
  <Link to="/Market_place2">
  <div className="circle ">
            <div className="img-circle w-25 float-end pe-4 ">
                <img src={props.img2} className='w-100 circles border me-1'   alt="" />
                <span className="plus ">
                <img src="pluus.png" className='' alt="" />
                </span>
            </div>
        </div>
    <div className='border essssss  M-border  pb-3 pt-3 px-4'>
  <img src={props.img}className="card-img-top M-border px-1" alt="..."/></div></Link>
<div className="content-1 pt-3 text-start ms-4">
    <p className='C-1'>Kool Ape Social Club</p>
</div>
<span className='content-2 ps-4 text-start d-flex '><h5 className='C-2 pe-2 text-white'>03 Kool Ape Social Club</h5> 
<span className='C-2-heart '><FavoriteIcon className='C2-heart '/></span>
</span>
<div className="content-3 fs-5 ps-4">
    <span className='fs-6 text-white '>Price :</span><span className='fs-6 text-info'> 0.04 BNB - 14.10 $</span><br/>
    <span className='fs-6 text-white '>Status :</span><span className='fs-6 text-info'> Available for buying</span><br/>
    <span className='fs-6 text-white '> Asking Price :</span><span className='fs-6 text-info'> 0.04 <img src="bnc.png" alt="" /></span>
    <button className='Card-btn float-end fs-6 me-3 text-white '><b>Buy</b> </button>
</div>
</div>
</div> 

  )
}

export default Market_card
 