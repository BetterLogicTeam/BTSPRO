import { Avatar } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import './96b37438d38568123102.css'
// import './style.css'
import logo_dark from '../../Assets/logo copy.png'




let acc;
export default function NavbarNav({ setUserAddress }) {
    const [ThresDot, setThresDot] = useState(false)
    const [dropdownShow, setdropdownShow] = useState(false)
    const [ModelShow, setModelShow] = useState(false)
    const [address, setAddress] = useState(null);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(null);
    const [IsUserprofile, setIsUserprofile] = useState(true)

    const history = useNavigate();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        console.log("working");
    };

    const connectMetaMask = async () => {
        if (typeof window.ethereum !== "undefined") {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const account = accounts[0];
            alert(`You Are Connected Now ${account}`);
            setAddress(account);
            setUserAddress(account)
            storeAddress(account.toUpperCase());
            // window.location.reload();
        } else {
            alert(
                "Please Install MetaMask: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'"
            );
        }
        window.onload()
    };

    const fetchData = async () => {


        if (address) {

            let res = await axios.get(`https://server.nftapi.online/get_user_profile?address=${address}`)


            if (res?.data.success == false) {

                // history("/Create_User_profile");

            } else {

                setUserData(res?.data?.data?.image)
            }
        }


    };

    const storeAddress = async (address) => {

        if (address) {
            let res = await axios.get(`https://server.nftapi.online/get_user_profile?address=${address}`)


            if (res?.data.success == false) {
                setIsUserprofile(false)
                history("/Create_User_profile");
                window.location.reload();

            } else {
                setUserData(res?.data?.data?.image)
                window.location.reload();

            }

        }
    };
    const disconnect = () => {
        console.log("disconnect call");
        sessionStorage.removeItem("meta-address");
        setAddress(null);
    };
    useEffect(() => {
        const metaAddress = sessionStorage.getItem("meta-address");
        if (metaAddress) {
            setAddress(JSON.parse(metaAddress).toUpperCase());
            acc = metaAddress;
        }
        // console.log(window.ethereum);
        if (window.ethereum) {

            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts) {
                    // console.log(accounts);
                    if (acc) {
                        acc = null;
                    }
                    disconnect();
                } else if (acc && acc !== accounts[0]) {
                    connectMetaMask();
                }
            });

            // detect Network account change
            // window.ethereum.on("networkChanged", (networkId) => {
            //   console.log("networkChanged", networkId);
            //   if (networkId === "3") setBadge(false);
            //   else setBadge(true);
            // });
        }
    }, []);
    useEffect(() => {
        // fetchData();

        if (address) {

            sessionStorage.setItem("meta-address", JSON.stringify(address));
            fetchData();
        }
        // props.updateAddress(address);
    }, [address]);



    return (
        <body>
            {/* <div className="preloader">
                <div className="spinner">
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                </div>
            </div> */}
            <div className="navbar-area">
                <div className="mobile-responsive-nav">
                    <div className="container-fluid">
                        <div className="mobile-responsive-menu mean-container">
                            <div className="mean-bar">
                                <a className="meanmenu-reveal meanclose" onClick={() => ThresDot == false ? setThresDot(true) : setThresDot(false)} style={{ right: "0px", left: "auto", textAlign: "center", textIndent: "0px", fontSize: "18px" }}>
                                    <span>
                                        <span>
                                            <span>
                                            </span>
                                        </span>
                                    </span>
                                </a>
                                <nav className="mean-nav" style={{ display: ThresDot == true ? "block" : "none" }} >
                                    <ul className="navbar-nav m-auto" >
                                        <li className="nav-item" onClick={() => setThresDot(false)}>
                                            <Link to="/">
                                                <a className="nav-link active">
                                                    Home
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item" onClick={() => dropdownShow == false ? setdropdownShow(true) : setdropdownShow(false)} >
                                            <Link >

                                                <a href="#" className="nav-link ">
                                                    About Bitpro
                                                    <i className="ri-arrow-down-s-line"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu" style={{ display: dropdownShow == true ? "block" : "none" }}>
                                                <li className="nav-item" onClick={() => setThresDot(false)}>
                                                    <Link to="/About">
                                                        <a className="nav-link">
                                                            About Us
                                                        </a>
                                                    </Link>

                                                </li>
                                                <li className="nav-item" onClick={() => setThresDot(false)}>

                                                    <Link to="/TermandCondition">
                                                        <a className="nav-link">
                                                            Terms & Conditions
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item" onClick={() => setThresDot(false)}>
                                                    <Link to="/PrivacyPolicy">

                                                        <a className="nav-link">
                                                            Privacy Policy
                                                        </a>

                                                    </Link>
                                                </li>
                                            </ul>
                                            <a className="mean-expand" href="#" style={{ fontSize: "18px" }} onClick={() => dropdownShow == false ? setdropdownShow(true) : setdropdownShow(false)} >+</a></li>
                                        <li className="nav-item" onClick={() => setThresDot(false)}>
                                            <Link to="/market_place">
                                                <a className="nav-link">
                                                    MarketPlace
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item" onClick={() => setThresDot(false)}>
                                            <Link to="/Contact_Us">

                                                <a className="nav-link">
                                                    Contact Us
                                                </a>

                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="others-options">
                                        <ul className="optional-item-list" style={{ display: "none" }}>
                                            <li> <Link to="/Create_pro"><a >Create</a></Link> </li>
                                            {
                                                !address ? (

                                                    <li style={{ cursor: "pointer" }}><a className="active" onClick={() => connectMetaMask()}><span classNameName="text-white">Connect Wallet</span> </a></li>
                                                )
                                                    :
                                                    <Avatar alt="" src={`https://server.nftapi.online/uploads/${userData}` || "/static/images/avatar/1.jpg"} />


                                            }
                                            {/* <li><a href="add-wallet.html" className="active">Connect Wallet</a></li> */}
                                        </ul>
                                        <ul className="navbar-nav ms-3" style={{ display: "none" }}>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <svg className="css-13y7ul3" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonIcon"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                                                </a>
                                                <ul className="dropdown-menu" style={{ display: "none" }}>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">
                                                            User Profile
                                                        </a>
                                                    </li>
                                                    <li className="nav-item mean-last">
                                                        <a href="collection.html" className="nav-link">
                                                            Collection
                                                        </a>
                                                    </li>
                                                </ul>
                                                <a className="mean-expand" href="#" >+</a></li>
                                        </ul>
                                    </div>
                                </nav></div>
                            <div className="logo">
                                <a href="index.html">
                                    <img src="assets/images/logo-2.png" className="logo-one" alt="Logo" />
                                    <img src={logo_dark} className="logo-two" alt="Logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="mobile-responsive-nav">
                    <div className="container-fluid">
                        <div className="mobile-responsive-menu">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="assets/images/logo-2.png" className="logo-one" alt="Logo" />
                                    <img src={logo_dark} className="logo-two" alt="Logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="desktop-nav desktop-nav-one nav-area">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light ">
                            <a className="navbar-brand" href="index.html">
                                <img src={logo_dark} alt="Logo" />
                            </a>
                            <div className="nav-widget-form">
                                <div className="search-form">
                                    <input type="search" className="form-control" placeholder="Search items, Creators " />
                                    <button type="submit">
                                        <i className="ri-search-line"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link to="/">
                                            <a className="nav-link ">
                                                Home
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link ">
                                            About Bitpro
                                            <i className="ri-arrow-down-s-line"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link to="/About">
                                                    <a className="nav-link">
                                                        About Us
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/TermandCondition">
                                                    <a className="nav-link">
                                                        Terms & Conditions
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/PrivacyPolicy">

                                                    <a className="nav-link">
                                                        Privacy Policy
                                                    </a>

                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/market_place">
                                            <a href="discover-2.html" className="nav-link">
                                                MarketPlace
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Contact_Us">

                                            <a className="nav-link">
                                                Contact Us
                                            </a>

                                        </Link>
                                    </li>
                                </ul>
                                <div className="others-options">


                                    <ul className="optional-item-list">
                                        <li> <Link to="/Create_pro">Create</Link> </li>
                                        {
                                            !address ? (

                                                <li style={{ cursor: "pointer" }}><a className="active" onClick={() => connectMetaMask()}><span classNameName="text-white">Connect Wallet</span> </a></li>
                                            )
                                                :



                                                null

                                        }
                                        {/* <li><a className="active">Connect Wallet</a></li> */}
                                    </ul>


                                    {
                                        address && (
                                            <ul className="navbar-nav ms-3">
                                                <li className="nav-item">
                                                    {
                                                        !userData ?
                                                            <Link to="/Create_User_profile" classNameName="Avtar_Header">  <Avatar alt="" src={`https://server.nftapi.online/uploads/${userData}` || "/static/images/avatar/1.jpg"} /></Link>
                                                            :
                                                            <Avatar alt="" src={`https://server.nftapi.online/uploads/${userData}` || "/static/images/avatar/1.jpg"} />

                                                    }
                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link to="/User_Profile" >
                                                                <a className="nav-link">
                                                                    User Profile
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/collection">

                                                                <a className="nav-link">
                                                                    Collection
                                                                </a>

                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        )
                                    }

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="mobile-nav">
                    <div className="search-btn">
                        <a className="#" href="#searchmodal" data-bs-toggle="modal" data-bs-target="#searchmodal">
                            <i className="ri-search-line"></i>
                        </a>
                    </div>
                </div>
                <div className="side-nav-responsive">
                    <div className="container-max">
                        <div className="dot-menu dot-menu-mt" onClick={() => ModelShow == false ? setModelShow(true) : setModelShow(false)}>
                            <div className="circle-inner">
                                <div className="circle circle-one"></div>
                                <div className="circle circle-two"></div>
                                <div className="circle circle-three"></div>
                            </div>
                        </div>
                        <div className={ModelShow ? "container container-mt active" : "container container-mt "}>
                            <div className="side-nav-inner">
                                <div className="side-nav" >
                                    <div className="side-nav-item">
                                        <ul className="optional-item-list" style={{ flexDirection: "column" }}>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                                <li onClick={()=>setModelShow(false)}> <Link to="/Create_pro">Create</Link> </li> 
                                                {
                                                    !address ? (

                                                        <li style={{ cursor: "pointer" }} ><a className="active" onClick={() => connectMetaMask()}><span classNameName="text-white">Connect Wallet</span> </a></li>
                                                    )
                                                        :
                                                        <>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <Avatar alt="" src={`https://server.nftapi.online/uploads/${userData}` || "/static/images/avatar/1.jpg"} />

                                                        </>


                                                }
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <li className="nav-item" onClick={()=>setModelShow(false)}>
                                                    <Link to="/User_Profile" >

                                                        User Profile

                                                    </Link>
                                                </li>
                                                <li className="nav-item" onClick={()=>setModelShow(false)}>
                                                    <Link to="/collection">


                                                        Collection


                                                    </Link>
                                                </li>
                                            </div>


                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade fade-scale searchmodal" id="searchmodal" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal">
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="modal-search-form">
                                <input type="search" className="search-field" placeholder="Search..." />
                                <button type="submit"><i className="ri-search-line"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}
