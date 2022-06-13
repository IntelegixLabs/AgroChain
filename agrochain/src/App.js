import { useContext, useEffect, useState } from 'react'
import {
    Routes,
    Route
} from "react-router-dom";

import MarketplaceAbi from './frontend/contractsData/Marketplace.json'
import MarketplaceAddress from './frontend/contractsData/Marketplace-address.json'
import NFTAbi from './frontend/contractsData/NFT.json'
import NFTAddress from './frontend/contractsData/NFT-address.json'
import { ethers } from "ethers"

import Navigation from "./Components/Navigation";
import { NFT } from "./Components/NFT";
import { NFTDetails } from "./Components/NFTDetails";
import Profile from "./Components/Profile";
import { Register } from "./Components/Register";
import { Front } from "./Components/Front";
import { Certificate } from "./Components/Certificate/Certificate";
import { NftContext } from "./frontend/NftContext/NftProvider";

import './App.css';


function App() {
    const { setAccount, setMarketplace, setNFT, setBalance, setIsLoading, account, setAccountType } = useContext(NftContext);
    const [loading, setLoading] = useState(true)

    const loadContracts = async (signer) => {
        // Get deployed copies of contracts
        const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
        setMarketplace(marketplace)
        const fam = await marketplace.farmers(account)
        setAccountType(fam.name ? true : false)
        const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
        setNFT(nft)
        setLoading(false)
    }

    const web3Handler = async () => {
        if (!window.ethereum) {
            alert('Install metamask extention');
            return;
        }
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0])
        // Get provider from Metamask
        /*const provider = new ethers.providers.JsonRpcProvider(RpcHttpUrl)*/
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        // Set signer
        const signer = provider.getSigner()
        const balance = await provider.getBalance(accounts[0])
        const balances = ethers.utils.formatEther(balance);
        setBalance(balances)
        loadContracts(signer)
    };

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('chainChanged', (chainId) => {
                window.location.reload();
            })

            window.ethereum.on('accountsChanged', async function (accounts) {
                setAccount(accounts[0])
                await web3Handler()
            });
        }
    });

    useEffect(() => {
        if (!!localStorage.getItem('account')) {
            (async () => {
                const account = localStorage.getItem('account');
                setAccount(account)
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                const signer = provider.getSigner();
                const balance = await provider.getBalance(account);
                const balances = ethers.utils.formatEther(balance);
                setBalance(balances)
                const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
                setMarketplace(marketplace)
                const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
                const fam = await marketplace.farmers(account)
                setAccountType(fam.name ? true : false)
                setNFT(nft)
                setIsLoading(true)
            })();
        }
    }, []);

    useEffect(() => {
        if (!!account) {
            localStorage.setItem('account', account);
        }
    }, [account]);

    return (
        <>
            <Navigation web3Handler={web3Handler} />
            <Routes>
                <Route path="/" element={<Front />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="nft" element={<NFT />} />
                <Route path="nft-details" element={<NFTDetails />} />
                <Route path="certificate" element={<Certificate />} />
                <Route path="*" element={<Front />} />
            </Routes>
        </>
    );
}

export default App;
