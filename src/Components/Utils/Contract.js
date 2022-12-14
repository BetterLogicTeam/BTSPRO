let id = sessionStorage.getItem("NETWORKID");
export let nftMarketContractAddress = ""
export let nftMarketContractAddress_Abi = []
export let CreateNFT = ""
export let CreateNFT_ABI = []

if (id == 56) {
  nftMarketContractAddress =
    "0x5867362c8592142174C4c98bc03b867b4c1DcB3A";
  nftMarketContractAddress_Abi = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "uint256",
      "name": "itemId",
      "type": "uint256"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "nftContract",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }, {
      "indexed": false,
      "internalType": "address",
      "name": "seller",
      "type": "address"
    }, {
      "indexed": false,
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "price",
      "type": "uint256"
    }, {
      "indexed": false,
      "internalType": "bool",
      "name": "sold",
      "type": "bool"
    }],
    "name": "MarketItemCreated",
    "type": "event"
  }, {
    "inputs": [],
    "name": "Marketfee",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "TOTAL_PERC",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "_itemIds",
    "outputs": [{
      "internalType": "uint256",
      "name": "_value",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "_itemsSold",
    "outputs": [{
      "internalType": "uint256",
      "name": "_value",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "name": "amountToPayMapping",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }, {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "biddingaddress",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }, {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "biddingamount",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_fee",
      "type": "uint256"
    }],
    "name": "changeMarketfee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "itemId",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "nftContractAddress",
      "type": "address"
    }],
    "name": "claimBidItem",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "itemId",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "nftContractAddress",
      "type": "address"
    }],
    "name": "createBidOnItem",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }, {
      "internalType": "uint256",
      "name": "price",
      "type": "uint256"
    }, {
      "internalType": "uint256",
      "name": "royalityPerc",
      "type": "uint256"
    }, {
      "internalType": "bool",
      "name": "_isOnAuction",
      "type": "bool"
    }, {
      "internalType": "uint256",
      "name": "_bidEndTime",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "nftContractAddress",
      "type": "address"
    }],
    "name": "createMarketItem",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "itemId",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "nftContractAddress",
      "type": "address"
    }],
    "name": "createMarketSale",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "currentItemID",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "divisor",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "add",
      "type": "address"
    }],
    "name": "fetchItemsCreated",
    "outputs": [{
      "components": [{
        "internalType": "uint256",
        "name": "itemId",
        "type": "uint256"
      }, {
        "internalType": "address",
        "name": "nftContract",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }, {
        "internalType": "address payable",
        "name": "seller",
        "type": "address"
      }, {
        "internalType": "address payable",
        "name": "owner",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }, {
        "internalType": "bool",
        "name": "sold",
        "type": "bool"
      }, {
        "internalType": "bool",
        "name": "isOnAuction",
        "type": "bool"
      }, {
        "internalType": "uint256",
        "name": "bidEndTime",
        "type": "uint256"
      }, {
        "internalType": "bool",
        "name": "isactive",
        "type": "bool"
      }],
      "internalType": "struct NFTMarket.MarketItem[]",
      "name": "",
      "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "fetchMarketItems",
    "outputs": [{
      "components": [{
        "internalType": "uint256",
        "name": "itemId",
        "type": "uint256"
      }, {
        "internalType": "address",
        "name": "nftContract",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }, {
        "internalType": "address payable",
        "name": "seller",
        "type": "address"
      }, {
        "internalType": "address payable",
        "name": "owner",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }, {
        "internalType": "bool",
        "name": "sold",
        "type": "bool"
      }, {
        "internalType": "bool",
        "name": "isOnAuction",
        "type": "bool"
      }, {
        "internalType": "uint256",
        "name": "bidEndTime",
        "type": "uint256"
      }, {
        "internalType": "bool",
        "name": "isactive",
        "type": "bool"
      }],
      "internalType": "struct NFTMarket.MarketItem[]",
      "name": "",
      "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "add",
      "type": "address"
    }],
    "name": "fetchMyNFTs",
    "outputs": [{
      "components": [{
        "internalType": "uint256",
        "name": "itemId",
        "type": "uint256"
      }, {
        "internalType": "address",
        "name": "nftContract",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }, {
        "internalType": "address payable",
        "name": "seller",
        "type": "address"
      }, {
        "internalType": "address payable",
        "name": "owner",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }, {
        "internalType": "bool",
        "name": "sold",
        "type": "bool"
      }, {
        "internalType": "bool",
        "name": "isOnAuction",
        "type": "bool"
      }, {
        "internalType": "uint256",
        "name": "bidEndTime",
        "type": "uint256"
      }, {
        "internalType": "bool",
        "name": "isactive",
        "type": "bool"
      }],
      "internalType": "struct NFTMarket.MarketItem[]",
      "name": "",
      "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getBalance",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "userAddress",
      "type": "address"
    }],
    "name": "getDueAmount",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getOwnerBalance",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "highestBidderMapping",
    "outputs": [{
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "bidderAddr",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "idToMarketItem",
    "outputs": [{
      "internalType": "uint256",
      "name": "itemId",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "nftContract",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }, {
      "internalType": "address payable",
      "name": "seller",
      "type": "address"
    }, {
      "internalType": "address payable",
      "name": "owner",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "price",
      "type": "uint256"
    }, {
      "internalType": "bool",
      "name": "sold",
      "type": "bool"
    }, {
      "internalType": "bool",
      "name": "isOnAuction",
      "type": "bool"
    }, {
      "internalType": "uint256",
      "name": "bidEndTime",
      "type": "uint256"
    }, {
      "internalType": "bool",
      "name": "isactive",
      "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "idToRoyalityData",
    "outputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "creator",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "royalityPercentage",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "tokenIdToItemId",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "totalAmountDue",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
    }],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "_nftContractAddress",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "withdrawDueAmount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "itemId",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "nftContractAddress",
      "type": "address"
    }],
    "name": "withdrawYourBid",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }]
  CreateNFT = "0x234b1FBD205bdB13Fd9F67818A5B5A3E562A9DfC";
  CreateNFT_ABI = [{
    "inputs": [{
      "internalType": "address",
      "name": "marketplaceAddress",
      "type": "address"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "approved",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }, {
      "indexed": false,
      "internalType": "bool",
      "name": "approved",
      "type": "bool"
    }],
    "name": "ApprovalForAll",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "string",
      "name": "tokenURI",
      "type": "string"
    }, {
      "internalType": "string",
      "name": "_name",
      "type": "string"
    }, {
      "internalType": "string",
      "name": "_symbol",
      "type": "string"
    }],
    "name": "createToken",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "getApproved",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, {
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }],
    "name": "isApprovedForAll",
    "outputs": [{
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    }],
    "name": "name",
    "outputs": [{
      "internalType": "string",
      "name": "",
      "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "ownerOf",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }, {
      "internalType": "bytes",
      "name": "_data",
      "type": "bytes"
    }],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }, {
      "internalType": "bool",
      "name": "approved",
      "type": "bool"
    }],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "bytes4",
      "name": "interfaceId",
      "type": "bytes4"
    }],
    "name": "supportsInterface",
    "outputs": [{
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    }],
    "name": "symbol",
    "outputs": [{
      "internalType": "string",
      "name": "",
      "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "tokenURI",
    "outputs": [{
      "internalType": "string",
      "name": "",
      "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }]
} else if (id == 1) {

  nftMarketContractAddress =
    "0x234b1FBD205bdB13Fd9F67818A5B5A3E562A9DfC";
  nftMarketContractAddress_Abi = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "uint256",
      "name": "itemId",
      "type": "uint256"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "nftContract",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }, {
      "indexed": false,
      "internalType": "address",
      "name": "seller",
      "type": "address"
    }, {
      "indexed": false,
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "price",
      "type": "uint256"
    }, {
      "indexed": false,
      "internalType": "bool",
      "name": "sold",
      "type": "bool"
    }],
    "name": "MarketItemCreated",
    "type": "event"
  }, {
    "inputs": [],
    "name": "Marketfee",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "TOTAL_PERC",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "_itemIds",
    "outputs": [{
      "internalType": "uint256",
      "name": "_value",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "_itemsSold",
    "outputs": [{
      "internalType": "uint256",
      "name": "_value",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "name": "amountToPayMapping",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }, {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "biddingaddress",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }, {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "biddingamount",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "_fee",
      "type": "uint256"
    }],
    "name": "changeMarketfee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "itemId",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "nftContractAddress",
      "type": "address"
    }],
    "name": "claimBidItem",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "itemId",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "nftContractAddress",
      "type": "address"
    }],
    "name": "createBidOnItem",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }, {
      "internalType": "uint256",
      "name": "price",
      "type": "uint256"
    }, {
      "internalType": "uint256",
      "name": "royalityPerc",
      "type": "uint256"
    }, {
      "internalType": "bool",
      "name": "_isOnAuction",
      "type": "bool"
    }, {
      "internalType": "uint256",
      "name": "_bidEndTime",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "nftContractAddress",
      "type": "address"
    }],
    "name": "createMarketItem",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "itemId",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "nftContractAddress",
      "type": "address"
    }],
    "name": "createMarketSale",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "currentItemID",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "divisor",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "add",
      "type": "address"
    }],
    "name": "fetchItemsCreated",
    "outputs": [{
      "components": [{
        "internalType": "uint256",
        "name": "itemId",
        "type": "uint256"
      }, {
        "internalType": "address",
        "name": "nftContract",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }, {
        "internalType": "address payable",
        "name": "seller",
        "type": "address"
      }, {
        "internalType": "address payable",
        "name": "owner",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }, {
        "internalType": "bool",
        "name": "sold",
        "type": "bool"
      }, {
        "internalType": "bool",
        "name": "isOnAuction",
        "type": "bool"
      }, {
        "internalType": "uint256",
        "name": "bidEndTime",
        "type": "uint256"
      }],
      "internalType": "struct NFTMarket.MarketItem[]",
      "name": "",
      "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "fetchMarketItems",
    "outputs": [{
      "components": [{
        "internalType": "uint256",
        "name": "itemId",
        "type": "uint256"
      }, {
        "internalType": "address",
        "name": "nftContract",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }, {
        "internalType": "address payable",
        "name": "seller",
        "type": "address"
      }, {
        "internalType": "address payable",
        "name": "owner",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }, {
        "internalType": "bool",
        "name": "sold",
        "type": "bool"
      }, {
        "internalType": "bool",
        "name": "isOnAuction",
        "type": "bool"
      }, {
        "internalType": "uint256",
        "name": "bidEndTime",
        "type": "uint256"
      }],
      "internalType": "struct NFTMarket.MarketItem[]",
      "name": "",
      "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "add",
      "type": "address"
    }],
    "name": "fetchMyNFTs",
    "outputs": [{
      "components": [{
        "internalType": "uint256",
        "name": "itemId",
        "type": "uint256"
      }, {
        "internalType": "address",
        "name": "nftContract",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }, {
        "internalType": "address payable",
        "name": "seller",
        "type": "address"
      }, {
        "internalType": "address payable",
        "name": "owner",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }, {
        "internalType": "bool",
        "name": "sold",
        "type": "bool"
      }, {
        "internalType": "bool",
        "name": "isOnAuction",
        "type": "bool"
      }, {
        "internalType": "uint256",
        "name": "bidEndTime",
        "type": "uint256"
      }],
      "internalType": "struct NFTMarket.MarketItem[]",
      "name": "",
      "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getBalance",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "userAddress",
      "type": "address"
    }],
    "name": "getDueAmount",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getOwnerBalance",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "highestBidderMapping",
    "outputs": [{
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "bidderAddr",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "idToMarketItem",
    "outputs": [{
      "internalType": "uint256",
      "name": "itemId",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "nftContract",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }, {
      "internalType": "address payable",
      "name": "seller",
      "type": "address"
    }, {
      "internalType": "address payable",
      "name": "owner",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "price",
      "type": "uint256"
    }, {
      "internalType": "bool",
      "name": "sold",
      "type": "bool"
    }, {
      "internalType": "bool",
      "name": "isOnAuction",
      "type": "bool"
    }, {
      "internalType": "uint256",
      "name": "bidEndTime",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "idToRoyalityData",
    "outputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }, {
      "internalType": "address",
      "name": "creator",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "royalityPercentage",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "tokenIdToItemId",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "totalAmountDue",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "withdrawDueAmount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }]
  CreateNFT = "0x5867362c8592142174C4c98bc03b867b4c1DcB3A";
  CreateNFT_ABI = [{
    "inputs": [{
      "internalType": "address",
      "name": "marketplaceAddress",
      "type": "address"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "approved",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }, {
      "indexed": false,
      "internalType": "bool",
      "name": "approved",
      "type": "bool"
    }],
    "name": "ApprovalForAll",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "indexed": true,
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "string",
      "name": "tokenURI",
      "type": "string"
    }, {
      "internalType": "string",
      "name": "_name",
      "type": "string"
    }, {
      "internalType": "string",
      "name": "_symbol",
      "type": "string"
    }],
    "name": "createToken",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "getApproved",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, {
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }],
    "name": "isApprovedForAll",
    "outputs": [{
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    }],
    "name": "name",
    "outputs": [{
      "internalType": "string",
      "name": "",
      "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "ownerOf",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }, {
      "internalType": "bytes",
      "name": "_data",
      "type": "bytes"
    }],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }, {
      "internalType": "bool",
      "name": "approved",
      "type": "bool"
    }],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "bytes4",
      "name": "interfaceId",
      "type": "bytes4"
    }],
    "name": "supportsInterface",
    "outputs": [{
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    }],
    "name": "symbol",
    "outputs": [{
      "internalType": "string",
      "name": "",
      "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "tokenURI",
    "outputs": [{
      "internalType": "string",
      "name": "",
      "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "internalType": "address",
      "name": "from",
      "type": "address"
    }, {
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }]
} else if(id== 1230){
  nftMarketContractAddress="TEEgwU8P8N18d4symckdFAwmpmBucxR9Lm";
   CreateNFT = "TR65QKSgghqjZ2ZvAi2LxyCtQmiJck3W62";

}



export const nftMarketTokenAddress =
  "0x84D1c1F7b33c70eaDCf9f8B29140A18AeC389fCB";
export const nftMarketToken_Abi = [{
    inputs: [{
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      },
      {
        internalType: "contract IBEP20",
        name: "_Token",
        type: "address"
      },
      {
        internalType: "contract IBEP20",
        name: "_BUSD",
        type: "address"
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [{
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "BUSD",
    outputs: [{
      internalType: "contract IBEP20",
      name: "",
      type: "address"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{
      internalType: "uint256",
      name: "_amount",
      type: "uint256"
    }],
    name: "ClaimBUSD",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "uint256",
      name: "_amount",
      type: "uint256"
    }],
    name: "ClaimBnb",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "uint256",
      name: "_amount",
      type: "uint256"
    }],
    name: "ClaimWire",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "MaxLimitPerTransaction",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MinitngPricein_BNB",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MinitngPricein_BUSD",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MinitngPricein_wire",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Token",
    outputs: [{
      internalType: "contract IBEP20",
      name: "",
      type: "address"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    name: "addressMintedBalance",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "address",
      name: "owner",
      type: "address"
    }],
    name: "balanceOf",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{
      internalType: "uint256",
      name: "tokenId",
      type: "uint256"
    }],
    name: "getApproved",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
    ],
    name: "isApprovedForAll",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxsupply",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{
        internalType: "uint256",
        name: "_count",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
    ],
    name: "mint_with_BUSD",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "uint256",
      name: "_count",
      type: "uint256"
    }],
    name: "mint_with_bnb",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{
        internalType: "uint256",
        name: "_count",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
    ],
    name: "mint_with_wire",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    name: "mintedNFTs",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "notRevealedUri",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{
      internalType: "uint256",
      name: "tokenId",
      type: "uint256"
    }],
    name: "ownerOf",
    outputs: [{
      internalType: "address",
      name: "",
      type: "address"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pausedminting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reveal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "revealed",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "string",
      name: "_newBaseURI",
      type: "string"
    }],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "uint256",
      name: "_amount",
      type: "uint256"
    }],
    name: "setMaxLimitPerTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "uint256",
      name: "_amount",
      type: "uint256"
    }],
    name: "setMaxSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "uint256",
      name: "_amount",
      type: "uint256"
    }],
    name: "setMintingPricein_BNB",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "uint256",
      name: "_amount",
      type: "uint256"
    }],
    name: "setMintingPricein_BUSD",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "uint256",
      name: "_amount",
      type: "uint256"
    }],
    name: "setMintingPricein_wire",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "string",
      name: "_notRevealedURI",
      type: "string"
    }, ],
    name: "setNotRevealedURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "bool",
      name: "_state",
      type: "bool"
    }],
    name: "setRevealed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "string",
      name: "_newbaseExtension",
      type: "string"
    }, ],
    name: "setbaseExtension",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "string",
      name: "_newnotRevealedUri",
      type: "string"
    }, ],
    name: "setnotRevealedUri",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "bytes4",
      name: "interfaceId",
      type: "bytes4"
    }],
    name: "supportsInterface",
    outputs: [{
      internalType: "bool",
      name: "",
      type: "bool"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{
      internalType: "uint256",
      name: "index",
      type: "uint256"
    }],
    name: "tokenByIndex",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{
      internalType: "uint256",
      name: "_tokenId",
      type: "uint256"
    }],
    name: "tokenURI",
    outputs: [{
      internalType: "string",
      name: "",
      type: "string"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{
      internalType: "uint256",
      name: "",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "address",
      name: "newOwner",
      type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{
      internalType: "address",
      name: "_owner",
      type: "address"
    }],
    name: "walletOfOwner",
    outputs: [{
      internalType: "uint256[]",
      name: "",
      type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function",
  },
];