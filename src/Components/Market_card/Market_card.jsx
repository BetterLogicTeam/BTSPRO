import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./Market_card.css"
import Countdown from 'react-countdown';
import { useState } from 'react';
import { loadWeb3 } from '../../Api/api';
import { nftMarketContractAddress, nftMarketContractAddress_Abi } from '../Utils/Contract';
import { toast } from 'react-toastify';
import axios from 'axios';
import Web3 from 'web3';
import Loading from '../Loading/Loading';
// const webSupply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545")
const webSupply = new Web3("https://bsc-dataseed1.binance.org/")


function Market_card(props) {

  let navigation = useNavigate()

  const [startTime2, setstartTime2] = useState()
  const [hightbid, sethightbid] = useState(0)



  const Completionist = () => <div class="featured-card-clock" data-countdown="2021/10/10">Time Ended</div>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    setstartTime2(completed)
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



  const withdrawYourBid = async () => {
    let acc = await loadWeb3();
    const web3 = window.web3;
    try {
      if (props.isOnAuction == 1) {
        hightbider()
         props.setIsSpinner(true)

        if (props.data.useraddress.toUpperCase() == acc.toUpperCase()) {
          if (startTime2 == true && hightbid == 0) {
            let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
            await nftContractOf.methods.withdrawYourBid(props.data.itemId, props.data.nftContract).send({
              from: acc,

            });
            toast.success("Withdraw Successfully")
            let postapiPushdata = await axios.post('https://server.nftapi.online/update_sell_status', {

              "tokenid": props.data.tokenId,

            })
             props.setIsSpinner(false)

            window.location.reload();
          } else {
             props.setIsSpinner(false)
          navigation(props.history)


            // toast.error("Only highest bidder can claim the NFT")
          }


        } else {
          navigation(props.history)
        }
      } else {
         props.setIsSpinner(true)

        if (props.data.useraddress.toUpperCase() == acc.toUpperCase()) {

          let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
          await nftContractOf.methods.withdrawYourBid(props.data.itemId, props.data.nftContract).send({
            from: acc,

          });
          toast.success("Withdraw Successfully")
          let postapiPushdata = await axios.post('https://server.nftapi.online/update_sell_status', {

            "tokenid": props.data.tokenId,

          })
           props.setIsSpinner(false)

          window.location.reload();
        } else {
          navigation(props.history)
        }
      }





    } catch (e) {
       props.setIsSpinner(false)

      console.log("Error While WidthdrawDueAmount ", e);
    }
  }



  const hightbider = async (Data) => {
    const web3 = window.web3;

    try {


      let nftContractOf = new webSupply.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);

      let hightbid = await nftContractOf.methods.highestBidderMapping(props.data.itemId).call();

      let bidderAdd = hightbid.bidderAddr
      hightbid = hightbid.amount;
      console.log("hightbid", hightbid);
      // hightbid = webSupply.utils.fromWei(hightbid)



      sethightbid(hightbid)

    } catch (e) {
      console.log("Error While HeightestBid", e);
    }

  }

  return (

    <>


      <div class="featured-card box-shadow"  >
        
        <div class="featured-card-img">
          <a >
            <img src={props.img} alt="Images" style={{ height: "17rem", width: "100%" }} />
          </a>
          {/* <p>
            <i class="fa-regular fa-heart"></i> 122
          </p> */}
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
          <div class="content-in ">

            <div class="featured-card-left">
              <h4>Status : </h4>
            </div>
            <a class="last_text" >{props.isOnAuction == 1 && startTime2 == true ? "Sell Ended" : props.status} </a>
          </div>


          <div class="item-details-btn mt-4" onClick={() => withdrawYourBid()} style={{ cursor: "pointer" }}>
            <a class="default-btn border-radius-50"  > {props.isOnAuction == 1 && startTime2 == true ? "Claim Now" : props.btn}</a>
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
