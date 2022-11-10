import React from 'react'
import "./Create_page.css"
import download from "../../Assets/download.png"
import wallet from "../../Assets/wallet.png"
import trust from "../../Assets/trust.svg"
import pha from "../../Assets/pha.png"

function Create_page() {
  return (
    <div className='main_create_Page'>
        <div className="container py-5 ">
            <h1 className='Create_page_heading'>Connect Wallet</h1>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <div className='Img_meata_mask'  >
                        <img src={download} alt="" />
                    </div>
                    <h4 className='create_heading'>Connect with Metamask</h4>
                    <p className='Meta_mask_para'>Your WalletConnect wallet will be connected and used to securely store your digital assets.</p>
                </div>
             

            </div>
            <div className="row justify-content-center">
                <div className="col-md-3">
                      <div className='d-flex create_page_button'>
                        <img src={download} style={{height:'25px' ,marginLeft:'15px'}} alt="" />
                        <span className='mx-auto btnn_headinggggg'>
                        Metamask
                        </span>
                      </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3">
                      <div className='d-flex create_page_button'>
                        <img src={trust} style={{height:'25px' ,marginLeft:'15px'}} alt="" />
                        <span className='mx-auto btnn_headinggggg'>
                        Trust Wallet
                        </span>
                      </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3">
                      <div className='d-flex create_page_button'>
                        <img src={wallet} style={{height:'25px' ,marginLeft:'15px'}} alt="" />
                        <span className='mx-auto btnn_headinggggg'>
                        WalletConnect
                        </span>
                      </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3">
                      <div className='d-flex create_page_button'>
                        <img src={pha} style={{height:'25px' ,marginLeft:'15px'}} alt="" />
                        <span className='mx-auto btnn_headinggggg'>
                        Phantom
                        </span>
                      </div>
                </div>
            </div>
       
        </div>

    </div>
  )
}

export default Create_page