import { Avatar } from '@mui/material'
import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loadWeb3 } from '../../Api/api';
import './Create_user_profile.css'

export default function Create_User_profile() {
    const metaAddress = sessionStorage?.getItem("meta-address");
    let Address=JSON?.parse(metaAddress).toUpperCase()
    console.log("Address12",Address);
    const inputRef = useRef();
    let history = useNavigate()
    const [imageAsFile, setImageAsFile] = useState(null);

    const [name, setName] = useState(null)
    const [bio, setBio] = useState(null)
    const [email, setEmail] = useState(null)
    const [Image, setImage] = useState("")
    const [IsSpinner, setIsSpinner] = useState(false)





    const handleImageAsFile = (e) => {
        const image = e.target.files[0];
        // console.log("image", image);
        setImageAsFile(image);
    };


    const handleName = (e) => {
        setName(e.target.value);
        // console.log(name);
    };

    const handleBio = (e) => {
        setBio(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

   


    const PostData = async () => {
        let acc = await loadWeb3()

        try {
            if (imageAsFile == null ) {
                toast.error("Please Select Profile Picture First")
            } else {
                if (name == null) {
                    toast.error("Please Enter Name First")

                } else {
                    if (email === null) {
                        toast.error("Please Enter Email First")

                    } else {
                        if (bio == null){

                            toast.error("Please Enter Bio First")
                        }else{

                            setIsSpinner(true)
                        console.log("DAta", name, email, bio, imageAsFile);
                        let formData = new FormData();
                        formData.append("profile", imageAsFile)
                        formData.append("address", Address.toUpperCase())
                        formData.append("username", name)
                        formData.append("email", email)
                        formData.append("bio", bio)

                        let res = await axios.post("http://localhost:3344/create_user_profile", formData)

                        toast.success("Your Profile is Updated")
                        history('/')
                        setIsSpinner(false)
                        }

                    }

                }

            }
        } catch (e) {
            console.log("Error while fatech api", e);
            setIsSpinner(false)
        }
    }


    return (
        <div>
            <div class="inner-banner inner-bg5">
                <div class="container">
                    <div class="inner-title">
                        <h3>Create User Profile</h3>
                        <ul><li><a href="/">Home</a></li><li>Create User Profile</li></ul>
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
                                    <h3> Create Profile </h3>
                                    <div class="bar">
                                    </div>

                                    <div class="row">
                                        <div className="col-lg-7">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label>Your Name</label>
                                                    <input type="text" class="form-control" required="" defaultValue={name} onChange={handleName} data-error="Please Enter Your Name" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12 ">
                                                <div class="form-group">
                                                    <label>Email</label>
                                                    <input type="email" class="form-control" required="" defaultValue={email} onChange={handleEmail} data-error="Please enter Email" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label>Information</label>
                                                    <input class="form-control" type="text" defaultValue={bio} onChange={handleBio} />
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 text-center">
                                                <button type="submit" class="default-btn" onClick={() => PostData()}>
                                                    {

                                                        IsSpinner == true ?
                                                            <>

                                                                < div class="spinner-border" role="status">
                                                                    <span class="visually-hidden">Loading...</span>
                                                                </div>

                                                            </>
                                                            :
                                                            "  Register Now"


                                                    }
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 mt-3">
                                            <div className="Avatra_profile">
                                                <Avatar
                                                    alt=""
                                                    // src="Avtat.png"
                                                    src={imageAsFile == null ? null : URL.createObjectURL(imageAsFile)}
                                                    sx={{ width: 250, height: 250 }}
                                                />


                                                <input
                                                    className="img__input"
                                                    onChange={handleImageAsFile}

                                                    type="file"
                                                    ref={inputRef}
                                                    style={{ display: "none" }}
                                                />
                                                <div class="col-lg-6 col-md-12 text-center mt-4">
                                                    <button type="submit" class="default-btn" onClick={() => {
                                                        inputRef.current.click();
                                                    }}>Change profile picture</button>
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


        </div>
    )
}
