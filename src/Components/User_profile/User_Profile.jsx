import { Avatar } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loadWeb3 } from '../../Api/api';
import './User_Profile.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiOutlineCopy } from 'react-icons/ai'

export default function User_Profile() {
    const metaAddress = sessionStorage?.getItem("meta-address");
    let Address = JSON?.parse(metaAddress).toUpperCase()

    const inputRef = useRef();
    const [imageAsFile, setImageAsFile] = useState(null);

    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [email, setEmail] = useState("")
    const [Image, setImage] = useState("")
    const [UserAddress, setUserAddress] = useState("")
    const [copyTest, setcopyTest] = useState(false)





    const UserProfile = async () => {

        let res = await axios.get(`https://server.nftapi.online/get_user_profile?address=${Address.toUpperCase()}`)

        console.log("Res", res.data.data);

        if (res.data.success) {
            setName(res.data.data.username)
            setBio(res.data.data.bio)
            setEmail(res.data.data.email)
            setImage(res.data.data.image)
            setUserAddress(res.data.data.address)

        } else {

        }
    }


    useEffect(() => {
        UserProfile()

    }, [])
    useEffect(() => {
        copyTest ? toast.success("Copied") : <></>
        setTimeout(() => {
            setcopyTest(false)
        }, 10);
    }, [copyTest])



    return (
        <div>
            <div class="inner-banner inner-bg5">
                <div class="container">
                    <div class="inner-title">
                        <h3> User Profile</h3>
                        <ul><li><Link to='/' className='text-white'>Home</Link> </li><li><a href="#"> User Profile</a></li></ul>
                        <div class="inner-shape">
                            <img src="https://gible-nft.hibootstrap.com/images/inner-banner/inner-shape1.png" alt="Images" />
                            <img src="https://gible-nft.hibootstrap.com/images/inner-banner/inner-shape2.png" alt="Images" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="user-area pt-100 pb-70">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="user-all-form">
                                <div class="contact-form">
                                    <h3> User Profile </h3>
                                    <div class="bar">
                                    </div>

                                    <div class="row">
                                        <div className="col-lg-5 mt-3">
                                            <div className="Avatra_profile">
                                                <Avatar
                                                    alt=""
                                                    // src="Avtat.png"
                                                    src={`https://server.nftapi.online/uploads/${Image}`}
                                                    sx={{ width: 250, height: 250 }}
                                                />


                                                {/* <input
                                                    className="img__input"
                                                    onChange={handleImageAsFile}

                                                    type="file"
                                                    ref={inputRef}
                                                    style={{ display: "none" }}
                                                /> */}
                                                {/* <div class="col-lg-6 col-md-12 text-center mt-4">
                                                    <button type="submit" class="default-btn" onClick={() => {
                                                        inputRef.current.click();
                                                    }}>Change profile picture</button>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label className='fs-5 fw-1'>User Name</label> : {name}

                                                </div>
                                            </div>
                                            <div class="col-lg-12 ">
                                                <div class="form-group">
                                                    <label className='fs-5 fw-1'>Email</label> : {email}

                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label className='fs-5 fw-1'>Information</label> : {bio}

                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label className='fs-5 fw-1'>Address</label> :
                                                    <span className="show_large">
                                                    {UserAddress}

                                                    </span>
                                                    <span className="show_small">

                                                    {UserAddress.substring(0, 8) + "..." + UserAddress.substring(UserAddress.length - 8)}
                                                    </span>

                                                    <CopyToClipboard text={UserAddress}
                                                        onCopy={() => setcopyTest(true)}  >
                                                        <span class="wdg-actions copy_btn_set2">
                                                            <AiOutlineCopy className='copy_Icon' />

                                                        </span>
                                                    </CopyToClipboard>
                                                    {/* {UserAddress} */}

                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-12 text-center">
                                                <Link to="/Edit_Profile">

                                                    <button type="submit" class="default-btn" >Edit Profile</button>

                                                </Link>
                                            </div>

                                        </div>



                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
