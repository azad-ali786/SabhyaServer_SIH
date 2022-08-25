import web3 from "./web3";
import { abi } from "./build/ResourceHei.json";


const instance = new web3.eth.Contract(abi, '0x4f36558FaA5CeD76f2e581DbdD403bCB7CA6AeB0');


export default instance;



// Attempting to deploy contract from account:  0x33186EbE36Cb0cf30d15381831a554B313077152
// Contract deployed at address:  0x4f36558FaA5CeD76f2e581DbdD403bCB7CA6AeB0

