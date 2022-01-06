import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0xc801BF1e87d0D5AC640cf0A95d0eF398E42ebF3e';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}