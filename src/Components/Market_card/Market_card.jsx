import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./Market_card.css"
import Countdown from 'react-countdown';
import { useState } from 'react';
function Market_card(props) {

  let navigation=useNavigate()

  const [startTime2, setstartTime2] = useState(Date.now()) 



  const Completionist = () => <div class="featured-card-clock" data-countdown="2021/10/10">Time Ended</div>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      return (
        <div className="countdown">
          <div class="featured-card-clock" data-countdown="2021/10/10">{`${days} : ${hours} : ${minutes} : ${seconds} `}</div>
        </div>
      )
    }
  };

  return (

    <>


      <div class="featured-card box-shadow"  >
        <div class="featured-card-img">
          <a >
            <img src={props.img} alt="Images" style={{ height: "17rem", width: "100%" }} />
          </a>
          <p>
            <i class="fa-regular fa-heart"></i> 122
          </p>
          {
            props.isOnAuction == 1 ? <Countdown date={Date.now() + (((parseInt(props.bidEndTime) * 1000)) - Date.now())} renderer={renderer} /> : null
          }
          {/* <button type="button" class="default-btn border-radius-5">Place Bid</button> */}
        </div>
        <div class="content">
          <h3>
            <p><small className='last_text'>{props.category}</small></p>
            <a >{props.name}</a>
          </h3>
          <div class="content-in">

            <div class="featured-card-left">
              <h4>Price : </h4>
            </div>
            <a class="last_text" >{props.amount} BNB</a>


          </div>
          <div class="content-in " style={{ marginTop: "-2rem" }}>

            <div class="featured-card-left">
              <h4>Status : </h4>
            </div>
            <a class="last_text" >{props.status} </a>


          </div>


          <div class="item-details-btn mt-4" onClick={()=>navigation(props.history)} >
            <a class="default-btn border-radius-50"  > {props.btn}</a>
          </div>

        </div>
      </div>





      {/* <div className="mb-3 float-center w-100 me-0 me-md-2 mt-3 ">

        <div class="card M-card  M-card-border  M-border " >

          <div className="circle ">
            <div className="img-circle w-25 float-end pe-4 ">
              <img src={props.img2} className='w-100 circles border me-1' alt="" />
              <span className="plus ">
                <img src="pluus.png" className='' alt="" />
              </span>
            </div>
          </div>
          <div className='border essssss  M-border  pb-3 pt-3 px-4'>
            <img src={props.img} className="card-img-top M-border px-1" alt="..." /></div>
          <div className="content-1 pt-3 text-start ms-4">
            <p className='C-1'>Kool Ape Social Club</p>
          </div>
          <span className='content-2 ps-4 text-start d-flex '><h5 className='C-2 pe-2 text-white'>03 Kool Ape Social Club</h5>
            <span className='C-2-heart '><FavoriteIcon className='C2-heart ' /></span>
          </span>
          <div className="content-3 fs-5 ps-4">
            <span className='fs-6 text-white '>Price :</span><span className='fs-6 text-info'> 0.04 BNB - 14.10 $</span><br />
            <span className='fs-6 text-white '>Status :</span><span className='fs-6 text-info'> Available for buying</span><br />
            <span className='fs-6 text-white '> Asking Price :</span><span className='fs-6 text-info'> 0.04 <img src="bnc.png" alt="" /></span>
            <button className='Card-btn float-end fs-6 me-3 text-white '><b>Buy</b> </button>
          </div>
        </div>
      </div> */}



    </>

  )
}

export default Market_card
