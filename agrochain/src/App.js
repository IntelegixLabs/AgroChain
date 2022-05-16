import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import MarketplaceAbi from './frontend/contractsData/Marketplace.json'
import MarketplaceAddress from './frontend/contractsData/Marketplace-address.json'
import NFTAbi from './frontend/contractsData/NFT.json'
import NFTAddress from './frontend/contractsData/NFT-address.json'
import { useEffect, useState } from 'react'
import { ethers } from "ethers"
import { Spinner } from 'react-bootstrap'

import Header from "./Components/common/header";
import { Footer } from "./Components/common/Footer";
import { NFT } from "./Components/NFT";
import { NFTDetails } from "./Components/NFTDetails";
import Profile from "./Components/Profile";
import { Register } from "./Components/Register";
import { Loading } from "./Components/Loading";
import Home from "./Components/home/Home"

import './App.css';
import './main.css'


const RpcHttpUrl = "https://mainnet.infura.io/v3/9f37c36eaea34b42a0bce7936c691b67";


function App() {
    const [loading, setLoading] = useState(true)
    const [account, setAccount] = useState(null)
    const [nft, setNFT] = useState({})
    const [marketplace, setMarketplace] = useState({})
    const [balance, SetBalance] = useState(null)

    // MetaMask Login/Connect
    const web3Handler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0])
        // Get provider from Metamask
        /*const provider = new ethers.providers.JsonRpcProvider(RpcHttpUrl)*/
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        // Set signer
        const signer = provider.getSigner()
        const balance = await provider.getBalance(accounts[0])
        const balances = ethers.utils.formatEther(balance);
        SetBalance(balances)
        console.log(balances);


        window.ethereum.on('chainChanged', (chainId) => {
            window.location.reload();
        })

        window.ethereum.on('accountsChanged', async function (accounts) {
            setAccount(accounts[0])
            await web3Handler()
        })
        
        loadContracts(signer)
    }
    const loadContracts = async (signer) => {
        // Get deployed copies of contracts
        const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
        setMarketplace(marketplace)
        const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
        setNFT(nft)
        setLoading(false)
    }
    return (
    <>
    <Header web3Handler={web3Handler} account={account} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile marketplace={marketplace} nft={nft} account={account} balance={balance} />} />
      <Route path="nft" element={<NFT marketplace={marketplace} nft={nft} account={account} balance={balance} />} />
      <Route path="nft-details" element={<NFTDetails marketplace={marketplace} />} />
      <Route path="signup" element={<Register />} />
      <Route path="*" element={<NFT />} />
    </Routes>
    <Footer />
        
    </>
  );
}

export default App;
