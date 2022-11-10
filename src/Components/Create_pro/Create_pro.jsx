   import React from 'react'
   import "./Create_pro.css"
   import Create from "../../Assets/Create.png"
   function Create_pro() {
     return (
       <div className='create_pro'>
        <div className="container">
        <h3 className='create_pro_heading'>Create an Item</h3>
        <p className='create_pro_para'>Create your NFT</p>
        </div>
        <hr className='hr_pro' />
            <div className="container">
                 <h3 className='feature_heading'>Featured Item</h3>
                 <p className='feature_para'>File types supported : JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 40 MB</p>
<div className="row mt-5">
    <div className="col-md-4">
<div className="upload_img">
<img src={Create} alt="" />
</div>
                    </div>   
</div>


<div className="row mt-4">
    <div className="col-md-6">
        <label className='input_lebals' htmlFor="name">Name</label>
        <br />
        <input type="text" className='Create_input' placeholder='Name of your NFT' name="" id="name" />
    </div>
    <div className="col-md-6">
        <label className='input_lebals' htmlFor="name">Category</label>
        <br />
        <select className="form-select Create_input"  aria-label="Default select example">
  <option selected>Memes</option>
  <option value="1">Photography</option>
  <option value="2">Music</option>
  <option value="3">Pixelated</option>
  <option value="4">Sports</option>
</select>
        {/* <input type="text" className='Create_input' placeholder='Name of your NFT' name="" id="name" /> */}
    </div>
</div>

<div className="row mt-4">
    <div className="col-md-8">
        <div>
         <label htmlFor="mint" className='input_lebals'>Select Collection to mint from</label> 
         <br />
         <input type="text" className='Create_input' placeholder='Undefined ETH' id='mint'  />    
        </div>
    </div>

</div>

<div className="row mt-4">
    <div className="col-md-8">
        <label htmlFor="text_area" className='input_lebals'>Description</label>
        <br />
    <textarea className='Create_text_area' name="" id="text_area" cols="30" placeholder='0 of 1000 characters used.' rows="10">

    </textarea>
    </div>

</div>
                          
            
            </div>
       </div>
     )
   }
   
   export default Create_pro
   