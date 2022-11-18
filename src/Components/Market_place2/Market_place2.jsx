import React, { useEffect, useState } from 'react'
import './Market_place2.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Countdown from 'react-countdown';
import { MdLocalOffer, MdAccountBalanceWallet } from 'react-icons/md'

import { nftMarketContractAddress, nftMarketContractAddress_Abi, nftMarketTokenAddress, nftMarketToken_Abi } from '../Utils/Contract';
import { loadWeb3 } from '../../Api/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Market_place2() {
  let { id, index,text } = useParams()
  let history = useNavigate()
  const [All_NFT, setAll_NFT] = useState([])
  const [Timer, setTimer] = useState(Date.now())
  const [itemId, setitemId] = useState("")
  const [getInputdata, setgetInputdata] = useState()
  const [base_price, setbase_price] = useState()
  const [SendAddress, setSendAddress] = useState()
  const [nftcontactadd, setnftcontactadd] = useState()
  const [tokenId, settokenId] = useState()
  const [hightbid, sethightbid] = useState(0)
  const [TimeEnded, setTimeEnded] = useState()
  const [HighestBideradd, setHighestBideradd] = useState()
  const [IsSpinner, setIsSpinner] = useState(false)




  const get_All_NFT = async () => {

    try {
      if(text=="sell_and_auction_history"){

        let res = await axios.get(' https://server.nftapi.online/sell_and_auction_history?category=All')

        let data = id;
        setAll_NFT(res.data.data[id])
        setSendAddress(res?.data?.data[id]?.useraddress)
        setnftcontactadd(res?.data?.data[id]?.nftContract)
        settokenId(res?.data?.data[id]?.tokenId)
        setbase_price(res?.data?.data[id]?.price)
        setitemId(res?.data?.data[id]?.itemId)
        setTimer(res?.data?.data[id].bidEndTime)
        hightbider(res?.data?.data[id].itemId)


      }else

      if (index == 0) {

        let res = await axios.get(' https://server.nftapi.online/sell_marketplace_history?category=All')


        let data = id;
        setAll_NFT(res.data.data[id])
        setSendAddress(res?.data?.data[id]?.useraddress)
        setnftcontactadd(res?.data?.data[id]?.nftContract)
        settokenId(res?.data?.data[id]?.tokenId)
        setbase_price(res?.data?.data[id]?.price)
        setitemId(res?.data?.data[id]?.itemId)

        // setIsSatart(false)

      } else if (index == 1) {
        let res = await axios.get(' https://server.nftapi.online/OnAuction_marketplace_history?category=All')
        console.log("Res",res);
        setAll_NFT(res?.data?.data[id])
        setTimer(res?.data?.data[id].bidEndTime)


        setSendAddress(res?.data?.data[id].useraddress)
        setbase_price(res?.data?.data[id].price)
        setitemId(res?.data?.data[id].itemId)
        setnftcontactadd(res?.data?.data[id].nftContract)
        settokenId(res?.data?.data[id].tokenId)

        hightbider(res?.data?.data[id].itemId)
        // setTimeout(() => {

        // }, 2000);
        // hightbider(res?.data?.data[id].itemId)
        // console.log("Res", res?.data?.data[id]);
        // setIsSatart(false)

      } else {
        setAll_NFT([])
      }




    } catch (e) {
      console.log("Error While getAll_NFT", e);
    }
  }

  useEffect(() => {
    get_All_NFT()
  }, [])




  const hightbider = async (Data) => {
    const web3 = window.web3;

    try {
 
      let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
      let hightbid = await nftContractOf.methods.highestBidderMapping(Data).call();

      let bidderAdd = hightbid.bidderAddr
      // console.log("hightbid", bidderAdd);
      hightbid = hightbid.amount;
      hightbid = web3.utils.fromWei(hightbid)
      setHighestBideradd(bidderAdd)


      sethightbid(hightbid)

    } catch (e) {
      console.log("Error While HeightestBid", e);
    }

  }

  // useEffect(() => {
  //   hightbider()
  //   setInterval(() => {

  //   }, 1000)
  // }, [])



  const Completionist = () => <div class="featured-card-clock" data-countdown="2021/10/10">Time Ended</div>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    setTimeEnded(completed)
    if (completed) {
      console.log("completed", completed);
      // Render a completed state
      return <Completionist />;
    } else {

      return (
        <div className="countdown">
          <div class="timer-text" data-countdown="2021/11/11">{`${days} : ${hours} : ${minutes} : ${seconds} `}</div>
        </div>
      )
    }
  };


  const createBidOnItem = async () => {
    let acc = await loadWeb3();
    setIsSpinner(true)



    try {
      const web3 = window.web3;
      // hightbid = web3.utils.toWei(hightbid)
      if (SendAddress !== acc) {
        // if (hightbid <= getInputdata) {
        if (base_price <= getInputdata) {
          // let getinputdata2 = web3.utils.toBN(getinputdata).toString()
          let getinputdata2 = web3.utils.toWei(getInputdata).toString()

          


          let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);




          await nftContractOf.methods.createBidOnItem(itemId, nftcontactadd).send({
            from: acc,
            value: getinputdata2

          })
          toast.success("Biding Successful")

          let res = await axios.post('https://server.nftapi.online/trending_NFTs', {
            "useraddress": acc,
            "tokenId": tokenId,
            "nftContract":nftcontactadd

          })

          setIsSpinner(false)

        } else {
          toast.error("Bid price must be greater than base price and highest bid")
          setIsSpinner(false)

        }


        // } else {
        //   toast.error("Bid price must be greater than base price and highest bid")


        // }
      } else {
        toast.error("Already owned")
        setIsSpinner(false)


      }


    }
    catch (e) {
      console.log("Create Bid Error", e);
      setIsSpinner(false)

    }
  }


  const claimBidItem = async () => {
    let acc = await loadWeb3();
    const web3 = window.web3;
    setIsSpinner(true)


    try {
      if (HighestBideradd == acc) {
        let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);


        await nftContractOf.methods.claimBidItem(itemId, nftcontactadd).send({
          from: acc,
        })

        let postapiPushdata = await axios.post('https://server.nftapi.online/update_auction_status', {

          "tokenid": tokenId,

        })
        console.log("postapiPushdata", postapiPushdata);

        setIsSpinner(false)
        toast.success("Transion Compelete")
        let res = await axios.post('https://server.nftapi.online/trending_NFTs', {
          "useraddress": acc,
          "tokenId": tokenId,
          "nftContract":nftcontactadd

        })
        history("/market_place");


      } else {
        toast.error("Only highest bidder can claim the NFT")
        setIsSpinner(false)

      }



    } catch (e) {
      console.log("Error While Call Function claimBidItem", e)
      setIsSpinner(false)

    }
  }


  const purchaseOrder = async () => {


    let acc = await loadWeb3();
    setIsSpinner(true)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected")
      setIsSpinner(false)

    }
    else if (acc == "Wrong Network") {
      toast.error("Wrong Newtwork please connect to test net")
      setIsSpinner(false)

    } else {
      try {
        setIsSpinner(true)
        if (SendAddress === acc) {
          toast.error("Already owned")
          setIsSpinner(false)

        }
        else {
          setIsSpinner(true)

          const web3 = window.web3;
          let nftContractOftoken = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);

          let inputdata = web3?.utils?.toWei((base_price).toString())
      

          await nftContractOftoken.methods.createMarketSale(itemId, nftcontactadd).send({
            from: acc,
            value: (inputdata).toString()
            // value:(web3.utils.toWei(nftprice)).tostring()
            // value:(1).toString()

          }
          );

          let postapiPushdata = await axios.post('https://server.nftapi.online/update_sell_status', {

            "tokenid": tokenId,

          })
          let res = await axios.post('https://server.nftapi.online/trending_NFTs', {
            "useraddress": acc,
            "tokenId": tokenId,
            "nftContract":nftcontactadd
  
          })
          console.log("postapiPushdata", postapiPushdata);
          toast.success("Transion Compelete")
          setIsSpinner(false)
          history("/market_place");

        }


      }
      catch (e) {
        console.log("Error while addOrder ", e)
        setIsSpinner(false)

      }
    }

  }



  return (

    <div>

      <div class="inner-banner inner-bg10 ">
        <div class="container">
          <div class="inner-title">
            <h3>Browse By Category</h3>
            <ul><li><Link to="/" className='text-white'>Home</Link></li><li><Link className='text-white' to="/market_place">MarketPlace</Link></li><li><a>Make Offer</a></li></ul><div class="inner-shape">
              <img src="https://gible-nft.hibootstrap.com/images/inner-banner/inner-shape1.png" alt="Images" />
              <img src="https://gible-nft.hibootstrap.com/images/inner-banner/inner-shape2.png" alt="Images" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <div className="row padding_toppp_market_place">
          <div className="col-lg-5 col-sm-12 ">
            <div className="imge-border border p-3 ">
              <img src={All_NFT.url} className='imge-border-radius' alt="" />
            </div>


            {/* second section       */}

            {/* <Accordion className='dropss text-white mt-3'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant='h5'>Properties</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <h5><b>No Properties</b></h5>
                </Typography>
              </AccordionDetails>
            </Accordion> */}
          </div>
          <div className="col-lg-7 col-sm-12">


            <div class="item-details-price mt-4">


              <h2 class="item-right-eth">Make Offer</h2>


              <ul className='mt-4'>
                <li><h5>NFT Name :</h5><b>  &nbsp;&nbsp; <span className='fs-5 text_color'>{All_NFT.name}</span></b></li>
                <li><h5>Current Price :</h5><b>  &nbsp;&nbsp; <span className='fs-5 text_color'>{All_NFT.price}</span></b></li>

                {/* <li><h5>Created :</h5><b>  &nbsp;&nbsp;
                  <span className='fs-5 text_color'>

                    {

                      moment(All_NFT.last_token_uri_sync).format("DD/MM/YYYY h:m:s A")
                    }
                  </span>

                </b></li> */}

              </ul>
            </div>
            {
              index == 1 ?
                <div class="item-details-in-content">
                  <div class="item-left">
                    <span className='mt-1'>Auction Ends In</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                    <Countdown date={Date.now() + (((parseInt(Timer) * 1000)) - Date.now())} renderer={renderer} />
                  </div>
                  <div class="item-right">
                    <h3 class="item-remaining">Highest Bid</h3>
                    <h3 class="item-right-eth">{hightbid} BNB</h3>
                  </div>
                </div>
                :
                null
            }

            <div class="item-details-in-content2">
              {
                index == 1 ?
                  <>
                    {
                      TimeEnded == false ?
                        <>
                          <div class="preview-box">
                            <h3>Biding Price</h3>
                            <input type="number" class="form-control" placeholder="Enter Bid Value in BNB" onChange={(e) => setgetInputdata(e.target.value)} />
                          </div>
                          <div class="item-details-btn mt-4">
                            <a class="default-btn border-radius-50" onClick={() => createBidOnItem()} > {

                              IsSpinner == true ?
                                <>

                                  < div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                  </div>

                                </>
                                :
                                "Place Bid"


                            }  </a>
                          </div>

                        </>
                        :
                        <>
                          <div class="item-details-btn mt-4">
                            <a class="default-btn border-radius-50" onClick={() => claimBidItem()} >{

                              IsSpinner == true ?
                                <>

                                  < div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                  </div>

                                </>
                                :
                                "Claim On Bid"


                            }  </a>
                          </div>
                        </>



                    }


                  </>
                  :
                  <>
                    <div class="preview-box2">
                      <h3>Current Price</h3>
                      <h3 class="item-right-eth">{All_NFT.price} BNB</h3>


                    </div>
                    <div class="item-details-btn mt-4">
                      <a class="default-btn border-radius-50" onClick={() => purchaseOrder()}  >
                        {

                          IsSpinner == true ?
                            <>

                              < div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                              </div>

                            </>
                            :
                            "Buy Now"


                        }
                      </a>
                    </div>

                  </>


              }



            </div>

            <Accordion className='item-details-in-content2 text-white mt-3'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 class="item-right-eth">NFT Details</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="row">
                    <div className="col text-start detail-M">
                      <p><b>Contract Address</b></p>
                      <p><b>Token IDs</b></p>
                      {/* <p><b>Date Created</b></p> */}
                      <p><b>NFT Type</b></p>
                      <p><b>NFT Category</b></p>
                      <p><b>Creator</b></p>
                    </div>
                    <div className="col text-end downtext">
                      <p>{All_NFT.nftContract?.substring(0, 8) + "..." + All_NFT.nftContract?.substring(All_NFT.nftContract?.length - 8)}</p>
                      <p>{All_NFT.tokenId}</p>
                      {/* <p>{moment(All_NFT.last_token_uri_sync).format("DD/MM/YYYY h:m:s A")}</p> */}
                      <p>image/jpeg</p>
                      <p>{All_NFT.category}</p>
                      <p>{All_NFT.useraddress?.substring(0, 8) + "..." + All_NFT.useraddress?.substring(All_NFT.useraddress?.length - 8)}</p>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>

          </div>
        </div>
        {/* <Accordion className='dropss text-white mt-3 mb-5'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant='h5'>Trade History</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="overflow">
              <table class="table text-white text-start overflow-scroll  table-border border">
                <thead>
                  <tr>
                    <th scope="col">Seller</th>
                    <th scope="col">Buyer</th>
                    <th scope="col">Price</th>
                    <th scope="col">Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">0x63...91f</th>
                    <td>Listing</td>
                    <td>0.035</td>
                    <td>@Listed on Instant Buy</td>
                  </tr>
                  <tr>
                    <th scope="row">0x00</th>
                    <td>0x63...91f</td>
                    <td>0</td>
                    <td>Minted</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </AccordionDetails>
        </Accordion> */}
      </div>
    </div>
  )
}

export default Market_place2
