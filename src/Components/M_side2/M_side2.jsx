import React from 'react'
import "./M-side2.css"
function M_side2() {
  var myArr=['Undefined','DULLAMULACRYPTOCAMEL DESSERTDISCS','Cryptp Oliver Season 1','Empire Pandas','Cryptonianking','It Girls!',
'Bipolar Pandas','Babycryptoeggs','Gutter Dogs','Gutter Dog','Mythical Creatures','Exclusives','Montrus',"Sami Arts' NFT",'nftpunks','pol Collection',
'White Pattern','BoringStone Genesis Collection','Not A Celeb','Collector 123$','PASSIVE INCOME','FlokiZap','PSI','Pocket Balls','Official Empire Glow Logo',
'Official Empire Logo','Official Empire Logo','Official Empire Animated Header LOGO','Wolverine Premium NFTs',
'Sherif Arts','Sexy Tattoos','First Coll','Shiba Inu Deluxe and Rare NFT series','A Walk On The Beach','Empire Sauces',
'Empire Sauce','Cloud Art','My House','The Outdoors','Saint George Premium Edition','Saint George Premium Collection','Empire Billionaires','3D Art Emprie Token',
'3D Art for Empire','American Day','INTERGALAGTIC','INTERGALACTIC','SENTIMIENTO REAL','My Collection','KOT','You love','Art',
'Crypto Pixelated','Crypto Pixelted','Personal Art','The Dopeman','treedom','BITCOIN','BINANCE','SHIBA INU','USDT',
'ADA','ETHEREUM','DOGECOIN','Kitty Series','paint','Kiwe','Oliverlist','Empire Pill','OMNI ESTATE GROUP','MONEY'
,'CRYPTOCURRENCY','FLOKI','ELON MUSK','ARTIST','DULLAMULA','NFT as a SERVICE','PORN','ADULT','FOOTBALL','SOCCER','420',
'HASHTAG','PSI20','Special Kitty Series','THE GREYS','Daughters Love','Baby Dragons','@DarkArts',]
  return (
    <div>
       <div className="card mt-5  ">
        <div className="">
            <h3 className='head-1 py-2 mb-0 ps-4 text-start' ><b className='py-3 m-0 my-4'>Collections</b> </h3><hr className='w-100 hr m-0'/>
        </div>

        <div className="market-check collection border-card-3">
            <div className=" text-start ps-4 ">
            {myArr.map((item,index)=>{return(
       <div class="form-check mt-3 " key={index}>
       <input class="form-check-input bg-dark " type="checkbox" value="" id="flexCheckDefault"/>
       <label class="form-check-label  " for="flexCheckDefault">
       <b>{item} </b>
     
       </label>
     </div>
)})}

</div>

        </div>
      </div>
    </div>
  )
}

export default M_side2
