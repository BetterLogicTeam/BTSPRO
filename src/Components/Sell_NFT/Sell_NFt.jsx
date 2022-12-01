import Moralis from 'moralis';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { loadWeb3 } from '../../Api/api';
import { EvmChain } from '@moralisweb3/evm-utils'
import moment from 'moment';
import Avtat from '../../Assets/Avtat.png'
import './Sell_style.css'



export default function Sell_NFt() {
    const history = useNavigate()

    const { id } = useParams();
    const [CollectionArray, setCollectionArray] = useState([])
    const runApp = async () => {
        let acc = await loadWeb3();

        await Moralis.start({
            apiKey: "6sSTRl3GXEZ9CZ3rZChKksJuBZS1hVkXalATDiIa8dczkYm7UbFsldAeJUbAwL02",
            // ...and any other configuration
        });

        const address = acc;

        const chain = EvmChain.BSC;
        // console.log("Chain",chain);

        const response = await Moralis.EvmApi.nft.getWalletNFTs({
            address,
            chain,
        });

        setCollectionArray(response.data.result[id])
        console.log(response.data.result[id]);
    }

    useEffect(() => {
        runApp();

    }, [])

    return (
        <>
            <div class="inner-banner inner-bg12">
                <div class="container">
                    <div class="inner-title">
                        <h3>Discover Item Details</h3>
                        <ul><li><a href="/">Home</a></li><li>Discover</li><li>Item Details</li></ul><div class="inner-shape">
                            <img src="https://gible-nft.hibootstrap.com/images/inner-banner/inner-shape1.png" alt="Images" />
                            <img src="https://gible-nft.hibootstrap.com/images/inner-banner/inner-shape2.png" alt="Images" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-details-area pt-100 pb-70">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-5">
                            <div class="item-details-dsce">


                                <div class="item-details-price">
                                    <div class="item-details-title">
                                        <h3>List item for sale</h3>

                                    </div>
                                    <ul>
                                        <li>NFT Name<b>: {CollectionArray.name}</b></li>
                                        <li>Created<b>:
                                            {

                                                moment(CollectionArray.last_token_uri_sync).format("DD/MM/YYYY h:m:s A")
                                            }

                                        </b></li>

                                        <li>NFT Symbol<b>: {CollectionArray.symbol}</b></li>
                                    </ul>
                                </div>
                                <div class="item-details-user-item">
                                    <div class="images">
                                        <img src={Avtat} alt="Images" />
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                    <div class="content">
                                        <h3>{CollectionArray.owner_of?.substring(0, 4) + "..." + CollectionArray.owner_of?.substring(CollectionArray.owner_of?.length - 4)}</h3>
                                        <span>Item Owner</span>
                                    </div>
                                </div>

                                <div class="item-details-btn">
                                    <a class="default-btn border-radius-50" href="/author-profile">Auctions</a>
                                </div>
                                <div class="item-details-btn">
                                    <a class="default-btn border-radius-50" href="/author-profile"> Sell</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="item-details-left-side pr-20">
                                <div class="item-details-img ">
                                    <img src={CollectionArray.token_uri} alt="Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}
