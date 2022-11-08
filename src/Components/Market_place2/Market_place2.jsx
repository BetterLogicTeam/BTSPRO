import React from 'react'
import './Market_place2.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
function Market_place2() {

   
  return (
    
    <div>
      <div className="container-fluid mt-5">
        <div className="row padding_toppp_market_place">
            <div className="col-lg-5 col-sm-12 ">
<div className="imge-border border p-3 ">
    <img src="img_1.gif" className='imge-border-radius' alt="" />
</div>
<Accordion className='dropss text-white mt-3'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5'>Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="row">
                <div className="col text-start detail-M">
                    <p><b>Contract Address</b></p>
                    <p><b>Token IDs</b></p>
                    <p><b>Date Created</b></p>
                    <p><b>NFT Type</b></p>
                    <p><b>NFT Category</b></p>
                    <p><b>Creator</b></p>
                </div>
                <div className="col text-end">
                    <p><b>0x3D8...feab</b></p>
                    <p><b>2979</b></p>
                    <p><b>14/7/2022</b></p>
                    <p><b>image/jpeg</b></p>
                    <p><b>art</b></p>
                    <p><b>0x63e...e91f</b></p>
                </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* second section       */}

      <Accordion className='dropss text-white mt-3'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5'>Properties</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h5><b>No Properties</b></h5>
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
            <div className="col-lg-7 col-sm-12">
<p className='text-info text-start pt-2'><b>Art Faces</b> </p>
<p className='text-info fs-1 text-start'><b>Rainbow Lady</b> </p>

<div className="row">
    <div className="col-lg-6 col-sm-12 d-flex ">
   
                <img src="img_1-1.gif" className=' agian-circle '   alt="" />
                <p className=' text-start fs-5 ps-3 mt-3'><b>Owned by </b> </p>
                <p className='text-info fs-5 mt-3'><b>Art Faces </b> </p>

    </div>
    <div className="col-lg-6 col-sm-12 text-start text-md-end">
        <button className='mt-1 me-2 icon-grid'><ShareIcon/></button>
        <button className='mt-1 icon-grid me-5'><CommentIcon/></button>

    </div>
</div>
<div className='row current-price-m mt-4'>
    <div className="col-lg-8 text-start ">
<p className='text-white pt-3 fs-5'><b>Current Price :</b> </p>
<span className='d-flex'>
    <img className='w-25-m' src="bnc2.svg" alt="" />
    <h4 className='text-info ps-2 pt-1'>0.035 - 11.66$</h4>
</span>
    </div>
    <div className="col-lg-4">
    <button className=' icon-grid-b fs-5 text-white float-start float-lg-end mt-4'><b>Buy</b></button>
    </div>
    <p className="mb-4 fs-5 mt-2 text-start text-white">
    <b> Just Art Faces.</b>
    </p>
</div>
            </div>
        </div>
        <Accordion className='dropss text-white mt-3 mb-5'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5'>Trade History</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <div className="overflow">
          <table class="table text-white text-start overflow-scroll  table-border border">
  <thead>
    <tr>
      <th scope="col">Seller</th>
      <th scope="col">Buyer</th>
      <th scope="col">Price</th>
      <th scope="col">Method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">0x63...91f</th>
      <td>Listing</td>
      <td>0.035</td>
      <td>@Listed on Instant Buy</td>
    </tr>
    <tr>
      <th scope="row">0x00</th>
      <td>0x63...91f</td>
      <td>0</td>
      <td>Minted</td>
    </tr>
   
  </tbody>
</table>
</div>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  )
}

export default Market_place2
