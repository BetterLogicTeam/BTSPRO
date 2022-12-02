import React, { useEffect, useState } from 'react'
import Collection_card from '../Collection_card/Collection_card'

// import M_side2 from '../M_side/M_side2'
import M_side2 from "../M_side2/M_side2"
import Pip2 from '../Pip2/Pip2'
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils'
import Trending from '../Trending/Trending'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import profile_placeholder_image from '../../Assets/profile_placeholder_image.629dab34.jpg'
import { myCollection, runApp } from '../../Redux/counterSlice'
import { loadWeb3 } from '../../Api/api'
import download from '../../Assets/download.png'
import axios from 'axios'
import Loading from '../Loading/Loading';
import Market_card from '../Market_card/Market_card';
export default function Seller_Details() {
  const { id } = useParams();
  const count = useSelector((state) => state.counter.myArr)
  const [name, setName] = useState("User Name")
  const [bio, setBio] = useState(" User Data")
  const [email, setEmail] = useState("User Email")
  const [Image, setImage] = useState("")
  const [UserAddress, setUserAddress] = useState("User Addrss")
  const [Userdata, setUserdata] = useState([])
  const [IsSpinner, setIsSpinner] = useState(false)
  const [Marketplace, setMarketplace] = useState("");
  // console.log("Result",count);

  const dispatch = useDispatch()
  const [CollectionArray, setCollectionArray] = useState([])

  const history = useNavigate()
  let metaAddress = sessionStorage.getItem("meta-address");
  if (metaAddress) {
    metaAddress = JSON.parse(metaAddress).toUpperCase()
  }


  const runApp = async () => {
    let acc = await loadWeb3()
    let imageArray = [];

    let getUserAddress = await axios.get('https://server.nftapi.online/trending_address_marketplace');
    // console.log("Api_Data121", getUserAddress.data.data[id].User_Address);
    getUserAddress = getUserAddress?.data?.data
    setUserdata(getUserAddress[id].User_Address)
    
    let Address_NFt= await axios.get(`https://server.nftapi.online/sell_and_auction_history_address?useraddress=${getUserAddress[id].User_Address}`)
    setCollectionArray(Address_NFt.data.data)
    setMarketplace("sell_and_auction_history_address")

    console.log("Address_NFt",Address_NFt.data.data);
  }

  useEffect(() => {
    runApp();


  }, [])



  const EditProfile = async () => {
    let acc = await loadWeb3()
    setIsSpinner(true)
    let getUserAddress = await axios.get('https://server.nftapi.online/trending_address_marketplace');
    // console.log("Api_Data121", getUserAddress.data.data);
    getUserAddress = getUserAddress?.data?.data

    let res = await axios.get(`https://server.nftapi.online/get_user_profile?address=${getUserAddress[id].User_Address.toUpperCase()}`)
    // console.log("RES", res);

    if (res.data.success) {


      setName(res.data.data.username)
      setBio(res.data.data.bio)
      setEmail(res.data.data.email)
      setImage(res.data.data.image)
      setUserAddress(res.data.data.address)
      setIsSpinner(false)

      // setName(res.data.data.username)


    } else {

    }
  }


  useEffect(() => {
    EditProfile()

  }, [])

  return (
    <>
      <div class="inner-banner inner-bg102 ">
        <div class="container">
          <div class="inner-title">
            <h3> Author Profile</h3>
            <ul>
              <li><li><Link to="/" className='text-white'>Home</Link> </li></li>

              <li><a >Author Profile</a> </li>
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
          {
            IsSpinner ? <Loading /> : <></>

          }
          <div class="row">
            <div class="col-lg-3">
              <div class="author-profile-sidebar  mr-20">
                <div class="author-user pt-3">
                  <img src={Image ? `https://server.nftapi.online/uploads/${Image}` : "Avtat.png"} alt="Images" />
                  <i class="fa-solid fa-check"></i>
                </div>
                <h3>
                  <a >{name}</a>
                </h3>
                <span>{bio}</span>

                <div class="sp-title">{UserAddress.substring(0, 8) + "..." + UserAddress.substring(UserAddress.length - 8)} <i class="fa-solid fa-folder"></i></div>
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
                  CollectionArray.map((items, index) => {

                    return (
                      <>
                        <div class="col-lg-4 col-md-6" >

                        <Market_card img={items.url} img2={items.url} name={items.name} category={items.category} amount={items.price}
                            status={items.isOnAuction == 0 ? "Available for buying" : "Available for bidding"} btn={items.isOnAuction == 1 ? "Bid Now": items.useraddress?.toUpperCase() == metaAddress?.toUpperCase() ?  "Claim Now": "Buy"  }
                            isOnAuction={items.isOnAuction } bidEndTime={items.bidEndTime} history={items.isOnAuction == 0 ? `/Market_place2/${index}/0/${Marketplace}/${Userdata}` : `/Market_place2/${index}/1/${Marketplace}/${Userdata}`}
                            data={items} setIsSpinner={setIsSpinner}

                          />

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
