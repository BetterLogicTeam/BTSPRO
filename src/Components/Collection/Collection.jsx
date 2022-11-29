import React, { useEffect, useState } from 'react'
import "./Collection.css"
import Collection_card from '../Collection_card/Collection_card'

// import M_side2 from '../M_side/M_side2'
import M_side2 from "../M_side2/M_side2"
import Pip2 from '../Pip2/Pip2'
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils'
import Trending from '../Trending/Trending'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import profile_placeholder_image from '../../Assets/profile_placeholder_image.629dab34.jpg'

import { myCollection, runApp } from '../../Redux/counterSlice'
import { loadWeb3 } from '../../Api/api'
import axios from 'axios'
import { toast } from 'react-toastify'
import { CreateNFT, CreateNFT_ABI, nftMarketContractAddress, nftMarketContractAddress_Abi } from '../Utils/Contract'


function Collection() {

  const count = useSelector((state) => state.counter.myArr)
  const [name, setName] = useState("User Name")
  const [bio, setBio] = useState(" User Data")
  const [email, setEmail] = useState("User Email")
  const [Image, setImage] = useState("")
  const [UserAddress, setUserAddress] = useState("User Addrss")
  let [btnDisable, setbtnDisable] = useState(false);
  const [withdrawAmount, setwithdrawAmount] = useState("0")
  const [IsActive, setIsActive] = useState()


  // console.log("Result",count);

  let metaAddress = sessionStorage.getItem("meta-address");
  if (metaAddress) {
    metaAddress = JSON.parse(metaAddress).toUpperCase()
  }



  const dispatch = useDispatch()
  const [CollectionArray, setCollectionArray] = useState([])

  const history = useNavigate()
  // console.log("count",count.AllNFT[1]?.payload);

  const runApp = async () => {
    let imageArray = [];
    let acc = await loadWeb3()
    // console.log("UserAddress", UserAddress);
    // if (metaAddress != null) {
    await Moralis.start({
      apiKey: "6sSTRl3GXEZ9CZ3rZChKksJuBZS1hVkXalATDiIa8dczkYm7UbFsldAeJUbAwL02",
      // ...and any other configuration
    });

    const address = acc;

    const chain = EvmChain.BSC_TESTNET;
    // console.log("Chain",chain);

    let res = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
    });

    console.log("Res", res);


    res = res.data.result

    let loopLength = res.length;
    // console.log("Length",res.length);
    let name
    let symbol
    for (let i = 0; i < loopLength; i++) {
      // console.log("Url", res[i].token_uri);
      let jsonUsrl = res[i].token_uri;
      let contractAddress = res[i].token_address
      name = res[i].name;
      symbol = res[i].symbol;
      if (contractAddress.toUpperCase() == CreateNFT.toUpperCase()) {
        let web3 = window.web3
        let tokenid = res[i].token_id
        let nftContractOf = new web3.eth.Contract(CreateNFT_ABI, CreateNFT);
        let nftName = await nftContractOf.methods.name(tokenid).call();
        let nftsymbol = await nftContractOf.methods.symbol(tokenid).call();
        symbol = nftsymbol;
        name = nftName;
      }
      if (jsonUsrl == null) {
        jsonUsrl = profile_placeholder_image
        // console.log("Image_is_null");
      }
      else if (jsonUsrl.endsWith(".json")) {
        jsonUsrl = profile_placeholder_image
        // console.log("jsonUsrl",jsonUsrl);
      } else if (jsonUsrl.endsWith(".jpg")) {
        jsonUsrl = jsonUsrl;
        // console.log("jsonUsrl",jsonUsrl);
      }
      else if (jsonUsrl.startsWith("https://ipfs.moralis.io:2053/ipfs/") && jsonUsrl.endsWith(".jpg") || jsonUsrl.endsWith(".png")) {

        jsonUsrl = jsonUsrl

      }
      else if (jsonUsrl.startsWith("https://ipfs.moralis.io:2053/ipfs/")) {
        jsonUsrl = jsonUsrl
        // let Response= await axios.get(jsonUsrl);
        // Response = Response?.data?.properties?.image?.description
        // jsonUsrl = `https://ipfs.moralis.io:2053/${Response}`

        // console.log("Url",jsonUsrl);

        // let Api = await axios.get(jsonUsrl)
        // console.log("Api", Api.data.properties.image.description);
        // Api = Api.data.properties.image.description
        // jsonUsrl = `https://ipfs.moralis.io:2053/${Api}`

      }
      else {
        jsonUsrl = jsonUsrl
      }




      // console.log("img_url",jsonUsrl);


      let owner_of = res[i].owner_of;
      let token_address = res[i].token_address;
      let amount = res[i].amount;

      let token_id = res[i].token_id;


      let finalUrl;
      // =await axios.get(jsonUsrl);
      // finalUrl = finalUrl.data.image;
      imageArray = [
        ...imageArray,
        {
          url: finalUrl,
          name: name,
          owner_of: owner_of,
          token_address: token_address,
          amount: amount,
          symbol: symbol,
          token_id: token_id,
          jsonUsrl: jsonUsrl
        },
      ];

    }
    dispatch(myCollection(imageArray))


    // } else {

    // }

    // setCollectionArray(res.data.result)
  }

  useEffect(() => {
    runApp();

  }, [])



  const EditProfile = async () => {


    let acc = await loadWeb3()
    if (metaAddress == null) {

    } else {
      let res = await axios.get(`https://server.nftapi.online/get_user_profile?address=${metaAddress.toUpperCase()}`)


      if (res.data.success) {
        // console.log("UserNAme", res.data.data.username);

        setName(res.data.data.username)
        setBio(res.data.data.bio)
        setEmail(res.data.data.email)
        setImage(res.data.data.image)
        setUserAddress(res.data.data.address)

        // setName(res.data.data.username)


      } else {

      }
    }

  }

  const claim_Widthdraw = async () => {
    let acc = await loadWeb3();
    const web3 = window.web3;


    try {

      let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
      let Widthdraw = await nftContractOf.methods.getDueAmount(acc).call();
      Widthdraw = web3.utils.fromWei(Widthdraw)
      setwithdrawAmount(Widthdraw)
      console.log("Widthdraw", Widthdraw);
      if (Widthdraw == 0) {
        setbtnDisable(true)
      } else {
        setbtnDisable(false)

      }

    } catch (e) {

    }
  }
  const WidthdrawDueAmount = async () => {
    let acc = await loadWeb3();
    const web3 = window.web3;
    try {
      let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
      await nftContractOf.methods.withdrawDueAmount().send({
        from: acc,

      });
      toast.success("Withdraw Successfully")
      window.location.reload();



    } catch (e) {
      console.log("Error While WidthdrawDueAmount ", e);
    }
  }

  const check_condition = async (items_id, address, index) => {
    try {

      const web3 = window.web3;
      let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
      let Get_Item_ID = await nftContractOf.methods.tokenIdToItemId(address, items_id).call();


      let Chek_Active = await nftContractOf.methods.idToMarketItem(Get_Item_ID).call();
      console.log("Chek_Active", Chek_Active.isactive);
      setIsActive(Chek_Active.isactive)
      if (Chek_Active.isactive == true) {
        toast.error("Already Listed")
      } else {
        history('/Collection_next/' + index)
      }


    } catch (e) {
      console.log("Error While calling fuction idToMarketItem", e);
    }
  }


  useEffect(() => {
    EditProfile()
    claim_Widthdraw()

  }, [])

  return (
    <>

      <div class="inner-banner inner-bg11">
        <div class="container">
          <div class="inner-title">
            <h3> Collection</h3>
            <ul>
              <li><li><Link to="/" className='text-white'>Home</Link> </li></li>

              <li><a >Collection</a> </li>
            </ul>
            <div class="inner-shape">
              <img src="https://gible-nft.hibootstrap.com/images/inner-banner/inner-shape1.png" alt="Images" />
              <img src="https://gible-nft.hibootstrap.com/images/inner-banner/inner-shape2.png" alt="Images" />
            </div>
          </div>
        </div>
      </div>

      <div class="collection-widget-area pt-100 pb-70">

        <div class="container">
          {/* {
            metaAddress == null ? <></> :
              <> */}
          <div class="row">
            <div class="col-lg-3">
              <div class="author-profile-sidebar  mr-20">
                <div class="author-user pt-3">
                  <img src={Image ? `https://server.nftapi.online/uploads/${Image}` : "Avtat.png"} alt="Images" style={{ width: "15rem" }} />
                  <i class="fa-solid fa-check"></i>
                </div>
                <h3>
                  <a >{name}</a>
                </h3>
                <span>{bio}</span>

                <div class="sp-title">{UserAddress.substring(0, 8) + "..." + UserAddress.substring(UserAddress.length - 8)} <i class="fa-solid fa-folder"></i></div>
                <div class="author-content">
                  <div class="content-left">
                    <span> Amount</span>
                    <h6>{withdrawAmount}</h6>
                  </div>
                  <button class=" btn content-right" disabled={btnDisable} onClick={() => WidthdrawDueAmount()}>Withdraw

                    {/* <ul class="author-social">
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-instagram"></i></a></li>
                    <li><a href="https://twitter.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a></li>
                  </ul> */}
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="row justify-content-center">
                {
                  count.map((items, index) => {
                    return (
                      <>
                        <div class="col-lg-4 col-md-6" style={{ cursor: "pointer" }}>

                          <div class="featured-card box-shadow" onClick={() => (check_condition(items.token_id, items.token_address, index))}>
                            <div class="featured-card-img">
                              <a >
                                <img src={items.jsonUsrl} alt="Images" style={{ height: "20rem", width: "100%" }} />
                              </a>

                              {/* <button type="button" class="default-btn border-radius-5">Place Bid</button> */}
                            </div>
                            <div class="content">
                              <h3>
                                <a >{items.name}</a>
                              </h3>
                              <div class="content-in">
                                <div class="featured-card-left">
                                  <span>{items.amount} BNB </span>



                                </div>
                                {/* <span>{items.symbol}  </span> */}
                                <a class="featured-content-btn" ><i class="fa-solid fa-arrow-right"></i></a>
                              </div>
                              <a class="featured-user-option" >
                                <img src={items.jsonUsrl} alt="Images" />
                                <span>Created by {items.owner_of?.substring(0, 5) + "..." + items.owner_of?.substring(items.owner_of?.length - 5)}</span>
                              </a>
                            </div>
                          </div>

                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>

            <div class="trending-area trending-area-bg-two pt-100 pb-70">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 col-md-6">
                    <div class="section-title">
                      <h2>Trending Artwork</h2>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="trending-btn text-end">
                      <a class="default-btn border-radius-5" href="/item-details">Explore More</a>
                    </div>
                  </div>
                </div>
                <div class="trending-slider pt-45">
                  <div class="owl-carousel owl-loaded">
                    <div class="owl-stage-outer">
                      <div class="owl-stage" style="transform: translate3d(-2088px, 0px, 0px); transition: all 0.5s ease 0s; width: 3828px;">
                        <div class="owl-item cloned" style="width: 348px;">
                          <div class="trending-item">
                            <div class="trending-img">
                              <a href="/item-details">
                                <img src="../images/trending/trending-img8.jpg" alt="Images" />
                              </a>
                              <div class="trending-user">
                                <a class="trending-user-option" href="/author-profile">
                                  <img src="../images/trending/trending-user3.jpg" alt="Images" />
                                  <span>Created by @Anvi</span>
                                </a>
                              </div>
                              <button type="button" class="default-btn border-radius-5">Place Bid</button>
                              <div class="trending-title">
                                <span>120 ETH 12/14</span>
                                <h3>Bid 70 ETH</h3>
                              </div>
                            </div>
                            <div class="content"><h3><a href="/item-details">Walking on Air</a></h3><span><i class="ri-heart-line"></i> 190</span>
                            </div>
                          </div>
                        </div>
                        <div class="owl-item cloned" style="width: 348px;">
                          <div class="trending-item">
                            <div class="trending-img">
                              <a href="/item-details">
                                <img src="../images/trending/trending-img8.jpg" alt="Images" />
                              </a>
                              <div class="trending-user">
                                <a class="trending-user-option" href="/author-profile">
                                  <img src="../images/trending/trending-user3.jpg" alt="Images" />
                                  <span>Created by @Anvi</span>
                                </a>
                              </div>
                              <button type="button" class="default-btn border-radius-5">Place Bid</button>
                              <div class="trending-title">
                                <span>120 ETH 12/14</span>
                                <h3>Bid 70 ETH</h3>
                              </div>
                            </div>
                            <div class="content">
                              <h3><a href="/item-details">Walking on Air</a></h3>
                              <span><i class="ri-heart-line"></i> 190</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="owl-nav">
                      <div class="owl-prev">
                        <i class="ri-arrow-left-s-line"></i>
                      </div>
                      <div class="owl-next"><i class="ri-arrow-right-s-line"></i></div>
                    </div>
                    <div class="owl-dots disabled"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* </>

          } */}

        </div>
      </div>

    </>

  )
}

export default Collection
