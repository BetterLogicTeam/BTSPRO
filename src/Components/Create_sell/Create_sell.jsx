import React from 'react';
import create_icon1 from "../../Assets/create_icon1.png";
import create_icon2 from "../../Assets/create_icon2.png";
import create_icon3 from "../../Assets/create_icon3.png";
import create_icon4 from "../../Assets/create_icon4.png";
import create_img from "../../Assets/create_img.png";
import "./Create_sell.css"

function Create_sell() {
  return (
    <div className='creaaaaate_seeeel'>
        <div className="create-area pt-100 pb-70">
            <div className="container mt-3">
                <div className="section-title text-center">
                    <h2>Create And Sell Your NFTs</h2>
                    </div>
                    <div className="row mt-5 align-items-center pt-45">
                        <div className="col-lg-6">
                            <div className="create-img">
                                <img src={create_img} alt="Images"/>
                                </div>
                                </div>
    <div className="col-lg-6">
        <div className="create-card-right pl-20">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-6">
                    <div className="create-card">
                        <img src={create_icon1} alt="Images"/>
                        <h3 className='mt-2'> <a href="/add-wallet" className='create_sell_title'>Set Up Your Wallet</a></h3>
                        <p>connect wallet by clicking the wallet icon in the top right corner. Learn about the wallets we support.</p>
    </div>
    </div>
    <div className="col-lg-6 col-6">
        <div className="create-card">
             <img src={create_icon2} alt="Images"/>
            <h3 className='mt-2'>
                <a href="/create-collection" className='create_sell_title'>Create Your Collection</a>
                </h3>
                <p>Click Create and Add social links, a description, profile &amp; banner images, and set a secondary sales fee.</p>
                </div>
                </div>
                <div className="col-lg-6 col-6">
                    <div className="create-card">
                        <img src={create_icon3} alt="Images"/>
                        <h3 className='mt-2'>
                            <a href="/help-center" className='create_sell_title'> Add Your NFTs</a>
                            </h3>
    <p>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs</p>
    </div>
    </div>
    <div className="col-lg-6 col-6">
        <div className="create-card">
            <img src={create_icon4} alt="Images"/>
            <h3 className='mt-2'>
                <a href="/activity" className='create_sell_title'>List Them For Sale</a>
                </h3>
                <p>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs</p>
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

export default Create_sell