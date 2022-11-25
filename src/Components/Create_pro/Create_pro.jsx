import React, { useState } from 'react'
import "./Create_pro.css"
import Create from "../../Assets/Create.png"
import Moralis from 'moralis';
import axios from 'axios'
import { CreateNFT, CreateNFT_ABI } from '../Utils/Contract';
import { loadWeb3 } from '../../Api/api';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




function Create_pro() {
    let history = useNavigate()
    const [formInput, updateFormInput] = useState({ price: '0', name: 'NFT Name', description: '', Category: '' })
    const [nftImage, setNftImage] = useState("featured-img1.jpg")
    const [Address, setAddress] = useState("")
    const [IsSpinner, setIsSpinner] = useState(false)



    const create_NFT = async (e) => {
        
        setIsSpinner(true)
        // e.preventDefault()
        // console.log("nftImage", nftImage.name)
        // console.log("formInput", formInput);
        await Moralis.start({
            apiKey: "6sSTRl3GXEZ9CZ3rZChKksJuBZS1hVkXalATDiIa8dczkYm7UbFsldAeJUbAwL02",
            // ...and any other configuration
        });


        const abi = [
            {
                path: "metadata.json",
                content: {
                    name: formInput.name,
                    description: formInput.description,
                    price: formInput.price,
                    Category: formInput.Category,


                    image: nftImage.name,

                }
            },
        ];

        const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });
        let url = 'https://gible-nft.hibootstrap.com/images/trending/trending-img3.jpg'
        create_USer_NFT(url)
        console.log(response.toJSON());
        // setIsSpinner(false)

    }


    const create_USer_NFT = async (url) => {
        setIsSpinner(true)

        let acc = await loadWeb3();
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {

            let metaAddress = sessionStorage.getItem("meta-address");
            if (metaAddress) {
                metaAddress = JSON.parse(metaAddress);

            }
            if (metaAddress == null) {
                toast.error("Please Connect Metamask First")
            } else {
                const web3 = window.web3;
                try {
                    let nftContractOf = new web3.eth.Contract(CreateNFT_ABI, CreateNFT);
                    await nftContractOf.methods.createToken(url).send({
                        from: acc,

                    });
                    toast.success("NFT Create Successfully")
                    history("/collection")

                    setIsSpinner(false)


                } catch (e) {
                    console.log("Errore While calling fuction Create NFT", e);
                    setIsSpinner(false)

                }
            }
        }
        }



        return (
            <>
                <div class="inner-banner inner-bg13">
                    <div class="container">
                        <div class="inner-title">
                            <h3>Recent Activity</h3>
                            <ul><li><a href="/">Home</a></li><li>Activity</li></ul>
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
                                {/* <div class="author-profile-sidebar mr-20"> */}
                                <div class="featured-card box-shadow" >
                                    <div class="featured-card-img">
                                        <a >
                                            <img src={nftImage == "featured-img1.jpg" ? "featured-img1.jpg" : URL?.createObjectURL(nftImage)} alt="Images" style={{ height: "20rem", width: "100%" }} />
                                        </a>
                                        <p>
                                            <i class="fa-regular fa-heart"></i> 122
                                        </p>
                                        {/* <button type="button" class="default-btn border-radius-5">Place Bid</button> */}
                                    </div>
                                    <div class="content">
                                        <h3>
                                            <a >{formInput.name}</a>
                                        </h3>
                                        <div class="content-in">
                                            <div class="featured-card-left">
                                                <span>{formInput.price} BNB </span>

                                            </div>
                                            <a class="featured-content-btn" ><i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                        <a class="featured-user-option" >
                                            {/* <img src={items.token_uri == null || items.token_uri.endsWith(".json") ? "profile_placeholder_image.629dab34.jpg" : items.token_uri} alt="Images" /> */}
                                            {/* <span>Created by {items.owner_of?.substring(0, 5) + "..." + items.owner_of?.substring(items.owner_of?.length - 5)}</span> */}
                                        </a>
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                            <div class="col-lg-9">
                                <div class="collection-form-area">
                                    <div class="section-title">
                                        <h2>Create Collectible Item</h2>
                                    </div>
                                    <div class="collection-form">
                                        <div class="profile-outer">
                                            <h3>Upload File</h3>
                                            <div class="profileButton">
                                                <input class="profileButton-input" type="file" name="attachments[]" accept="image/*, application/pdf" onChange={(e) => {
                                                    e.preventDefault();
                                                    setNftImage(e.target.files[0])

                                                }} id="upload" multiple="" />
                                                <label class="profileButton-button ripple-effect" for="upload">e. g. Image, Audio, Video</label>
                                                <span class="profileButton-file-name">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="preview-box">
                                            <h3>Price</h3>
                                            <input type="text" name="name" id="name" class="form-control" onChange={e => updateFormInput({ ...formInput, price: e.target.value })} placeholder="e. g. “0.003 BNB”" />

                                        </div>

                                        {/* <form> */}
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label>Item Name</label>
                                                    <input type="text" name="name" id="name" class="form-control" onChange={e => updateFormInput({ ...formInput, name: e.target.value })} placeholder="e. g. “walking in the air”" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12">
                                                <div class="form-group">
                                                    <label>Description</label>
                                                    <textarea name="description" class="form-control" id="description" cols="30" rows="5" onChange={e => updateFormInput({ ...formInput, description: e.target.value })} placeholder="e. g. “after purchasing you’ll able to get the real product”">
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div class="collection-category">
                                                <h3>Choose Item Category</h3>
                                                <select class="form-select" aria-label="Default select example" onChange={e => updateFormInput({ ...formInput, Category: e.target.value })}>
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
                                            <div class="col-lg-12 col-md-12 mt-3">
                                                <button type="submit" class="default-btn border-radius-5" onClick={() => create_NFT()}>Create Item</button>
                                            </div>
                                        </div>
                                        {/* </form> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }

    export default Create_pro
