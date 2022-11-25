import { nftMarketContractAddress, nftMarketContractAddress_Abi } from "../Utils/Contract";
import Web3 from "web3";
const webSupply = new Web3("https://bsc-dataseed1.binance.org/")

export default async function  hightbider(Data) {
  const web3 = window.web3;

  try {
    console.log("webSupply",webSupply);

    let nftContractOf = new webSupply.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress)
    let hightbid = await nftContractOf.methods.highestBidderMapping(Data).call();

    console.log("hightbid", hightbid);
    let bidderAdd = hightbid.bidderAddr
    hightbid = hightbid.amount;
    hightbid = webSupply.utils.fromWei(hightbid)
    // setHighestBideradd(bidderAdd)


    // sethightbid(hightbid)

  } catch (e) {
    console.log("Error While HeightestBid", e);
  }

}

