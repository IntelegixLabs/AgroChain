import React, { useContext } from 'react'

import { Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import { ethers } from "ethers"
import { create as ipfsHttpClient } from 'ipfs-http-client'

import farmer from './assets/farmer.jpg'
import business from './assets/business.png'
import farm_nft from './assets/farm_nft.jpg'

import { Loading } from "./Loading";
import { Footer } from "./Footer";
import './loading.css';
import { NftContext } from '../frontend/NftContext/NftProvider'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const api = axios.create({
	baseURL: `https://min-api.cryptocompare.com/`
})


const Profile = () => {
	const { account, nft, balance, marketplace, isLoading } = useContext(NftContext);
	const navigate = useNavigate();
	const [image, setImage] = useState('')
	const [price, setPrice] = useState(null)
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [farmerId, setfarmerId] = useState('')
	const [farmername, setfarmername] = useState('')
	const [govtid, setgovtid] = useState('')
	const [usd, setusd] = useState(0)
	const [co2, setco2] = useState('')
	const [location, setlocation] = useState('')
	const [area, setarea] = useState('')
	const [contact, setcontact] = useState('')
	const [iotdeviceid, setiotdeviceid] = useState('')
	const nft_name = govtid + ' ' + new Date().getDate() + '/' + new Date().toLocaleString("en-US", { month: "long" }) + '/' + new Date().getFullYear()
	const uploadToIPFS = async (event) => {
		event.preventDefault()
		const file = event.target.files[0]
		if (typeof file !== 'undefined') {
			try {
				const result = await client.add(file)
				console.log(result)
				setImage(`https://ipfs.infura.io/ipfs/${result.path}`)
			} catch (error) {
				console.log("ipfs image upload error: ", error)
			}
		}
		if (!event.target.files || event.target.files.length === 0) {
			setSelectedFile(undefined)
			return
		}
		setSelectedFile(event.target.files[0])
	}

	const ETH_to_USD = () => {
		api.get('data/price?fsym=ETH&tsyms=USD').then(({ data }) => {
			console.log(data["USD"]);
			setusd(data["USD"])
		})
	}

	const createNFT = async () => {
		console.log("NFT");
		console.log(nft_name);
		const name = nft_name;
		console.log(description)
		if (!image || !price || !nft_name || !description) return
		try {
			const result = await client.add(JSON.stringify({ image, price, name, description }))
			mintThenList(result)
		} catch (error) {
			console.log("ipfs uri upload error: ", error)
		}
	}
	const mintThenList = async (result) => {

		const uri = `https://ipfs.infura.io/ipfs/${result.path}`
		console.log(uri);
		// mint nft
		await (await nft.mint(uri)).wait()
		// get tokenId of new nft
		const id = await nft.tokenCount()
		// approve marketplace to spend nft
		await (await nft.setApprovalForAll(marketplace.address, true)).wait()
		// add nft to marketplace
		const listingPrice = ethers.utils.parseEther(price.toString())
		await (await marketplace.makeItem(nft.address, id, listingPrice)).wait()
	}
	const [loading, setLoading] = useState(true)
	const [listedFarmers, setListedFarmers] = useState([])
	const [listedItems, setListedItems] = useState([])
	const [soldItems, setSoldItems] = useState([])
	const [purchasedItems, setPurchasedItems] = useState([])

	const loadListedItems = async () => {
		// Load all sold items that the user listed
		const itemCount = await marketplace.itemCount()
		let listedItems = []
		let soldItems = []
		let purchasedItems = []
		for (let indx = 1; indx <= itemCount; indx++) {
			console.log(marketplace.items(indx))
			const i = await marketplace.items(indx)
			if (i.seller.toLowerCase() === account) {
				// get uri url from nft contract
				const uri = await nft.tokenURI(i.tokenId)
				// use uri to fetch the nft metadata stored on ipfs
				const response = await fetch(uri)
				const metadata = await response.json()
				// get total price of item (item price + fee)
				const totalPrice = await marketplace.getTotalPrice(i.itemId)
				// define listed item object
				let item = {
					totalPrice,
					price: i.price,
					seller: i.seller,
					itemId: i.itemId,
					name: metadata.name,
					description: metadata.description,
					image: metadata.image
				}
				listedItems.push(item)
				// Add listed item to sold items array if sold
				if (i.sold) soldItems.push(item)
			}

			if (i.owner.toLowerCase() === account && i.sold) {
				// get uri url from nft contract
				const uri = await nft.tokenURI(i.tokenId)
				// use uri to fetch the nft metadata stored on ipfs
				const response = await fetch(uri)
				const metadata = await response.json()
				// get total price of item (item price + fee)
				const totalPrice = await marketplace.getTotalPrice(i.itemId)
				// define listed item object
				let item = {
					totalPrice,
					price: i.price,
					itemId: i.itemId,
					name: metadata.name,
					description: metadata.description,
					image: metadata.image
				}
				purchasedItems.push(item)
			}
		}
		const fam = await marketplace.farmers(account)
		setfarmername(fam.name)
		setgovtid(fam.govtId)
		setlocation(fam.location)
		setarea(fam.landarea)
		setcontact(fam.contact)
		setiotdeviceid(fam.iotid)


		setLoading(false)
		setListedItems(listedItems)
		setSoldItems(soldItems)
		setPurchasedItems(purchasedItems)
	}

	const [selectedFile, setSelectedFile] = useState()
	const [preview, setPreview] = useState()


	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined)
			return
		}

		const objectUrl = URL.createObjectURL(selectedFile)
		setPreview(objectUrl)

		return () => URL.revokeObjectURL(objectUrl)
	}, [selectedFile])

	const onSelectFile = e => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined)
			return
		}

		setSelectedFile(e.target.files[0])
	}

	useEffect(() => {
		if (isLoading) {
			ETH_to_USD()
			loadListedItems()
		}
	}, [isLoading]);

	if (loading) return (
		<Loading />
	)
	return (
		<>
		<div className="container mt-4 mb-4">
			<div className="row">
				<div className="col-md-12">
					<h2 className="mb-0">{farmername ? 'Farmer': 'Customer'} Wallet</h2>
					<p className="text-muted type-6 mt-0"><i className="fa fa-circle fa-fw fa-sm text-success"></i> Ethereum Main Network</p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">

					<div className="card border-2x mb-3" id="basic-details-2">
						<div className="card-body">
								<div className="row">
									{farmername ? (<>
										<div className="col-md-4 text-center">
											<img src={farmer} className="img-fluid" />
										</div></>) :
										(<>
										<div className="col-md-4 text-center">
											<img src={business} className="img-fluid" />
										</div></>)}
								<div className="col-md-8 text-center">
									<br />
										<h2 className="mt-1 text-dark-grey">{balance.slice(0, 5)} ETH</h2>
								</div>
							</div>

							<div className="row mt-2 text-sm-left">
								<div className="col-md-12">
								{farmername && <>
									<h3 className="mb-0">{farmername}</h3>
                  <p className="type-6 text-blue mt-0">{account}</p>
                  <div className="my-4">
                    <h6 className="mb-0">
                      <i className="fa fa-id-card fa-fw"></i>&nbsp; AADHAR NUMBER
                    </h6>
                    <p className="text-muted" style={{ marginLeft: "24px" }}>{govtid}</p>
                    <h6 className="mb-0">
                      <i className="fa fa-compass fa-fw"></i>&nbsp;
                      LOCATION CO-ORDINATES
                    </h6>
					<p className="text-muted" style={{ marginLeft: "24px" }}>{location}</p>
					<h6 className="mb-0">
						<i className="fa fa-tree fa-fw"></i>&nbsp;
						Total Farm Land Area
					</h6>
					<p className="text-muted" style={{ marginLeft: "24px" }}>{area}</p>
                    <h6 className="mb-0">
                      <i className="fa fa-address-book fa-fw"></i>&nbsp;  Contact No.
                    </h6>
                    <p className="text-muted" style={{ marginLeft: "24px" }}>{contact}</p>
                    <h6 className="mb-0">
                      <i className="fa fa-map-marker fa-fw"></i>&nbsp;
                      IOT DEVICE ID
                    </h6>
					<p className="text-muted" style={{ marginLeft: "24px" }}>{iotdeviceid}</p>
                  </div>
									</>}

									<div className="row mt-4 text-center">
										<div className="col-md-3 col-sm-3 col-3">
											<button className="btn btn-success btn-sm">
												<i className="fa fa-arrow-down fa-fw"></i>
											</button>
											<p className="small text-success">Receive</p>
										</div>
										<div className="col-md-3 col-sm-3 col-3">
											<button className="btn btn-danger btn-sm">
												<i className="fa fa-arrow-up fa-fw"></i>
											</button>
											<p className="small text-danger">Send</p>
										</div>
										<div className="col-md-3 col-sm-3 col-3">
											<button className="btn btn-secondary btn-sm">
												<i className="fa fa-credit-card fa-fw"></i>
											</button>
											<p className="small text-secondary">Buy</p>
										</div>
										<div className="col-md-3 col-sm-3 col-3">
											<button className="btn btn-warning btn-sm">
												<i className="fa fa-exchange-alt fa-fw"></i>
											</button>
											<p className="small text-warning">Swap</p>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
					{farmername && <div className="d-grid gap-2">
						<button type="button" className="btn btn-primary btn-lg btn-block" data-bs-toggle="modal" data-bs-target="#exampleModal">
							Mint NFT
						</button>
					</div>}

				</div>

				<div className="col-md-8">
					<div className="card border-2x" id="basic-details-2">
						<div className="card-body">
							<div className="row">
								<div className="col-md-12">
									<ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
										<li className="nav-item" role="presentation">
											<a className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
												<strong>Minted NFTs</strong>
											</a>
										</li>
										<li className="nav-item" role="presentation">
											<a className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
												<strong>Sold NFTs</strong>
											</a>
										</li>
										<li className="nav-item" role="presentation">
											<a className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
												<strong>Purchased NFTs</strong>
											</a>
										</li>
									</ul>

									<div className="tab-content mx-4" id="myTabContent">
										<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
											<div className="col-md-12">
												<div className="row no-gutters">
													{listedItems.map((item, idx) => (
														<div className="col-6 col-sm-4 col-md-4" key={item}>
															<div className="card mx-1 mb-3">
																<img className="img-fluid" src={item.image} />
																<div className="card-body">

																	<div className="row">
																		<div className="col-md-12">
																			<p className="text-muted type-6 my-0">{item.name}</p>
																			<p className="text-info type-7 my-0">
																				{item.description}
																			</p>
																		</div>
																	</div>
																	<div className="row mt-3">
																		<div className="col-md-6">
																			<p className="text-success type-6 my-0">
																				<i className="fab fa-ethereum"> </i> {ethers.utils.formatEther(item.totalPrice)}
																			</p>
																			{/*<p className="text-primary type-7 my-0">*/}
																			{/*	Offer <i className="fa fa-dollar-sign"> </i> {ethers.utils.formatEther(item.totalPrice) * (100 / 101)}*/}
																			{/*</p>*/}
																		</div>
																		<div className="col-md-6">
																			{/*<div className="text-end float-end mt-1">*/}
																			{/*	<button type="button" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#nft2">Buy Now</button>*/}
																			{/*</div>*/}
																			<p className="text-danger type-6 my-0">
																				<i className="fab fa-ethereum"> </i> {ethers.utils.formatEther(item.totalPrice) * (100 / 101)}
																			</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>
										</div>
										<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
											<div className="col-md-12">
												<div className="row no-gutters">
													{soldItems.map((item, idx) => (
														<div className="col-6 col-sm-4 col-md-4">
															<div className="card mx-1 mb-3">
																<img className="img-fluid" src={item.image} />
																<div className="card-body">

																	<div className="row">
																		<div className="col-md-12">
																			<p className="text-muted type-6 my-0">{item.name}</p>
																			<p className="text-info type-7 my-0">
																				{item.description}
																			</p>
																		</div>
																	</div>
																	<div className="row mt-3">
																		<div className="col-md-6">
																			<p className="text-danger type-6 my-0">
																				<i className="fab fa-ethereum"> </i>{ethers.utils.formatEther(item.totalPrice)}
																			</p>
																			<p className="text-success type-6 my-0">
																				<i className="fab fa-ethereum"> </i>{ethers.utils.formatEther(item.price)}
																			</p>
																		</div>
																		<div className="col-md-6">
																			<div className="text-end float-end mt-1">
																				<button type="button" className="btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target="#nft2" disabled>SOLD</button>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>
										</div>
										<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
											<div className="col-md-12">
												<div className="row no-gutters">
													{purchasedItems.map((item, idx) => (
														<div className="col-6 col-sm-4 col-md-4">
															<div className="card mx-1 mb-3">
																<img className="img-fluid" src={item.image} />
																<div className="card-body">

																	<div className="row">
																		<div className="col-md-12">
																			<p className="text-muted type-6 my-0">{item.name}</p>
																			<p className="text-info type-7 my-0">
																				{/*{item.description}*/}
																				<a onClick={() => navigate('/certificate', { state: { nfts: item } })}>{item.description}</a>
																			</p>
																			{/*<a onClick={() => navigate('/nft-details', { state: { nfts: item } })}>{item.description}</a>*/}
																		</div>
																	</div>
																	<div className="row mt-3">
																		<div className="col-md-6">
																			<p className="text-success type-6 my-0">
																				<i className="fab fa-ethereum"> </i>{ethers.utils.formatEther(item.totalPrice)} 
																			</p>
																		</div>
																		<div className="col-md-6">
																			<div className="text-end float-end mt-1">
																				<button type="button" className="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#nft2" disabled>BOUGHT</button>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
					<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-body">
									<div className="card-body sidebar-image-card-body">
										{selectedFile && <img src={preview} className="img-fluid sidebar-image" />}
									</div>
									<div className="mx-2">
										<div className="form-group">
											<h6>Name: <span className="text-danger">*</span></h6>
											<Form.Control onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name" value={govtid + ' ' + new Date().getDate() + '/' + new Date().toLocaleString("en-US", { month: "long" }) + '/' + new Date().getFullYear() } required disabled />
										</div>
										<br />
										<div className="form-group">
											<h6>Add a Picture of your Farm:<span className="text-danger">*</span></h6>
											<Form.Control className="form-control" placeholder="Enter Link" type="file" id="file" name="file" required accept="image/*" onChange={uploadToIPFS} />
											<p className="text-muted type-7 mt-1 mb-0">Link your Farm Image to external link so that person can view.</p>
										</div>
										<br />
										<div className="form-group">
											<h6>Carbon Emission Saved (KG): <span className="text-danger">*</span></h6>
												<Form.Control onChange={(e) => setco2(e.target.value)} className="form-control" required placeholder="Enter Co2 Emission Saved" />
											<p className="text-muted type-7 mt-1 mb-0">Estimated Co2 Emission Saved by adopting sustainable farming practice</p>
										</div>
										<br />
										<div className="form-group">
											<h6>Sustainable Farming Practice Adopted: <span className="text-danger">*</span></h6>
												<Form.Control onChange={(e) => setDescription(co2 + " KG Carbon Emission Saved By "+ e.target.value)} className="form-control" required as="textarea" placeholder="Enter Description..." />
												<p className="text-muted type-7 mt-1 mb-0">Describe how have you adopted sustainable farming practice to reduce carbon emissions.</p>
										</div>
										<br />
										<div className="form-group">
												<h6><i className="fab fa-ethereum"> </i> Price (ETH) = { usd * price } USD <span className="text-danger">*</span></h6>
												<Form.Control onChange={(e) => setPrice(e.target.value)} className="form-control" required type="number" placeholder="Enter Selling Price" />
												<p className="text-muted type-7 mt-1 mb-0">Enter the Price in ETH for selling the Carbon credits.</p>
										</div>

                    <div className="row mt-4">
                      <div className="col-md-12">
						<div className="d-grid gap-2 d-md-flex justify-content-md-end">
						  <button className="btn btn-danger me-md-1" type="button" data-bs-dismiss="modal">Close</button>
						  <button onClick={createNFT} className="btn btn-success" type="button">Mint</button>
                        </div>
                      </div>
                    </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
		<Footer />
	</>
    )
}

export default Profile
