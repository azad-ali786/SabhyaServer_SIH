import web3 from "./web3";
import { abi } from "./build/ResourceHei.json";


const instance = new web3.eth.Contract(abi, '0xB5f4de1a4995F1e5F103EB2ade7715F09B24b60C');


export default instance;



// Attempting to deploy contract from account:  0x33186EbE36Cb0cf30d15381831a554B313077152
// Contract deployed at address:  0xB5f4de1a4995F1e5F103EB2ade7715F09B24b60C