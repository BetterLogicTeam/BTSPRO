import React, { useEffect, useState } from 'react';
import './Landing.css';
import home_1 from "../../Assets/home_1.jpg";
import home_2 from "../../Assets/home_2.jpg";
import author_1 from "../../Assets/author_1.jpg";
import author_2 from "../../Assets/author_2.jpg";
// import circle_1 from "../../Assets/circle_1.png";
// import circle_2 from "../../Assets/circle_2.png";
// import bg_shape from "../../Assets/bg_shape.png";
import { BiRightArrowAlt } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom"
import { loadWeb3 } from '../../Api/api';
import axios from 'axios';
import Market_card from '../Market_card/Market_card';
import Countdown from 'react-countdown';
import { style } from '@mui/system';


function Landing() {
    let navigation = useNavigate()

    const [Tranding_NFTs, setTranding_NFTs] = useState([])

    const [startTime2, setstartTime2] = useState()



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
    const fetchData = async () => {
        let acc = await loadWeb3()
        let getUserAddress = await axios.get('https://server.nftapi.online/get_trending_NFTs');
        console.log("Trandinggg", getUserAddress.data.data)
        if (getUserAddress.data.data == null) {

        } else {

            setTranding_NFTs(getUserAddress.data.data)
        }

    };





    useEffect(() => {

        fetchData()
        // SecondArray()
    }, [])


    return (
        <div>
            <div className="landing_main">
                <div className="banner-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="banner-content responsive_content">
                                    <span>Buying &amp; Selling NFT World</span><h1>Discover, Collect, and Sell Extraordinary NFTs</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam etiam rhoncus aenean a iaculis aliquet rhoncus sed. Accumsan sit consequat, sodales consectetur. Egestas scelerisque ut dui sed nulla morbi quam eget luctus. In a vel morbi sed nisi.</p>
                                    <div className="banner-btn responsive_dir">
                                        <Link to='/market_place' className='text-white text-decoration-none' >  <a className="default-btn border-radius-5 responsive_btttn " href="/about">Explore More</a></Link>
                                        <Link to='/Create_pro' className='text-white text-decoration-none' >  <a className="default-btn two border-radius-5 responsive_btttn res_mar " href="/add-wallet">Create NFT </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-card-area">
                                    <div className="row">
                                        {
                                            Tranding_NFTs.slice(0,2).map((items, index) => {

                                                return (
                                                    <>
                                                        <div className="col-lg-6 col-sm-6"  >
                                                            <div className="banner-card" style={{ marginTop: index == 1 ? "2rem" : "0rem" }}>
                                                                <div className="banner-card-img">
                                                                    <img src={items.url} alt="Images" style={{ height: "27rem" }} />
                                                                    <div className="banner-card-content">
                                                                        {/* <div className="card-left">
                                                                            <span>{ items.isOnAuction == 1 &&  startTime2==true ?  "Sell Ended": items.status}</span>
                                                                            <h5>{items.price} BNB</h5>
                                                                        </div> */}
                                                                        <div className="card-right " >

                                                                            {/* <h3>Remaining Time</h3> */}
                                                                            <div className='Timer_position'>

                                                                                <div className="timer-text" id="time1" data-countdown="2021/10/10">
                                                                                    {
                                                                                        items.isOnAuction == 1 ? <Countdown date={Date.now() + (((parseInt(items.bidEndTime) * 1000)) - Date.now())} renderer={renderer} /> : null
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="content">
                                                                    <div className="banner-user-list">
                                                                        <div className="banner-user-list-img">
                                                                            <a>
                                                                                <img src={items.url} alt="Images" style={{ width: "3.5rem", height: "3.5rem" }} />
                                                                            </a>
                                                                            <i class="fa-solid fa-check"></i>
                                                                        </div>
                                                                        <h3><a >{items.name}</a></h3>
                                                                        <span>Created by <a >{items.useraddress?.substring(0, 4) + "..." + items.useraddress?.substring(items.useraddress?.length - 4)}</a></span>
                                                                    </div>
                                                                    <a className="banner-user-btn" ><BiRightArrowAlt /></a>
                                                                    <button type="button" className="default-btn border-radius-5" onClick={() => navigation(`/Market_place2/${index}/1/OnAuction_marketplace_history/tranding`)}>Place Bid</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-6 col-sm-6">
                  <Market_card img={items.url} img2={items.url} name={items.name} category={items.category} amount={items.price}
                    status={items.isOnAuction == 0 ? "Available for buying" : "Available for bidding"} btn={items.isOnAuction == 0 ? "Buy" : "Bid Now"}
                    isOnAuction={items.isOnAuction} bidEndTime={items.bidEndTime} history={items.isOnAuction == 0 ? `/Market_place2/${index}/0/OnAuction_marketplace_history/tranding` : `/Market_place2/${index}/1/OnAuction_marketplace_history/tranding`}


                  />
                </div> */}

                                                    </>
                                                )
                                            })
                                        }
                                        {/* <div className="col-lg-6 col-sm-6">
                                            <div className="banner-card">
                                                <div className="banner-card-img">
                                                    <img src={home_1} alt="Images" />
                                                    <div className="banner-card-content">
                                                        <div className="card-left">
                                                            <span>Start Bid</span>
                                                            <h3>15,00 ETH</h3>
                                                        </div>
                                                        <div className="card-right">
                                                            <h3>Remaining Time</h3>
                                                            <div className="timer-text" id="time1" data-countdown="2021/10/10">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="banner-user-list">
                                                        <div className="banner-user-list-img">
                                                            <a href="/author-profile">
                                                                <img src={author_1} alt="Images" />
                                                            </a>
                                                            <i className="ri-check-line"><TiTick /></i>
                                                        </div>
                                                        <h3><a href="/author-profile">Flowers in Concrete</a></h3>
                                                        <span>Created by<a href="/author-profile">@Evelyn</a></span>
                                                    </div>
                                                    <a className="banner-user-btn" href="/author-profile"><BiRightArrowAlt /></a>
                                                    <button type="button" className="default-btn border-radius-5">Place Bid</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="banner-card banner-card-mt">
                                                <div className="banner-card-img">
                                                    <img src={home_2} alt="Images" />
                                                    <div className="banner-card-content">
                                                        <div className="card-left">
                                                            <span>Start Bid</span>
                                                            <h3>11,00 ETH</h3>
                                                        </div>
                                                        <div className="card-right">
                                                            <h3>Remaining Time</h3>
                                                            <div className="timer-text" id="time2" data-countdown="2021/09/09"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="banner-user-list">
                                                        <div className="banner-user-list-img">
                                                            <a href="/author-profile">
                                                                <img src={author_2} alt="Images" />
                                                            </a>
                                                            <i className="ri-check-line"><TiTick /></i>
                                                        </div>
                                                        <h3><a href="/author-profile">Walking on Air</a></h3>
                                                        <span>Created by<a href="/author-profile">@Adison</a></span>
                                                    </div>
                                                    <a className="banner-user-btn" href="/author-profile"><BiRightArrowAlt /></a>
                                                    <button type="button" className="default-btn border-radius-5">Place Bid</button>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="banner-shape">
                        <div class="shape-circle1">\
                            <img src="https://gible-nft.hibootstrap.com/images/home-one/circle1.png" alt="Images" />
                        </div>
                        <div class="shape-circle2">
                            <img src="https://gible-nft.hibootstrap.com/images/home-one/circle2.png" alt="Images" />
                        </div>
                        <div class="shape-bg">
                            <img src="https://gible-nft.hibootstrap.com/images/home-one/bg-shape.png" alt="Images" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing