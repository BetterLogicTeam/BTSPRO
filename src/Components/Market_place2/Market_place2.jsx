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
import Web3 from "web3";

import { nftMarketContractAddress, nftMarketContractAddress_Abi, nftMarketTokenAddress, nftMarketToken_Abi } from '../Utils/Contract';
import { loadWeb3 } from '../../Api/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
// const webSupply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545")


function Market_place2() {
  let { id, index, text, useradd } = useParams()
  let chainID = sessionStorage.getItem("NETWORKID");
  let metaAddress = sessionStorage.getItem("meta-address");
  if (metaAddress) {
    metaAddress = JSON.parse(metaAddress);
  }
  let webSupply
  if(chainID==56){

     webSupply = new Web3("https://bsc-dataseed1.binance.org/")
  }else{
    webSupply = new Web3("https://rpc.ankr.com/eth")


  }
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
      if (text == "sell_and_auction_history_address") {
        setIsSpinner(true)

        let res = await axios.get(`https://server.nftapi.online/sell_and_auction_history_address?useraddress=${useradd}`)
        console.log("Dattaa", res);
        let data = id;
        setAll_NFT(res.data.data[id])
        setSendAddress(res?.data?.data[id]?.useraddress)
        setnftcontactadd(res?.data?.data[id]?.nftContract)
        settokenId(res?.data?.data[id]?.tokenId)
        setbase_price(res?.data?.data[id]?.price)
        setitemId(res?.data?.data[id]?.itemId)
        setTimer(res?.data?.data[id].bidEndTime)
        hightbider(res?.data?.data[id].itemId)
        setIsSpinner(false)


      } else
        if (useradd == "tranding") {
          setIsSpinner(true)


          let res = await axios.get(`https://server.nftapi.online/get_trending_NFTs`)
          // console.log("UU", res?.data?.data[id].useraddress);

          let data = id;
          setAll_NFT(res.data.data[id])
          setSendAddress(res?.data?.data[id]?.useraddress)
          setnftcontactadd(res?.data?.data[id]?.nftContract)
          settokenId(res?.data?.data[id]?.tokenId)
          setbase_price(res?.data?.data[id]?.price)
          setitemId(res?.data?.data[id]?.itemId)
          setTimer(res?.data?.data[id].bidEndTime)
          hightbider(res?.data?.data[id].itemId)
          setIsSpinner(false)


        } else
          if (text == "sell_and_auction_history") {
            setIsSpinner(true)

            let res = await axios.get(' https://server.nftapi.online/sell_and_auction_history?category=All')
            console.log("UU", res?.data?.data[id].useraddress);

            let data = id;
            setAll_NFT(res.data.data[id])
            setSendAddress(res?.data?.data[id]?.useraddress)
            setnftcontactadd(res?.data?.data[id]?.nftContract)
            settokenId(res?.data?.data[id]?.tokenId)
            setbase_price(res?.data?.data[id]?.price)
            setitemId(res?.data?.data[id]?.itemId)
            setTimer(res?.data?.data[id].bidEndTime)
            hightbider(res?.data?.data[id].itemId)

            setIsSpinner(false)

          } else

            if (index == 0) {
              setIsSpinner(true)

              let res = await axios.get(' https://server.nftapi.online/sell_marketplace_history?category=All')

              console.log("UU", res?.data?.data[id].useraddress);

              let data = id;
              setAll_NFT(res.data.data[id])
              setSendAddress(res?.data?.data[id]?.useraddress)
              setnftcontactadd(res?.data?.data[id]?.nftContract)
              settokenId(res?.data?.data[id]?.tokenId)
              setbase_price(res?.data?.data[id]?.price)
              setitemId(res?.data?.data[id]?.itemId)
              setIsSpinner(false)

              // setIsSatart(false)

            } else if (index == 1) {
              setIsSpinner(true)

              let res = await axios.get(' https://server.nftapi.online/OnAuction_marketplace_history?category=All')
              console.log("UU", res?.data?.data[id].useraddress);
              setAll_NFT(res?.data?.data[id])
              setTimer(res?.data?.data[id].bidEndTime)


              setSendAddress(res?.data?.data[id].useraddress)
              setbase_price(res?.data?.data[id].price)
              setitemId(res?.data?.data[id].itemId)
              setnftcontactadd(res?.data?.data[id].nftContract)
              settokenId(res?.data?.data[id].tokenId)
              setIsSpinner(false)

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
      setIsSpinner(false)

    }
  }

  useEffect(() => {
    get_All_NFT()
  }, [])




  const hightbider = async (Data) => {

    try {
      if (chainID == 1230) {
        let contractOf = await window.tronWeb.contract().at(nftMarketContractAddress);
        let hightbid = await contractOf.highestBidderMapping(Data).call()
        let bidderAdd = window.tronWeb.address.fromHex(hightbid.bidderAddr)
        let hightbidAmount = parseInt(hightbid.amount)
        console.log("hightbidhightbid", hightbidAmount, bidderAdd);
        setHighestBideradd(bidderAdd)
        sethightbid(hightbidAmount)

      } else {
 
        const web3 = window.web3;
        let nftContractOf = new webSupply.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
        let hightbid = await nftContractOf.methods.highestBidderMapping(Data).call();
        let bidderAdd = hightbid.bidderAddr
        hightbid = hightbid.amount;
        hightbid = webSupply.utils.fromWei(hightbid)
        setHighestBideradd(bidderAdd)
        sethightbid(hightbid)
      }


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
    if (chainID == 1230) {
      setIsSpinner(true)

      if (SendAddress.toUpperCase() !== metaAddress.toUpperCase()) {
        if (base_price <= getInputdata) {

          let getinputdata2 = (getInputdata * 1000000).toString()

          let contractOf = await window.tronWeb.contract().at(nftMarketContractAddress);

          await contractOf.createBidOnItem(itemId, nftcontactadd).send({
            callValue: getinputdata2,
          }).then(async (hash) => {
            if (hash != "") {
              try {
                let postapi = await axios.post('https://server.nftapi.online/trending_NFTs', {
                  "useraddress": All_NFT.useraddress,
                  "itemId": All_NFT.itemId,
                  "nftContract": All_NFT.nftContract,
                  "tokenId": All_NFT.tokenId,
                  "owner": All_NFT.owner,
                  "price": All_NFT.price,
                  "sold": All_NFT.sold,
                  "isOnAuction": 1,
                  "bidEndTime": All_NFT.bidEndTime,
                  "name": All_NFT.name,
                  "url": All_NFT.url,
                  "txn": All_NFT.txn,
                  "category": All_NFT.category,
                  "edate": new Date(),
                  "count": 0

                })

                console.log("postapi", postapi);
                setIsSpinner(false)
                window.location.reload();


                toast.success('Please Wait while transaction is processing...')
              } catch (e) {
                console.log("error", e);
                setIsSpinner(false);
                toast.error("Something went wrong ! ");
              }
            }
            console.log("Final Output:", hash, "\n");
            toast.success("Transaction is complete");
            setIsSpinner(false);
          }).catch((e) => {
            toast.error(e.message);
            setIsSpinner(false);
          })
        } else {
          toast.error("Bid price must be greater than base price and highest bid")
          setIsSpinner(false)

        }
      } else {
        toast.error("Already owned")
        setIsSpinner(false)
      }


    } else {
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


        if (metaAddress == null) {
          toast.error("Please Connect Metamask First")
          setIsSpinner(false)

        } else {

          try {
            const web3 = window.web3;

            // hightbid = web3.utils.toWei(hightbid)
            if (SendAddress.toUpperCase() !== acc.toUpperCase()) {
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
                setIsSpinner(false)

                let num = 0;
                let postapi = await axios.post('https://server.nftapi.online/trending_NFTs', {
                  "useraddress": All_NFT.useraddress,
                  "itemId": All_NFT.itemId,
                  "nftContract": All_NFT.nftContract,
                  "tokenId": All_NFT.tokenId,
                  "owner": All_NFT.owner,
                  "price": All_NFT.price,
                  "sold": All_NFT.sold,
                  "isOnAuction": 1,
                  "bidEndTime": All_NFT.bidEndTime,
                  "name": All_NFT.name,
                  "url": All_NFT.url,
                  "txn": All_NFT.txn,
                  "category": All_NFT.category,
                  "edate": new Date(),
                  "count": 0

                })

                console.log("postapi", postapi);

                setIsSpinner(false)
                window.location.reload();


              } else {
                toast.error("Bid price must be greater than base price and highest bid")
                setIsSpinner(false)

              }
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
      }
    }






  }


  const claimBidItem = async () => {

    if (chainID == 1230) {
      if (metaAddress == null) {
        toast.error("Please Connect Metamask First")
        setIsSpinner(false)

      } else {

        if (HighestBideradd.toUpperCase() == metaAddress.toUpperCase()) {
          let contractOf = await window.tronWeb.contract().at(nftMarketContractAddress);
           await contractOf.claimBidItem(itemId, nftcontactadd).send({

          })
          let postapiPushdata = await axios.post('https://server.nftapi.online/update_auction_status', {

            "tokenid": tokenId,

          })

          let udate_Tranding = await axios.post('https://server.nftapi.online/update_tranding', {

            "tokenId": tokenId,

          })
          console.log("postapiPushdata", postapiPushdata);
          setIsSpinner(false)
          toast.success("Transaction is Complete");

          history("/market_place");
        } else {
          toast.error("Only highest bidder can claim the NFT")
          setIsSpinner(false)
        }
      }


    } else {

      let acc = await loadWeb3();
      console.log("metaAddress", acc);
      const web3 = window.web3;
      setIsSpinner(true)
    


      if (metaAddress == null) {
        toast.error("Please Connect Metamask First")
        setIsSpinner(false)

      } else {

        try {
          if (HighestBideradd.toUpperCase() == metaAddress.toUpperCase()) {
            let nftContractOf = new webSupply.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
            await nftContractOf.methods.claimBidItem(itemId, nftcontactadd).send({
              from: acc,
              value:0

            })

            let postapiPushdata = await axios.post('https://server.nftapi.online/update_auction_status', {

              "tokenid": tokenId,

            })

            let udate_Tranding = await axios.post('https://server.nftapi.online/update_tranding', {

              "tokenId": tokenId,

            })
            console.log("postapiPushdata", postapiPushdata);

            setIsSpinner(false)
            toast.success("Transaction is Complete");
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
    }
    // }


  }


  const purchaseOrder = async () => {


    if (chainID == 1230) {
      setIsSpinner(true)
      if (SendAddress.toUpperCase() === metaAddress.toUpperCase()) {
        toast.error("Already owned")
        setIsSpinner(false)

      }
      else {
        let contractOf = await window.tronWeb.contract().at(nftMarketContractAddress);
        let inputdata = (base_price * 1000000).toString()
        await contractOf.createMarketSale(itemId, nftcontactadd).send({
          callValue: inputdata,
        }).then(async (hash) => {
          if (hash != "") {
            try {
              let postapiPushdata = await axios.post('https://server.nftapi.online/update_sell_status', {

                "tokenid": tokenId,

              })

              let udate_Tranding = await axios.post('https://server.nftapi.online/update_tranding', {

                "tokenId": tokenId,

              })
              console.log("postapiPushdata", postapiPushdata);

              setIsSpinner(false)
              // window.location.reload();
              toast.success('Please Wait while transaction is processing...')
            } catch (e) {
              console.log("error", e);
              setIsSpinner(false);
              toast.error("Something went wrong ! ");
            }
          }
          console.log("Final Output:", hash, "\n");
          toast.success("Transaction is complete");
          history("/market_place");
          setIsSpinner(false);
        }).catch((e) => {
          toast.error(e.message);
          setIsSpinner(false);
        })
      }



    } else {

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


        if (metaAddress == null) {
          toast.error("Please Connect Metamask First")
          setIsSpinner(false)

        } else {
          try {
            setIsSpinner(true)
            if (SendAddress.toUpperCase() === acc.toUpperCase()) {
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

              let udate_Tranding = await axios.post('https://server.nftapi.online/update_tranding', {

                "tokenId": tokenId,

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
        {
          IsSpinner ? <Loading /> : <></>

        }
        <div className="row padding_toppp_market_place">
          <div className="col-lg-5 col-sm-12 ">
            <div className="imge-border border p-3 ">
              <img src={All_NFT.url} className='imge-border-radius' alt="" />
            </div>


          </div>
          <div className="col-lg-7 col-sm-12">


            <div class="item-details-price mt-4">


              <h2 class="item-right-eth">Make Offer</h2>


              <ul className='mt-4'>
                <li><h5>NFT Name :</h5><b>  &nbsp;&nbsp; <span className='fs-5 text_color'>{All_NFT.name}</span></b></li>
                <li><h5>Current Price :</h5><b>  &nbsp;&nbsp; <span className='fs-5 text_color'>{All_NFT.price}</span></b></li>

                <li><h5>BlockChain :</h5><b>  &nbsp;&nbsp;
                  <span className='fs-5 text_color'>
                    {All_NFT.Blockchain}

                  </span>

                </b></li>

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
                          <div class="item-details-btn mt-4" style={{ cursor: "pointer" }}>
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
                          <div class="item-details-btn mt-4" style={{ cursor: "pointer" }}>
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
                    <div class="item-details-btn mt-4" style={{ cursor: "pointer" }}>
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
                      <p><b>Token ID</b></p>
                      <p><b>Item ID</b></p>
                      {/* <p><b>Date Created</b></p> */}
                      <p><b>NFT Type</b></p>
                      <p><b>NFT Category</b></p>
                      <p><b>Creator</b></p>
                    </div>
                    <div className="col text-end downtext">
                      <p> <a href={chainID == 1230 ? `https://tronscan.org/#/contract/${All_NFT.nftContract}` : chainID == 56 ? `https://bscscan.com/address/${All_NFT.nftContract}` : `https://etherscan.io/address/${All_NFT.nftContract}`} target="_blank"> {All_NFT.nftContract?.substring(0, 8) + "..." + All_NFT.nftContract?.substring(All_NFT.nftContract?.length - 8)}</a>  </p>
                      <p>{All_NFT.tokenId}</p>
                      <p>{All_NFT.itemId}</p>

                      {/* <p>{moment(All_NFT.last_token_uri_sync).format("DD/MM/YYYY h:m:s A")}</p> */}
                      <p>image/jpeg</p>
                      <p>{All_NFT.category}</p>
                      <p> <a href={chainID == 1230 ? `https://tronscan.org/#/contract/${All_NFT.nftContract}` : chainID == 56 ? `https://bscscan.com/address/${All_NFT.nftContract}` : `https://etherscan.io/address/${All_NFT.nftContract}`} target="_blank">{All_NFT.useraddress?.substring(0, 8) + "..." + All_NFT.useraddress?.substring(All_NFT.useraddress?.length - 8)}</a></p>
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
