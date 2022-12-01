import React, { useState, useEffect } from "react";
// import logo from "../../logo.png";
import { useDispatch } from "react-redux";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { Redirect } from "react-router-dom";
// import { setUser } from "../../features/userSlice";
// import { db } from "../../firebase";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import logo_dark from '../../Assets/logo_h.png'
import axios from "axios";
import './96b37438d38568123102.css'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";




let acc;
const Header = ({ setUserAddress }) => {
  
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
    <>
      <div class="navbar-area">
        <div class="mobile-responsive-nav">
          <div class="container-fluid">
            <div class="mobile-responsive-menu">



              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                  <div class="logo">
                    <a class="" href="/">
                      <img src={logo_dark} alt="logo" className="log_navbar" />
                    </a>
                  </div>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav>
                      <li class="nav-item"><a class="nav-link" href="/" >Home</a></li>
                      <li class="nav-item"><a class="nav-link" href="/market_place" > MarketPlace</a></li>
                      <li class="nav-item"><a class="nav-link" href="/collection" >Collection</a></li>
                      <li class="nav-item"> <a class="nav-link">   <div class="others-options">
                        <ul class="optional-item-list">
                          <li class="nav-item"> <a href="/Create_pro">Create </a> </li>

                          {
                            !address ? (

                              <li style={{ cursor: "pointer" }}><a class="active" onClick={() => connectMetaMask()}><span className="text-white">Connect Wallet</span> </a></li>
                            )
                              :



                              <ul class="">
                                {
                                  !userData ?
                                    <li class="nav-item Avtar_Header"><Link to="/Create_User_profile" className="Avtar_Header">  <Avatar alt="" src={`https://server.nftapi.online/uploads/${userData}` || "/static/images/avatar/1.jpg"} /></Link></li>

                                    :
                                    <li class="nav-item Avtar_Header"><Link to="/User_Profile" className="Avtar_Header">  <Avatar alt="" src={`https://server.nftapi.online/uploads/${userData}` || "/static/images/avatar/1.jpg"} /></Link></li>

                                }
                                {/* <li class="nav-item Avtar_Header">  <Avatar alt="" src={`https://server.nftapi.online/uploads/${userData}` || "/static/images/avatar/1.jpg"} /><i class="fa-sharp fa-solid fa-caret-down"></i>
                                  <ul class="dropdown-menu">
                                  
                                    {
                                      !userData ?
                                        <li class="nav-item"><a class="nav-link active " > <Link to="/Create_User_profile"> Create Profile</Link></a></li>
                                        :
                                        null
                                    }
                                    <li class="nav-item"><a class="nav-link active " > <Link to="/User_Profile"> User Profile</Link></a></li>
                                    <li class="nav-item"><a class="nav-link"  ><Link to="/Edit_Profile"> Edit Profile</Link></a></li>

                                  </ul>
                                </li> */}
                              </ul>

                          }

                        </ul>


                      </div></a> </li>




                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>


        <div class="desktop-nav desktop-nav-one nav-area pt-2">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-md navbar-light ">
              <a class="navbar-brand" href="/">
                <img src={logo_dark} alt="Logo" />
              </a>
              <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto">

                  <li class="nav-item"><a class="nav-link" ><Link to="/">Home</Link></a></li>
                  <li class="nav-item"><a class="nav-link" > <Link to="market_place">MarketPlace</Link></a></li>
                  {

                    !address ? null : <li class="nav-item"><a class="nav-link" ><Link to="/collection">Collection</Link></a></li>
                  }
                </ul>
                <div class="others-options">
                  <ul class="optional-item-list">
                    <li> <Link to="/Create_pro">Create</Link></li>

                    {
                      !address ? (

                        <li style={{ cursor: "pointer" }}><a class="active" onClick={() => connectMetaMask()}>Connect Wallet</a></li>
                      )
                        :

                        <ul class="navbar-nav m-auto">
                               {
                                  !userData ?
                                    <li class="nav-item Avtar_Header"><Link to="/Create_User_profile" className="Avtar_Header">  <Avatar alt="" src={`https://server.nftapi.online/uploads/${userData}` || "/static/images/avatar/1.jpg"} /></Link></li>

                                    :
                                    <li class="nav-item Avtar_Header"><Link to="/User_Profile" className="Avtar_Header">  <Avatar alt="" src={`https://server.nftapi.online/uploads/${userData}` || "/static/images/avatar/1.jpg"} /></Link></li>

                                }
                          {/* <li class="nav-item Avtar_Header">  <Avatar alt="" src={`https://server.nftapi.online/uploads/${userData}` || "/static/images/avatar/1.jpg"} /><i class="fa-sharp fa-solid fa-caret-down"></i>
                            <ul class="dropdown-menu">

                              {
                                !userData ?
                                  <li class="nav-item"><a class="nav-link  " > <Link to="/Create_User_profile"> Create Profile</Link></a></li>
                                  :
                                  null
                              }

                              <li class="nav-item"><a class="nav-link  " > <Link to="/User_Profile"> User Profile</Link></a></li>
                              <li class="nav-item"><a class="nav-link" ><Link to="/Edit_Profile"> Edit Profile</Link></a></li>

                            </ul>
                          </li> */}
                        </ul>

                    }

                  </ul>


                </div>
              </div>
            </nav>
          </div>
        </div>
        <div class="mobile-nav">
          <div class="search-btn global-pointer">
            <a data-bs-toggle="modal" data-bs-target="#searchmodal"><i class="ri-search-line"></i></a>
          </div>
        </div>
        <div class="side-nav-responsive">
          <div class="container-max">

            <div class="container container-mt">
              <div class="side-nav-inner">
                <div class="side-nav justify-content-center align-items-center">
                  <div class="side-nav-item">
                    <ul class="optional-item-list">
                      <li><a class="" href="/create-collection">Create</a></li>
                      <li><a class="active" href="/add-wallet">Connect Wallet</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
