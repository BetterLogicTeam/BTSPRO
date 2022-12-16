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
import { SiBinance } from 'react-icons/si'
import { FaEthereum } from 'react-icons/fa'
import tron from '../../Assets/tron logo.png'

// const webSupply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545")
const webSupply = new Web3("https://bsc-dataseed1.binance.org/")


function Market_card(props) {
  let metaAddress = sessionStorage.getItem("meta-address");
  if (metaAddress) {
    metaAddress = JSON.parse(metaAddress).toUpperCase()
  }

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
    try {
      let chainID = sessionStorage.getItem("NETWORKID");

      if (props.Blockchain == "Binance") {
        if (chainID == 56) {
          navigation(props.history)

        } else {
          toast.warning("Please Connect Binance Smart Chian")

        }

      } else if (props.Blockchain == "Ethereum") {
        if (chainID == 1) {
          navigation(props.history)

        } else {
          toast.warning("Please Connect Ethereum Network")


        }
      } else if (props.Blockchain == "Tron") {
        if (chainID == 1230) {

          navigation(props.history)

        } else {
          toast.warning("Please Connect Tron Network")


        }
      }




      // let acc = await loadWeb3();
      // const web3 = window.web3;

      // if (props.isOnAuction == 1) {
      //   if (props.Blockchain == "Binance") {
      //     hightbider()
      //     props.setIsSpinner(true)

      //     if (props.data.useraddress.toUpperCase() == acc.toUpperCase()) {
      //       if (startTime2 == true && hightbid == 0) {
      //         let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
      //         await nftContractOf.methods.withdrawYourBid(props.data.itemId, props.data.nftContract).send({
      //           from: acc,

      //         });
      //         toast.success("Withdraw Successfully")
      //         let postapiPushdata = await axios.post('https://server.nftapi.online/update_sell_status', {

      //           "tokenid": props.data.tokenId,

      //         })
      //         props.setIsSpinner(false)

      //         window.location.reload();
      //       } else {
      //         props.setIsSpinner(false)
      //         navigation(props.history)


      //         // toast.error("Only highest bidder can claim the NFT")
      //       }

      //     } else {
      //       navigation(props.history)
      //     }
      //   } else {
      //     toast.error("Connect Binance Smart Chain")
      //   }


      //   if (props.Blockchain == "ethereum") {
      //     hightbider()
      //     props.setIsSpinner(true)

      //     if (props.data.useraddress.toUpperCase() == acc.toUpperCase()) {
      //       if (startTime2 == true && hightbid == 0) {
      //         let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
      //         await nftContractOf.methods.withdrawYourBid(props.data.itemId, props.data.nftContract).send({
      //           from: acc,

      //         });
      //         toast.success("Withdraw Successfully")
      //         let postapiPushdata = await axios.post('https://server.nftapi.online/update_sell_status', {

      //           "tokenid": props.data.tokenId,

      //         })
      //         props.setIsSpinner(false)

      //         window.location.reload();
      //       } else {
      //         props.setIsSpinner(false)
      //         navigation(props.history)


      //         // toast.error("Only highest bidder can claim the NFT")
      //       }


      //     } else {
      //       navigation(props.history)
      //     }
      //   } else {
      //     toast.error("Connect Ethereum Smart Chain")
      //   }
      // } else {
      //   if (props.Blockchain == "ethereum") {
      //     props.setIsSpinner(true)

      //     if (props.data.useraddress.toUpperCase() == acc.toUpperCase()) {

      //       let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
      //       await nftContractOf.methods.withdrawYourBid(props.data.itemId, props.data.nftContract).send({
      //         from: acc,

      //       });
      //       toast.success("Withdraw Successfully")
      //       let postapiPushdata = await axios.post('https://server.nftapi.online/update_sell_status', {

      //         "tokenid": props.data.tokenId,

      //       })
      //       props.setIsSpinner(false)

      //       window.location.reload();


      //     } else {
      //       navigation(props.history)
      //     }
      //   } else {
      //     toast.error("Connect Ethereum Smart Chain")
      //   }

      //   if (props.Blockchain == "Binance") {
      //     props.setIsSpinner(true)

      //     if (props.data.useraddress.toUpperCase() == acc.toUpperCase()) {

      //       let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
      //       await nftContractOf.methods.withdrawYourBid(props.data.itemId, props.data.nftContract).send({
      //         from: acc,

      //       });
      //       toast.success("Withdraw Successfully")
      //       let postapiPushdata = await axios.post('https://server.nftapi.online/update_sell_status', {

      //         "tokenid": props.data.tokenId,

      //       })
      //       props.setIsSpinner(false)

      //       window.location.reload();


      //     } else {
      //       navigation(props.history)
      //     }
      //   } else {
      //     toast.error("Connect Ethereum Smart Chain")
      //   }


      // }





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
          <p>
            {
              props.Blockchain == "Binance" ? <SiBinance className='fa-brands fa-ethereum' /> : props.Blockchain == "Tron" ? <><img src={tron} alt="" width="20px" /></> : <FaEthereum />
            }

            {/*  */}
            {/* {props.Blockchain} */}
          </p>
          {
            props.isOnAuction == 1 ? <Countdown date={Date.now() + (((parseInt(props.bidEndTime) * 1000)) - Date.now())} renderer={renderer} /> : null
          }
          {/* <button type="button" class="default-btn border-radius-5">Place Bid</button> */}
        </div>
        <div class="content">
          <h3>
            <p><small className='last_text'>{props.category}</small></p>
            <a >{props.name} </a>
          </h3>
          <div class="content-in">
            <div class="featured-card-left">
              <h4>Price : </h4>
            </div>
            <a class="last_text" >{props.amount}  {
              props.Blockchain == "Binance" ? "BNB" : props.Blockchain == "Tron" ? "TRX" : "ETH"
            }</a>
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






    </>

  )
}

export default Market_card
