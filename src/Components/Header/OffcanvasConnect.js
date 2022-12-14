import React, { useEffect, useState } from 'react'

import { Button, Drawer } from 'antd';
import { Avatar, Tooltip } from '@mui/material';
import tron from '../../Assets/tron logo.png'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

export default function OffcanvasConnect(props) {
    const [open, setOpen] = useState(false);
    const [copyTest, setcopyTest] = useState(false)

    const [checkId, setcheckId] = useState("")
    let id = sessionStorage.getItem("NETWORKID");
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };




    const disConnect = async () => {
        await window.web3.eth.getChainId(async (err, netId) => {
            console.log("netId", netId);
            setcheckId(netId)
        });
    }


    useEffect(() => {
        copyTest ? toast.success("Copied") : <></>
        setTimeout(() => {
            setcopyTest(false)
        }, 10);
    }, [copyTest])



    // useEffect( async() => {
    // let id = sessionStorage.getItem("NETWORKID");

    //     await window.web3.eth.getChainId(async (err, netId) => {

    //     });
    // }, [])

    return (
        <div>
            <>

                <MdOutlineAccountBalanceWallet onClick={showDrawer} className="text-white fs-2" title='Wallet' />
                <Drawer title={<>
                    <div className='WalletConnect1'>
                        <div className='WalletConnect'>


                            <Avatar alt="" src={props?.userData?.image ? `https://server.nftapi.online/uploads/${props?.userData?.image}` : "/static/images/avatar/1.jpg"} />

                            {/* {
                                props.address ?
                                    <>
                                        <div class="dropdown">
                                            <h5 class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                                                {
                                                    props?.userData?.username ? props?.userData?.username : "My wallet"

                                                }
                                            </h5>
                                            <ul class="dropdown-menu connect_Dropdon" aria-labelledby="dropdownMenuButton1">
                                                <li class="sc-29427738-0 sc-630fc9ab-0 sc-a8df1259-0 bBUaNU jSPhMX jqXWQR bBUaNU1">
                                                    <div size="24" class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 sc-dada3b88-0 sc-1e4e8144-0 sc-eebcb459-0 bMZyxz1 jSPhMX kKyBpy fYgjHJ cmjqwQ eEreIg fcwFWy">
                                                        <img alt="" src="https://opensea.io/static/images/logos/metamask-fox.svg" size="24" class="sc-29427738-0 sc-1e4e8144-1 bMZyxz1 bEFlDl" />
                                                    </div><div class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 sc-a8df1259-1 iihyIq jSPhMX kKyBpy fYgjHJ dNyhhk" style={{ paddingLeft: "1rem" }}>
                                                        <span font-size="14px" class="sc-29427738-0 sc-bdnxRM sc-a8df1259-2 erpyI iPAlIP">MetaMask</span>
                                                    </div>
                                                    <div overflow="hidden" display="flex" class="sc-29427738-0 sc-a8df1259-3 cLGxCH bSNQjW">
                                                        <i color="success" value="check" size="24" class="fa-solid fa-check  hCOPIW"></i>
                                                    </div>
                                                </li>
                                                <li class="sc-d8be1725-0 eavGfL">
                                                    <div class="sc-b267fe84-0 cRVARX sc-29427738-0 sc-630fc9ab-0 sc-a8df1259-0 bBUaNU jSPhMX egqDTp" >
                                                        <div size="24" class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 sc-dada3b88-0 sc-1e4e8144-0 sc-eebcb459-0 bMZyxz jSPhMX kKyBpy fYgjHJ cmjqwQ eEreIg fcwFWy">

                                                            <i size="24" value="logout" class="fa-solid fa-right-from-bracket"></i>

                                                        </div>
                                                        <div class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 sc-a8df1259-1 iihyIq jSPhMX kKyBpy fYgjHJ dNyhhk " style={{ paddingLeft: "1rem" }} >
                                                            <span font-size="14px" class="sc-29427738-0 sc-bdnxRM sc-a8df1259-2 erpyI iPAlIP">Log out</span>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </>
                                    :
                                    <></>
                                    
                                } */}

                            <h5>{
                                props?.userData?.username ? props?.userData?.username : "My wallet"

                            }</h5>

                        </div>

                        {
                            props.address ?
                                <>
                                    <CopyToClipboard text={props.address}
                                        onCopy={() => setcopyTest(true)}  >
                                        <span class="wdg-actions copy_btn_set2"  >
                                            <Tooltip title="Copy Address" arrow placement="top-start">
                                                <span>
                                                    {props.address?.substring(0, 5) + "..." + props.address?.substring(props.address?.length - 5)}

                                                </span>
                                            </Tooltip>
                                        </span>
                                    </CopyToClipboard>

                                </>

                                :
                                null
                        }
                    </div>

                </>} placement="right" onClose={onClose} open={open} >
                    <p className='Text_section'>If you don't have a <a href="https://metamask.io/download/">Wallet</a> yet, you can select a provider and create one now.</p>
                    <ul className='ilahZE'>
                        <li>
                            <a class="sc-1f719d57-0 fKAlPV sc-29427738-0 sc-630fc9ab-0 sc-a8df1259-0 bBUaNU jSPhMX egqDTp" rel="nofollow noopener" target="_blank">
                                <div size="24" class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 sc-dada3b88-0 sc-1e4e8144-0 sc-eebcb459-0 bMZyxz jSPhMX kKyBpy fYgjHJ cmjqwQ eEreIg fcwFWy">
                                    <img alt="" height="30px" src="Binance-BNB-Icon2-Logo.wine.png" size="24" class="sc-29427738-0 sc-1e4e8144-1 kqDcHr bEFlDl" />
                                </div>
                                <div class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 sc-a8df1259-1 iihyIq jSPhMX kKyBpy fYgjHJ dNyhhk">
                                    <span font-weight="700" font-size="14px" class="sc-29427738-0 sc-bdnxRM sc-a8df1259-2 gHeBAc jvVTLm">Binance</span>
                                </div>
                                <div overflow="hidden" display="flex" class="sc-29427738-0 sc-a8df1259-3 cLGxCH bSNQjW" onClick={() => props.connectMetaMask(56)}>
                                    <span class="sc-29427738-0 sc-bdnxRM sc-a8df1259-6 brdhhA fQDfDu">
                                        <div class="sc-29427738-0 sc-c84c6e8e-1 dVNeWL hunypc">{id == 56 ? "Connected" : "Connect"}</div>
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a class="sc-1f719d57-0 fKAlPV sc-29427738-0 sc-630fc9ab-0 sc-a8df1259-0 bBUaNU jSPhMX egqDTp" rel="nofollow noopener" target="_blank">
                                <div size="24" class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 sc-dada3b88-0 sc-1e4e8144-0 sc-eebcb459-0 bMZyxz jSPhMX kKyBpy fYgjHJ cmjqwQ eEreIg fcwFWy">
                                    <img alt="" height="30px" src="Ethereum-Logo.wine.png" size="24" class="sc-29427738-0 sc-1e4e8144-1 kqDcHr bEFlDl" />
                                </div>
                                <div class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 sc-a8df1259-1 iihyIq jSPhMX kKyBpy fYgjHJ dNyhhk">
                                    <span font-weight="700" font-size="14px" class="sc-29427738-0 sc-bdnxRM sc-a8df1259-2 gHeBAc jvVTLm">Ethereum</span>
                                </div>
                                <div overflow="hidden" display="flex" class="sc-29427738-0 sc-a8df1259-3 cLGxCH bSNQjW" onClick={() => props.connectMetaMask(1)}>
                                    <span class="sc-29427738-0 sc-bdnxRM sc-a8df1259-6 brdhhA fQDfDu">
                                        <div class="sc-29427738-0 sc-c84c6e8e-1 dVNeWL hunypc">{id == 1 ? "Connected" : "Connect"}</div>
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a class="sc-1f719d57-0 fKAlPV sc-29427738-0 sc-630fc9ab-0 sc-a8df1259-0 bBUaNU jSPhMX egqDTp" rel="nofollow noopener" target="_blank">
                                <div size="24" class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 sc-dada3b88-0 sc-1e4e8144-0 sc-eebcb459-0 bMZyxz jSPhMX kKyBpy fYgjHJ cmjqwQ eEreIg fcwFWy">
                                    <img alt="" height="20px" src={tron} size="24" class="sc-29427738-0 sc-1e4e8144-1 kqDcHr bEFlDl" style={{ marginLeft: '1rem' }} />
                                </div>
                                <div class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 sc-a8df1259-1 iihyIq jSPhMX kKyBpy fYgjHJ dNyhhk" style={{ marginLeft: '0.5rem' }}>
                                    <span font-weight="700" font-size="14px" class="sc-29427738-0 sc-bdnxRM sc-a8df1259-2 gHeBAc jvVTLm">Tron</span>
                                </div>
                                <div overflow="hidden" display="flex" class="sc-29427738-0 sc-a8df1259-3 cLGxCH bSNQjW" onClick={() => props.connectMetaMask(1230)}>
                                    <span class="sc-29427738-0 sc-bdnxRM sc-a8df1259-6 brdhhA fQDfDu">
                                        <div class="sc-29427738-0 sc-c84c6e8e-1 dVNeWL hunypc">{id == 1230 ? "Connected" : "Connect"}</div>
                                    </span>
                                </div>
                            </a>
                        </li>


                    </ul>
                </Drawer>
            </>


        </div>
    )
}
