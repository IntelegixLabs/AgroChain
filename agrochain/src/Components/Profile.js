import React from 'react'

import profile from './profile.png'
import nft1 from './nft/nft1.png'
import nft2 from './nft/nft2.png'

import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { create as ipfsHttpClient } from 'ipfs-http-client'
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')


function renderSoldItems(items) {
	return (
		<>
			<h2>Sold</h2>
			<Row xs={1} md={2} lg={4} className="g-4 py-3">
				{items.map((item, idx) => (
					<Col key={idx} className="overflow-hidden">
						<Card>
							<Card.Img variant="top" src={item.image} />
							<Card.Footer>
								For {ethers.utils.formatEther(item.totalPrice)} ETH - Recieved {ethers.utils.formatEther(item.price)} ETH
							</Card.Footer>
						</Card>
					</Col>
				))}
			</Row>
		</>
	)
}



const Profile = ({ marketplace, nft, account, balance }) => {
	const [image, setImage] = useState('')
	const [price, setPrice] = useState(null)
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
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
	}
	const createNFT = async () => {
		console.log("NFT");
		if (!image || !price || !name || !description) return
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
	const [listedItems, setListedItems] = useState([])
	const [soldItems, setSoldItems] = useState([])
	const loadListedItems = async () => {
		// Load all sold items that the user listed
		const itemCount = await marketplace.itemCount()
		let listedItems = []
		let soldItems = []
		for (let indx = 1; indx <= itemCount; indx++) {
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
					itemId: i.itemId,
					name: metadata.name,
					description: metadata.description,
					image: metadata.image
				}
				listedItems.push(item)
				// Add listed item to sold items array if sold
				if (i.sold) soldItems.push(item)
			}
		}
		setLoading(false)
		setListedItems(listedItems)
		setSoldItems(soldItems)
		console.log(listedItems);
	}
	const [items, setItems] = useState([])
	const loadMarketplaceItems = async () => {
		// Load all unsold items
		const itemCount = await marketplace.itemCount()
		let items = []
		for (let i = 1; i <= itemCount; i++) {
			const item = await marketplace.items(i)
			if (!item.sold) {
				// get uri url from nft contract
				const uri = await nft.tokenURI(item.tokenId)
				// use uri to fetch the nft metadata stored on ipfs 
				const response = await fetch(uri)
				const metadata = await response.json()
				// get total price of item (item price + fee)
				const totalPrice = await marketplace.getTotalPrice(item.itemId)
				// Add item to items array
				items.push({
					totalPrice,
					itemId: item.itemId,
					seller: item.seller,
					name: metadata.name,
					description: metadata.description,
					image: metadata.image
				})
			}
		}
		setLoading(false)
		setItems(items)
	}
	const [purchases, setPurchases] = useState([])
	const loadPurchasedItems = async () => {
		// Fetch purchased items from marketplace by quering Offered events with the buyer set as the user
		const filter = marketplace.filters.Bought(null, null, null, null, null, account)
		const results = await marketplace.queryFilter(filter)
		//Fetch metadata of each nft and add that to listedItem object.
		const purchases = await Promise.all(results.map(async i => {
			// fetch arguments from each result
			i = i.args
			// get uri url from nft contract
			const uri = await nft.tokenURI(i.tokenId)
			// use uri to fetch the nft metadata stored on ipfs 
			const response = await fetch(uri)
			const metadata = await response.json()
			// get total price of item (item price + fee)
			const totalPrice = await marketplace.getTotalPrice(i.itemId)
			// define listed item object
			let purchasedItem = {
				totalPrice,
				price: i.price,
				itemId: i.itemId,
				name: metadata.name,
				description: metadata.description,
				image: metadata.image
			}
			return purchasedItem
		}))
		setLoading(false)
		setPurchases(purchases)
	}
	const buyMarketItem = async (item) => {
		await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
		loadMarketplaceItems()
	}
	useEffect(() => {
		loadListedItems()
	}, [])
		
    return (
		<div className="container mt-4 mb-4">
			<div className="row">
				<div className="col-md-12">
					<h2 className="mb-0">Wallet</h2>
					<p className="text-muted type-6 mt-0"><i className="fa fa-circle fa-fw fa-sm text-success"></i> Ethereum Main Network</p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">

					<div className="card border-2x mb-3" id="basic-details-2">
						<div className="card-body">
							<div className="row">
								<div className="col-md-4 text-center">
									<img src={profile} className="img-fluid" />
								</div>
								<div className="col-md-8 text-center">
									<h2 className="mt-3 text-dark-grey">{balance} ETH</h2>
								</div>
							</div>

							<div className="row mt-2 text-center text-sm-left">
								<div className="col-md-12">
									<h3 className="mb-0">Chonga Bichi</h3>
									<p className="mt-0 text-dark-grey">{account}</p>

									<div className="row mt-4 text-center">
										<div className="col-md-3 col-sm-3 col-3">
											<button className="btn btn-primary btn-sm">
												<i className="fa fa-arrow-down fa-fw"></i>
											</button>
											<p className="small text-primary">Receive</p>
										</div>
										<div className="col-md-3 col-sm-3 col-3">
											<button className="btn btn-primary btn-sm">
												<i className="fa fa-arrow-up fa-fw"></i>
											</button>
											<p className="small text-primary">Send</p>
										</div>
										<div className="col-md-3 col-sm-3 col-3">
											<button className="btn btn-primary btn-sm">
												<i className="fa fa-credit-card fa-fw"></i>
											</button>
											<p className="small text-primary">Buy</p>
										</div>
										<div className="col-md-3 col-sm-3 col-3">
											<button className="btn btn-primary btn-sm">
												<i className="fa fa-exchange-alt fa-fw"></i>
											</button>
											<p className="small text-primary">Swap</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="d-grid gap-2">
						<button type="button" className="btn btn-primary btn-lg btn-block" data-bs-toggle="modal" data-bs-target="#exampleModal">
							Mint NFT
						</button>
					</div>

				</div>

				<div className="col-md-8">
					<div className="card border-2x" id="basic-details-2">
						<div className="card-body">
							<div className="row">
								<div className="col-md-12">
									<ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
										<li className="nav-item" role="presentation">
											<a className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
												<strong>NFTs</strong>
											</a>
										</li>
										<li className="nav-item" role="presentation">
											<a className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
												<strong>Sold NFTs</strong>
											</a>
										</li>
									</ul>

									<div className="tab-content mx-4" id="myTabContent">
										<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
											<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">



												<div className="col-md-9">
													<div className="row no-gutters">
														{purchases.map((item, idx) => (
															<div className="col-6 col-sm-4 col-md-4">
																<div className="card mx-1 mb-3">
																	<img className="img-fluid" src={item.image} />
																	<div className="card-body">

																		<div className="row">
																			<div className="col-md-12">
																				<p className="text-muted type-6 my-0">{item.name}</p>
																				<h5 className="my-0">
																					<a href="#">{item.description}</a>
																				</h5>
																			</div>
																		</div>
																		<div className="row mt-3">
																			<div className="col-md-6">
																				<p className="text-success type-6 my-0">
																					<i className="fab fa-ethereum"></i>{ethers.utils.formatEther(item.totalPrice)} ETH
																				</p>
																				<p className="text-primary type-7 my-0">
																					Offer <i className="fab fa-ethereum"></i> {ethers.utils.formatEther(item.totalPrice) * (100 / 101)}
																				</p>
																			</div>
																			<div className="col-md-6">
																				<div className="text-end float-end mt-1">
																					<button type="button" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#nft2">Buy Now</button>
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

											<hr />
										</div>
										<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
								
											

											<div className="col-md-9">
												<div className="row no-gutters">
													{listedItems.map((item, idx) => (
														<div className="col-6 col-sm-4 col-md-4">
															<div className="card mx-1 mb-3">
																<img className="img-fluid" src={item.image} />
																<div className="card-body">

																	<div className="row">
																		<div className="col-md-12">
																			<p className="text-muted type-6 my-0">{item.name}</p>
																			<h5 className="my-0">
																				<a href="#">{item.description}</a>
																			</h5>
																		</div>
																	</div>
																	<div className="row mt-3">
																		<div className="col-md-6">
																			<p className="text-success type-6 my-0">
																				<i className="fab fa-ethereum"></i>{ethers.utils.formatEther(item.totalPrice)} ETH
																			</p>
																			<p className="text-primary type-7 my-0">
																				Offer <i className="fab fa-ethereum"></i> {ethers.utils.formatEther(item.totalPrice)*(100/101)}
																			</p>
																		</div>
																		<div className="col-md-6">
																			<div className="text-end float-end mt-1">
																				<button type="button" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#nft2">Buy Now</button>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>

													

												{/*	<div className="flex justify-center">*/}
												{/*		{listedItems.length > 0 ?*/}
												{/*			<div className="px-5 py-3 container">*/}
												{/*				<h2>Listed</h2>*/}
												{/*				<Row xs={1} md={2} lg={4} className="g-4 py-3">*/}
												{/*					{listedItems.map((item, idx) => (*/}
												{/*						<Col key={idx} className="overflow-hidden">*/}
												{/*							<Card>*/}
												{/*								<Card.Img variant="top" src={item.image} />*/}
												{/*								<Card.Footer>{ethers.utils.formatEther(item.totalPrice)} ETH</Card.Footer>*/}
												{/*							</Card>*/}
												{/*						</Col>*/}
												{/*					))}*/}
												{/*				</Row>*/}
												{/*				{soldItems.length > 0 && renderSoldItems(soldItems)}*/}
												{/*			</div>*/}
												{/*			: (*/}
												{/*				<main style={{ padding: "1rem 0" }}>*/}
												{/*					<h2>No listed assets</h2>*/}
												{/*				</main>*/}
												{/*			)}*/}
												{/*	</div>*/}
												{/*</div>*/}
												
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
									<div className="mx-2 mt-2">
										<div className="form-group">
											<h6>Name: <span className="text-danger">*</span></h6>
											<Form.Control onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name" required />
										</div>
										<br />
										<div className="form-group">
											<h6>Link to asset:<span className="text-danger">*</span></h6>
											<Form.Control className="form-control" placeholder="Enter Link" type="file" id="file" name="file" required accept="image/*" onChange={uploadToIPFS} />
											<p className="text-muted type-7 mt-1 mb-0">Link your NFT to external link so that person can view.</p>
										</div>
										<br />
										<div className="form-group">
											<h6>Description: <span className="text-danger">*</span></h6>
											<Form.Control onChange={(e) => setDescription(e.target.value)} className="form-control" required as="textarea" placeholder="Enter Description..." />
										</div>
										<br />
										<div className="form-group">
											<h6>Price (ETH): <span className="text-danger">*</span></h6>
											<Form.Control onChange={(e) => setPrice(e.target.value)} className="form-control" required type="number" placeholder="Enter Selling Price" />
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button onClick={createNFT} type="button" className="btn btn-success">Mint</button>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

                
    )
}

export default Profile