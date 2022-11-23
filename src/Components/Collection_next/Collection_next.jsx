import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Collect_card_next from '../Collect_card_next/Collect_card_next'
import "./Collection_next.css"
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils'
import moment from "moment";
import Avtat from '../../Assets/Avtat.png'
import { loadWeb3 } from '../../Api/api';
import { nftMarketContractAddress, nftMarketContractAddress_Abi, nftMarketToken_Abi } from '../Utils/Contract';
import { toast } from 'react-toastify';
import axios from 'axios';
import profile_placeholder_image from '../../Assets/profile_placeholder_image.629dab34.jpg'
import Loading from '../Loading/Loading';



function Collection_next() {
  const history = useNavigate()

  const { id } = useParams();
  const [CollectionArray, setCollectionArray] = useState([])
  const [TabView, setTabView] = useState(false)
  const [formInput, updateFormInput] = useState({ price: '0', Category: '' })
  const [biding_Data, updatebiding_Data] = useState({ price: '0', Category: '', bidtime: "" })

  let [tokenid, settoken_id] = useState();
  let [ownadd, setownadd] = useState();
  let [NftName, setNftName] = useState()
  let [NFTurl, setNFTurl] = useState()
  const [IsSpinner, setIsSpinner] = useState(false)
  const [isActive, setIsActive] = useState(false);



  const runApp = async () => {
    let acc = await loadWeb3()
    setIsSpinner(true)

    await Moralis.start({
      apiKey: "6sSTRl3GXEZ9CZ3rZChKksJuBZS1hVkXalATDiIa8dczkYm7UbFsldAeJUbAwL02",
      // ...and any other configuration
    });

    const address = acc;

    const chain = EvmChain.BSC_TESTNET;
    // console.log("Chain",chain);

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
    });

    setCollectionArray(response.data.result[id])
    settoken_id(response.data.result[id].token_id)
    setownadd(response.data.result[id].token_address)
    setNftName(response.data.result[id].name)
    setNFTurl(response.data.result[id].token_uri)
    setIsSpinner(false)



    // console.log(response.data.result);
  }

  useEffect(() => {
    runApp();

  }, [])


  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const addOrder = async () => {
    let acc = await loadWeb3();
    console.log("ACC=", acc)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected")
    }
    else if (acc == "Wrong Network") {
      toast.error("Wrong Newtwork please connect to test net")
    } else {


      try {
        setIsSpinner(true)
        const web3 = window.web3;
        let address = "0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c"
        let value_price = formInput.price;

        if (value_price == "") {
          toast.error("Please Enter the Price")
          setIsSpinner(false)
        }
        else {

          setIsSpinner(true)


          if (value_price <= 0) {
            toast.error("Please Enter Price Greater the 0")
            setIsSpinner(false)

          }
          else {
            setIsSpinner(true)

            value_price = web3.utils.toWei(value_price)
            let curreny_time = Math.floor(new Date().getTime() / 1000.0)




            let nftContractOftoken = new web3.eth.Contract(nftMarketToken_Abi, ownadd);
            let getodernumberhere = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);




            // console.log("getorderhere", getItemId)
            console.log("Own_token_Address", tokenid)
            console.log("ownadd", ownadd)
            console.log("curreny_time", curreny_time)
            console.log("value_price", value_price)

            let selecthere = formInput.Category;


            let getListingPrice = await getodernumberhere.methods.getListingPrice().call();

            console.log("getListingPrice", getListingPrice);

            await nftContractOftoken.methods.setApprovalForAll(nftMarketContractAddress, true).send({
              from: acc,
            })
            setIsSpinner(false)

            toast.success("Approved Successfuly")
            setIsSpinner(true)

            let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
            let hash = await nftContractOf.methods.createMarketItem(tokenid, value_price, 1, false, curreny_time, ownadd).send({
              from: acc,
              value: getListingPrice,
              feelimit: 10000000000
            })
            hash = hash.transactionHash
            console.log("hash", hash);
            let getItemId = await getodernumberhere.methods.tokenIdToItemId(ownadd, tokenid).call();
            let MarketItemId = await getodernumberhere.methods.idToMarketItem(getItemId).call();
            console.log("MarketItemId", MarketItemId)
            let bidEndTime = MarketItemId.bidEndTime;
            let isOnAuction = MarketItemId.isOnAuction;
            let itemId = MarketItemId.itemId;
            let nftContract = MarketItemId.nftContract;
            let owner = MarketItemId.owner;
            let price = MarketItemId.price;
            let seller = MarketItemId.seller;
            let sold = MarketItemId.sold;
            let tokenId = MarketItemId.tokenId;


            price = web3.utils.fromWei(price)
            let postapiPushdata = await axios.post('https://server.nftapi.online/open_marketplace', {
              "useraddress": acc,
              "itemId": itemId,
              "nftContract": nftContract,
              "tokenId": tokenId,
              "owner": owner,
              "price": price,
              "sold": sold,
              "isOnAuction": 0,
              "bidEndTime": bidEndTime,
              "name": NftName,
              "url": NFTurl,
              "txn": hash,
              "category": selecthere,
              "edate": new Date(),

            })

            console.log("postapiPushdata", postapiPushdata);
            // let res= await axios.post('https://server.nftapi.online/trending_NFTs',{
            //   "useraddress": acc,
            //      "tokenId": tokenId,
            //      "nftContract":nftContract

            // })


            // toast.success("Success")
            toast.success("Transion Compelete")
            history("/market_place");
            setIsSpinner(false)

            window.location.reload();





          }
        }
      }
      catch (e) {
        console.log("Error while addOrder ", e)
        setIsSpinner(false)


      }
    }
  }


  const auction = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    setIsSpinner(true)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected");
      setIsSpinner(false)

    } else if (acc == "Wrong Network") {
      toast.error("Wrong Newtwork please connect to test net");
      setIsSpinner(false)

    } else {
      try {
        setIsSpinner(true)

        const web3 = window.web3;
        let address = "0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c";
        let value_price = biding_Data.price;
        let selecthere = biding_Data.bidtime;
        let Categories_value = biding_Data.Category;

        console.log("ownaddress", value_price, "selecthere", selecthere, "Categories_value", Categories_value);

        if (value_price == " ") {
          toast.error("Please enter the value")
          setIsSpinner(false)

        } else {
          // if (current_time_and_days > curreny_time) {
          // }

          setIsSpinner(true)


          if (selecthere <= 0) {
            toast.error("Please Select the Days")
            setIsSpinner(false)

          } else {
            setIsSpinner(true)



            value_price = web3.utils.toWei(value_price);
            let curreny_time = Math.floor(new Date().getTime() / 1000.0);
            let current_time_and_days = 60 * selecthere;
            current_time_and_days = current_time_and_days + curreny_time;

            // console.log("selecthere", current_time_and_days);
            // console.log("current_time_and_days", current_time_and_days);
            // console.log("curreny_time", curreny_time);
            let nftContractOftoken = new web3.eth.Contract(nftMarketToken_Abi, ownadd);
            let nftContractInstance = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
            // const getItemId = await nftContractInstance.methods.tokenIdToItemId(ownadd, tokenid).call();

            // console.log("tokenIdToItemId", getItemId);

            let getListingPrice = await nftContractInstance.methods.getListingPrice().call();

            await nftContractOftoken.methods.setApprovalForAll(nftMarketContractAddress, true).send({
              from: acc,
            })

            toast.success("Approve SuccessFul")

            let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);

            let hash = await nftContractOf.methods.createMarketItem(tokenid, value_price, 1, true, current_time_and_days, ownadd).send({
              from: acc,
              value: getListingPrice,
            });
            hash = hash.transactionHash
            // console.log("hash", hash);
            // setIsSpinner(false)
            let getItemId = await nftContractOf.methods.tokenIdToItemId(ownadd, tokenid).call();
            let MarketItemId = await nftContractOf.methods.idToMarketItem(getItemId).call();
            // console.log("MarketItemId", MarketItemId)
            let bidEndTime = MarketItemId.bidEndTime;
            let isOnAuction = MarketItemId.isOnAuction;
            let itemId = MarketItemId.itemId;
            let nftContract = MarketItemId.nftContract;
            let owner = MarketItemId.owner;
            let price = MarketItemId.price;
            let seller = MarketItemId.seller;
            let sold = MarketItemId.sold;
            let tokenId = MarketItemId.tokenId;

            price = web3.utils.fromWei(price)
            let postapiPushdata = await axios.post('https://server.nftapi.online/open_marketplace', {
              "useraddress": acc,
              "itemId": itemId,
              "nftContract": nftContract,
              "tokenId": tokenId,
              "owner": owner,
              "price": price,
              "sold": sold,
              "isOnAuction": 1,
              "bidEndTime": bidEndTime,
              "name": NftName,
              "url": NFTurl,
              "txn": hash,
              "category": Categories_value,
              "edate": new Date(),

            })

            console.log("postapiPushdata", postapiPushdata);
            // let res= await axios.post('https://server.nftapi.online/trending_NFTs',{
            //   "useraddress": acc,
            //      "tokenId": tokenId,
            //      "nftContract":nftContract

            // })
            toast.success("Transion Compelete")
            history("/market_place");
            window.location.reload();

            setIsSpinner(false)

          }
        }
        // toast.success("Transion Compelete");
      } catch (e) {
        console.log("Error while addOrder ", e);
        setIsSpinner(false)

      }
    }
  };







  return (
    <>
      <div class="inner-banner inner-bg12">
        <div class="container">
          <div class="inner-title">
            <h3> Item Details</h3>
            <ul>
              <li><Link to="/" className='text-white'>Home</Link> </li>
              <li><Link to="/collection" className='text-white'>Collection</Link> </li><li><a href="/">Item Details</a></li></ul><div class="inner-shape">
              <img src="https://gible-nft.hibootstrap.com/images/inner-banner/inner-shape1.png" alt="Images" />
              <img src="https://gible-nft.hibootstrap.com/images/inner-banner/inner-shape2.png" alt="Images" />
            </div>
          </div>
        </div>
      </div>
      <div class="item-details-area pt-100 pb-70">
        <div class="container">
          {
            IsSpinner ? <Loading /> : <></>

          }
          <div class="row">
            <div class="col-lg-6">
              <div className="imge-border border p-3 ">
                <img src={CollectionArray.token_uri == null || CollectionArray.token_uri.endsWith(".json") ? profile_placeholder_image : CollectionArray.token_uri} className='imge-border-radius' alt="" />
              </div>
              {/* <div class="item-details-left-side pr-20">
                <div class="item-details-img">
                  <img src={CollectionArray.token_uri == null || CollectionArray.token_uri.endsWith(".json") ? profile_placeholder_image : CollectionArray.token_uri} alt="Images" />
                </div>
              </div> */}
            </div>
            <div class="col-lg-6">
              <div class="item-details-dsce">
                {/* <div class="section-title">
                  <h2>Description</h2>
                  <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                </div> */}




                <div className="main_two_btn">
                  <div class="item-details-btn2" onClick={() => (setTabView(false), handleClick())} >
                    <a class="default-btn2"
                      style={{
                        backgroundColor: isActive ? '#14233d' : '#f14d5d',
                        color: isActive ? '#8d99ff' : '',
                      }}>Fixed Price</a>
                  </div>
                  <div class="item-details-btn2" onClick={() => (setTabView(true), handleClick())}>
                    <a class="default-btn3" style={{
                      backgroundColor: isActive ? '#f14d5d' : '#14233d',
                      color: isActive ? '#8d99ff' : '',
                    }} >Timed Auction</a>
                  </div>

                </div>


                {
                  TabView == false ?
                    <>
                      <div class="item-details-price mt-4">
                        <div class="item-details-title">
                          <h2>List item for sale</h2>

                        </div>
                        <ul>
                          <li><h5>NFT Name :</h5><b>  &nbsp;&nbsp; <span className='fs-5 text_color'>{CollectionArray.name}</span></b></li>
                          <li><h5>Created :</h5><b>  &nbsp;&nbsp;
                            <span className='fs-5 text_color'>

                              {

                                moment(CollectionArray.last_token_uri_sync).format("DD/MM/YYYY h:m:s A")
                              }
                            </span>


                          </b></li>
                          <li><h5>NFT Symbol :</h5><b>  &nbsp;&nbsp; <span className='fs-5 text_color'>{CollectionArray.symbol}</span></b></li>


                        </ul>
                      </div>
                      <div class="item-details-user-item">
                        <div class="images ">
                          <img src={CollectionArray.token_uri == null || CollectionArray.token_uri.endsWith(".json") ? profile_placeholder_image : CollectionArray.token_uri} alt="Images" />
                          <i class="fa-solid fa-check"></i>
                        </div>
                        <div class="content">
                          <h5>{CollectionArray.owner_of?.substring(0, 8) + "..." + CollectionArray.owner_of?.substring(CollectionArray.owner_of?.length - 8)}</h5>
                          <span>Item Owner</span>
                        </div>
                      </div>

                      <div class="preview-box">
                        <h3>Price</h3>
                        <input type="number" name="name" id="name" class="form-control" placeholder="e. g. “0.003 BNB”" onChange={e => updateFormInput({ ...formInput, price: e.target.value })} />

                      </div>
                      <div class="collection-category">
                        <h3>Choose Item Category</h3>
                        <select class="form-select" aria-label="Default select example" onChange={e => updateFormInput({ ...formInput, Category: e.target.value })} >
                          <option selected>Choose Item Category</option>
                          <option selected>Choose Item Category</option>
                          <option value="Sports">Sports</option>
                          <option value="3D">3D</option>
                          <option value="Cartoon">Cartoon</option>
                          <option value="Pixelated">Pixelated</option>

                          <option value="Tattoo">Tattoo</option>
                          <option value="Music">Music</option>
                          <option value="Domains">Domains</option>
                          <option value="Gaming">Gaming</option>
                          <option value="Videos">Videos</option>
                          <option value="Art">Art</option>

                        </select>

                      </div>

                      <div class="item-details-btn mt-4">
                        <a class="default-btn border-radius-50" onClick={() => addOrder()} >{

                          IsSpinner == true ?
                            <>

                              < div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                              </div>

                            </>
                            :
                            "Complete listing"


                        } </a>
                      </div>

                    </>
                    :
                    <>

                      <div class="item-details-price mt-4">
                        <div class="item-details-title">
                          <h2>List item for Auction</h2>

                        </div>
                        <ul>
                          <li><h5>NFT Name :</h5><b>  &nbsp;&nbsp; <span className='fs-5 text_color'>{CollectionArray.name}</span></b></li>
                          <li><h5>Created :</h5><b>  &nbsp;&nbsp;
                            <span className='fs-5 text_color'>

                              {

                                moment(CollectionArray.last_token_uri_sync).format("DD/MM/YYYY h:m:s A")
                              }
                            </span>


                          </b></li>
                          <li><h5>NFT Symbol :</h5><b>  &nbsp;&nbsp; <span className='fs-5 text_color'>{CollectionArray.symbol}</span></b></li>

                        </ul>
                      </div>
                      <div class="item-details-user-item">
                        <div class="images">
                          <img src={CollectionArray.token_uri} alt="Images" />
                          <i class="fa-solid fa-check"></i>
                        </div>
                        <div class="content">
                          <h5>{CollectionArray.owner_of?.substring(0, 8) + "..." + CollectionArray.owner_of?.substring(CollectionArray.owner_of?.length - 8)}</h5>
                          <span>Item Owner</span>
                        </div>
                      </div>
                      <div class="preview-box">
                        <h3>Price</h3>
                        <input type="text" name="name" id="name" class="form-control" placeholder="e. g. “0.003 BNB”" onChange={e => updatebiding_Data({ ...biding_Data, price: e.target.value })} />

                      </div>

                      <div class="collection-category">
                        <h3>Choose Bid Time</h3>
                        <select class="form-select" aria-label="Default select example" onChange={e => updatebiding_Data({ ...biding_Data, bidtime: e.target.value })} >
                          <option selected>Select Days</option>
                          <option value="1" class="dropdown__select">

                            1 Munites
                          </option>
                          <option value="2"> 2 Munites</option>
                          <option value="5"> 5 Munites</option>
                          <option value="10"> 10 Munites</option>
                          <option value="15"> 15 Munites</option>
                          <option value="1440"> 1 Day</option>

                        </select>

                      </div>
                      <div class="collection-category">
                        <h3>Choose Item Category</h3>
                        <select class="form-select" aria-label="Default select example" onChange={e => updatebiding_Data({ ...biding_Data, Category: e.target.value })} >
                          <option selected>Choose Item Category</option>
                          <option value="Sports">Sports</option>
                          <option value="3D">3D</option>
                          <option value="Cartoon">Cartoon</option>
                          <option value="Pixelated">Pixelated</option>

                          <option value="Tattoo">Tattoo</option>
                          <option value="Music">Music</option>
                          <option value="Domains">Domains</option>
                          <option value="Gaming">Gaming</option>
                          <option value="Videos">Videos</option>
                          <option value="Art">Art</option>


                        </select>

                      </div>

                      <div class="item-details-btn mt-4">
                        <a class="default-btn border-radius-50" onClick={() => auction()} > {

                          IsSpinner == true ?
                            <>

                              < div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                              </div>

                            </>
                            :
                            "Complete listing"


                        }</a>
                      </div>


                    </>
                }



              </div>
            </div>
          </div>
        </div>
      </div >





    </>
  )
}

export default Collection_next
