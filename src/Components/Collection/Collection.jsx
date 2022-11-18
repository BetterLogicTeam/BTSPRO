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

import {myCollection,runApp} from '../../Redux/counterSlice'
import { loadWeb3 } from '../../Api/api'
import axios from 'axios'


function Collection() {

  const count = useSelector((state) => state.counter.myArr)
  const [name, setName] = useState("User Name")
    const [bio, setBio] = useState(" User Data")
    const [email, setEmail] = useState("User Email")
    const [Image, setImage] = useState("")
    const [UserAddress, setUserAddress] = useState("User Addrss")
            // console.log("Result",count);

  const dispatch = useDispatch()
  const [CollectionArray, setCollectionArray] = useState([])

  const history=useNavigate()
// console.log("count",count.AllNFT[1]?.payload);

  const runApp = async () => {
    let acc = await loadWeb3()
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
    dispatch(myCollection(response.data.result))
    // setCollectionArray(response.data.result)
    console.log(response.data.result);
  }

  useEffect(() => {
    runApp();
   
  }, [])

  

  const EditProfile=async()=>{
    let acc =await loadWeb3()
    
  let res = await axios.get(`https://server.nftapi.online/get_user_profile?address=${acc.toUpperCase()}`)


  if (res.data.success) {
   

  setName(res.data.data.username)
  setBio(res.data.data.bio)
  setEmail(res.data.data.email)
  setImage(res.data.data.image)
  setUserAddress(res.data.data.address)

    // setName(res.data.data.username)
   
    
  } else {
   
  }
}


useEffect(() => {
    EditProfile()

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
          <div class="row">
            <div class="col-lg-3">
              <div class="author-profile-sidebar  mr-20">
                <div class="author-user pt-3">
                  <img src={ Image ? `https://server.nftapi.online/uploads/${Image}`: "Avtat.png" } alt="Images" />
                  <i class="fa-solid fa-check"></i>
                </div>
                <h3>
                  <a >{name}</a>
                </h3>
                <span>{bio}</span>
                
                <div class="sp-title">{ UserAddress.substring(0, 8) + "..." + UserAddress.substring(UserAddress.length - 8)} <i class="fa-solid fa-folder"></i></div>
                <div class="author-content">
                  <div class="content-left">
                    <span>Followers</span>
                    <h4>0</h4>
                  </div>
                  <div class="content-right">Follow<ul class="author-social">
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-instagram"></i></a></li>
                    <li><a href="https://twitter.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a></li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="row justify-content-center">
                {
                  count.map((items,index) => {
                    return (
                      <>
                        <div class="col-lg-4 col-md-6" >
                       
                          <div class="featured-card box-shadow" onClick={()=>history('/Collection_next/' + index )}>
                            <div class="featured-card-img">
                              <a >
                                <img src={items.token_uri == null || items.token_uri.endsWith(".json") ?  "profile_placeholder_image.629dab34.jpg" : items.token_uri} alt="Images" style={{height:"20rem",width:"100%"}} />
                              </a>
                              <p>
                                <i class="fa-regular fa-heart"></i> 122
                              </p>
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
                                <a class="featured-content-btn" ><i class="fa-solid fa-arrow-right"></i></a>
                              </div>
                              <a class="featured-user-option" >
                                <img src={items.token_uri == null || items.token_uri.endsWith(".json") ?  "profile_placeholder_image.629dab34.jpg" : items.token_uri} alt="Images" />
                                <span>Created by {  items.owner_of?.substring(0, 5) + "..." + items.owner_of?.substring(items.owner_of?.length - 5)}</span>
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
          </div>
        </div>
      </div>

    </>

  )
}

export default Collection
