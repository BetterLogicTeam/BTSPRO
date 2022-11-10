import React from 'react'
import "./Trending.css"
import { FaRegHeart } from 'react-icons/fa'
function Trending(props) {
  return (
    <div>
      <div className=" card w-100 mt-5 absoliute" style={{margin:'auto', borderRadius:"12px 12px 0 0"}}>
      <div className="d-flex ggggg ">
                <div className="user-point ">
                <img src={props.photes2} className='dddd mt-2 ms-2' alt="" />
                
            </div>
            <p className='mt-2 ps-1 pt-1 pe-4 hover-train'>Created by @Farnil</p>
            </div>
            <div className=''>
               
                <div class="middles">
    <button class="text-btn">Place Bid</button>
  </div>
            </div>
        <div className="T-img">
<img src={props.photes1} className='w-100 T-img1' alt="" />
        </div>
        <div className="T-border row">
<div className="col-6">120 ETH 12/14</div>
<div className="col-6">Bid 70 ETH</div>
        </div>
        <div className="row mt-4">
            <h4 className='trending_headingggggggg'>Tranquility (Modal)</h4>
            <div className=" fs-5 mt-1 text-center mb-3">
<FaRegHeart className='text-danger '/> <span className='tex-colo'>112</span>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
