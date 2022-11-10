import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import "./Live_oction.css"
function Live_oction(props) {
  return (
    <div className='live-stand'>
      <div className=" mt-5  ">
        <div className=' card-liveee card '>
     <img src= {props.image1}className='photo-card' alt="" />
     <div className="live-content container ">
<div className="row border card-live-content ">
    <div className="col-6 text-start">
<p>Start Bid</p>
<h5>16,00 ETH</h5>
    </div>
    <div className="col-6 text-end">
    Bid 90 ETH

    </div>
</div>
        </div>
        <div className="container">
        <div className="row d-flex ">
<div className="text-start  mt-3 mb-3  d-flex ">
   
    <div className="vvv">
<img src={props.image} className='radius-border me-3 ' alt="" />
<BsFillCheckCircleFill className='position-take'/></div>

<div className="name-log">
    <h6 className='red-color'>Industrial Revolution</h6>
    <p>Created by <span  className='red-color'>@Julian</span> </p>
</div>
<div className="eend ">
    <button className='bg-danger danger-radius pb-1 border-none '><AiOutlineArrowRight className='fs-5 text-white '/></button>
    <div className="middle">
    <button type="button" class="default-btn border-radius-5 text">Place Bid</button></div>
</div>
</div>

        </div>
     </div></div>
     
      </div>
    </div>
  )
}

export default Live_oction
