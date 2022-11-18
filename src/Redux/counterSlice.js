import {
    createSlice
} from '@reduxjs/toolkit'
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils'


const initialState = {
    value: [],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        AllNFT: [],
        myArr:[]
    },
    reducers: {

        myCollection: (state, action) => {

            state.myArr= action.payload
            // console.log('payload',action.payload)
        },
        // runApp: async (state, action) => {
        //     await Moralis.start({
        //         apiKey: "6sSTRl3GXEZ9CZ3rZChKksJuBZS1hVkXalATDiIa8dczkYm7UbFsldAeJUbAwL02",
        //         // ...and any other configuration
        //     });

        //     const address = "0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c";

        //     const chain = EvmChain.BSC_TESTNET;
        //     // console.log("Chain",chain);

        //     const response = await Moralis.EvmApi.nft.getWalletNFTs({
        //         address,
        //         chain,
        //     });
        //     // dispatch(myCollection(response.data.result))
        //     // setCollectionArray(response.data.result)
        //     // return {
        //     //     ...state,
        //     //     myArr: response.data.result
        //     //   };
        //     state.myArr=response.data.result
        //     // console.log("Result",response.data.result);
        // }


    },
})

// Action creators are generated for each case reducer function
export const {
    myCollection,runApp
} = counterSlice.actions

export default counterSlice.reducer