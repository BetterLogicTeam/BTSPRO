import React from 'react'
import "./Featured .css"
import { FaRegHeart } from 'react-icons/fa'
function Featured (props) {
  return (
    <div>
     
        <div className="card mt-3" style={{ }}>
        <div className="d-flex gggg ">
                <div className="user-point ">
                <img src={props.phote1}className='ddd mt-2 ms-2' alt="" />
                
            </div>
            <p className='mt-2 ps-1 pt-1 pe-4'>Created by @Farnil</p>
            </div>
            <div className='absoliute'>
                <img src={props.phote2} className='w-100' alt="" />
                <div class="middles">
    <button class="text-btn">Place Bid</button>
  </div>
            </div>
            
<div className='hightlight text-start my-2 ms-3'>
 Industrial Revolution
</div>
<div className="row fer-c-1  text-center ">
<div className="col-6">
100 ETH 12/14
</div>
<div className="col-6">
Bid 80 ETH
</div>
</div>

<div className="row hightlights mt-3 ms-2 mb-3">
    <div className="col-9 d-flex">
<div className="hover-top">
<img src={props.phote3} className='hover-top-img1' alt="" />
</div>
<div className="hover-top">
<img src={props.phote4}className='hover-top-img2' alt="" />
</div>
<span className='fs-8'>10+ People Placed Bid</span>
    </div>
    <div className="col-3 mt-1 text-start">
<FaRegHeart className='text-danger '/> <span className='tex-colo'>112</span>
    </div>
</div>

        </div>
      </div>
    
  )
}

export default Featured 
