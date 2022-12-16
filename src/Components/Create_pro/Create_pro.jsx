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
import { create as ipfsHttpClient } from "ipfs-http-client";
// const ipfsClient = require('ipfs-http-client');
import TronWeb from 'tronweb'


const projectId = "2IBOoZHHXKmt5N3fdE1kiHWISeV";
const projectSecretKey = "c119b93e540651a5580d99ef3b43a756";
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);




function Create_pro() {
    let history = useNavigate()
    let chainID = sessionStorage.getItem("NETWORKID");
    const [formInput, updateFormInput] = useState({ Symbol: 'BL', name: 'NFT Name', description: '', Category: '' })
    const [nftImage, setNftImage] = useState("featured-img1.jpg")
    const [Address, setAddress] = useState("")
    const [IsSpinner, setIsSpinner] = useState(false)
    const [ApiRes, setApiRes] = useState([])


    const ipfs = ipfsHttpClient({
        url: "https://ipfs.infura.io:5001/api/v0",

        headers: {
            authorization,
        },
    });

    const create_NFT = async (e) => {
        if (nftImage == "featured-img1.jpg") {
            toast.error("Please Upload Image")
            setIsSpinner(false)

        } else {
            if (nftImage.name.endsWith(".jpg") || nftImage.name.endsWith(".png") || nftImage.name.endsWith(".gif") || nftImage.name.endsWith(".mp4") || nftImage.name.endsWith(".webp") || nftImage.name.endsWith(".jpeg") || nftImage.name.endsWith(".PNG") || nftImage.name.endsWith(".JPG") || nftImage.name.endsWith(".JPEG") || nftImage.name.endsWith(".jpeg") || nftImage.name.endsWith(".GIF") || nftImage.name.endsWith(".WEBP") || nftImage.name.endsWith(".MP4") || nftImage.name.endsWith(".pjpeg") || nftImage.name.endsWith(".jfif") || nftImage.name.endsWith(".avif")
                || nftImage.name.endsWith(".SVG") || nftImage.name.endsWith(".svg") || nftImage.name.endsWith(".apng") || nftImage.name.endsWith(".APNG") || nftImage.name.endsWith(".AVIF")
            ) {

                if (formInput.name == '' || formInput.Symbol == '' || formInput.description == '') {
                    toast.error("Please Enter Data In Input Field")
                    setIsSpinner(false)


                } else {
                    setIsSpinner(true)

                    // console.log("nftImage", process.env.REACT_APP_PROJECT_KEY);
                    const result = await ipfs.add(nftImage);
                    console.log(result);
                    console.log("result", `https://skywalker.infura-ipfs.io/ipfs/${result.path}`);
                    setIsSpinner(true)
                    await Moralis.start({
                        apiKey: "gI4QFVnQgnpOIG0CdMSUq7wLkrbEaypx8p28wx2Pohw1EWJUY6Ongt3vHIuovT4Z",
                    });
                    // let formData = new FormData();
                    // formData.append("profile", nftImage)
                    // let res = await axios.post("https://server.nftapi.online/Collection_NFT", formData)
                    let url = `https://skywalker.infura-ipfs.io/ipfs/${result.path}`
                    const abi = [
                        {
                            path: "metadata.json",
                            content: {
                                name: formInput.name,
                                description: formInput.description,
                                Symbol: formInput.Symbol,
                                image: url,

                            }
                        },
                    ];
                    let response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });
                    response = response.toJSON()
                    response = response[0].path
                    let resGet = await axios.get(response)
                    setApiRes(resGet.data)
                    create_USer_NFT(resGet.data)
                }
            }
        }
    }


    const create_USer_NFT = async (url) => {
        // console.log("gettronWeb",window.tronWeb);
        if (chainID == 1230) {
            setIsSpinner(true)

            let mainAccount2 = await window?.tronWeb?.defaultAddress?.base58
            let Abi = [{ "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "uriBase", "type": "string" }], "name": "setUriBase", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "owner", "type": "address" }, { "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_index", "type": "uint256" }], "name": "getType", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" }, { "name": "tokenURI", "type": "string" }], "name": "mintWithTokenURI", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "index", "type": "uint256" }], "name": "getNFT", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint8" }, { "name": "", "type": "uint8" }, { "name": "", "type": "uint8" }, { "name": "", "type": "uint8" }, { "name": "", "type": "uint8" }, { "name": "", "type": "uint8" }, { "name": "", "type": "uint8" }, { "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "typeId", "type": "uint256" }, { "name": "generation", "type": "uint256" }, { "name": "skills", "type": "uint8[6]" }, { "name": "energy", "type": "uint8" }, { "name": "health", "type": "uint8" }], "name": "mintWithTokenURI", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "baseURI", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getNumTypes", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "index", "type": "uint256" }, { "name": "generation", "type": "uint256" }, { "name": "skills", "type": "uint8[6]" }, { "name": "energy", "type": "uint8" }, { "name": "health", "type": "uint8" }], "name": "setSkills", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "tokenURI", "type": "string" }, { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }], "name": "createToken", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "account", "type": "address" }], "name": "addMinter", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceMinter", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "isMinter", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" }, { "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "types", "outputs": [{ "name": "id", "type": "uint256" }, { "name": "probability", "type": "uint256" }, { "name": "tokenId", "type": "uint256" }, { "name": "num", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "probability", "type": "uint256" }, { "name": "tokenId", "type": "uint256" }], "name": "addType", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "owner", "type": "address" }, { "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "account", "type": "address" }], "name": "MinterAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "account", "type": "address" }], "name": "MinterRemoved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": true, "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "approved", "type": "address" }, { "indexed": true, "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "operator", "type": "address" }, { "indexed": false, "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }], "name": "OwnershipRenounced", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }]

            let contract = await window.tronWeb.contract().at(CreateNFT);

            //  setIsSpinner(true)


            await contract.createToken(url.image, url.name, url.Symbol).send({
                feeLimit: 10000000000

            }).then(async (hash) => {
                if (hash != "") {
                  try {
                   
                    toast.success('Please Wait while transaction is processing...')
                  } catch (e) {
                    console.log("error", e);
                    setIsSpinner(false);
                    toast.error("Something went wrong ! ");
                  }
                }
                console.log("Final Output:", hash, "\n");
                toast.success("NFT Create Successfully")
                history("/collection")
         
                setIsSpinner(false);
              }).catch((e) => {
                toast.error(e.message);
                setIsSpinner(false);
              })
        } else {
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
                        await nftContractOf.methods.createToken(url.image, url.name, url.Symbol).send({
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

                                    {/* <button type="button" class="default-btn border-radius-5">Place Bid</button> */}
                                </div>
                                <div class="content">
                                    <h3>
                                        <a >{formInput.name}</a>
                                    </h3>
                                    <div class="content-in">
                                        <div class="featured-card-left">
                                            <span>{formInput.price}
                                                {
                                                    chainID == 1230 ? "TRX" : chainID == 56 ? "BNB" : "Eth"
                                                }
                                            </span>

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
                                            <input class="profileButton-input" required type="file" name="attachments[]" accept="image/*, application/pdf" onChange={(e) => {
                                                e.preventDefault();
                                                setNftImage(e.target.files[0])

                                            }} id="upload" multiple="" />
                                            <label class="profileButton-button ripple-effect" for="upload"> {nftImage == "featured-img1.jpg" ? "e. g. Image, Audio, Video" : nftImage.name} </label>
                                            <span class="profileButton-file-name">
                                            </span>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label>Item Name</label>
                                                <input type="text" name="name" id="name" required class="form-control" onChange={e => updateFormInput({ ...formInput, name: e.target.value })} placeholder="e. g. “walking in the air”" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label>Item Symbol</label>
                                                <input type="text" name="name" id="name" required class="form-control" onChange={e => updateFormInput({ ...formInput, Symbol: e.target.value })} placeholder="Enter Symbol" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <div class="form-group">
                                                <label>Description</label>
                                                <textarea name="description" class="form-control" id="description" cols="30" rows="5" onChange={e => updateFormInput({ ...formInput, description: e.target.value })} placeholder="e. g. “after purchasing you’ll able to get the real product”">
                                                </textarea>
                                            </div>
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
