import React from 'react'

import profile from './profile.png'


export const Profile = () => {
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
									<h2 className="mt-3 text-dark-grey">$20</h2>
								</div>
							</div>

							<div className="row mt-2 text-center text-sm-left">
								<div className="col-md-12">
									<h3 className="mb-0">Chonga Bichi</h3>
									<p className="mt-0 text-dark-grey">0x536493hfknjsnfh3832733</p>

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
						<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
										<li className="nav-item">
											<a className="nav-link active" id="home-tab" data-toggle="tab" href="#tokens" role="tab" aria-controls="home" aria-selected="true">
												<strong>TOKENS</strong>
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" id="profile-tab" data-toggle="tab" href="#nfts" role="tab" aria-controls="profile" aria-selected="false">
												<strong>NFTs</strong>
											</a>
										</li>
									</ul>

									<div className="tab-content mx-4" id="myTabContent">
										<div className="tab-pane fade show active" id="tokens" role="tabpanel" aria-labelledby="tokens-tab">
											<div className="row">
												<div className="col-3 col-sm-2 col-md-2">
													<img src={profile} className="img-fluid" />
												</div>
												<div className="col-9 col-sm-10 col-md-10 mt-md-2">
													<h4 className="mb-0 bold">0 ETH</h4>
													<p className="mt-0 no-td-space text-muted type-6">$0</p>
												</div>
											</div>

											<hr />

											<div className="row mt-4">
												<div className="col-3 col-sm-2 col-md-2">
													<img src={profile} className="img-fluid" />
												</div>
												<div className="col-9 col-sm-10 col-md-10 mt-md-2">
													<h4 className="mb-0 bold">0 ETH</h4>
													<p className="mt-0 no-td-space text-muted type-6">$0</p>
												</div>
											</div>

											<hr />
										</div>
										<div className="tab-pane fade" id="nfts" role="tabpanel" aria-labelledby="nfts-tab">
											<div className="text-center text-dark-grey">
												<i className="fa fa-circle-notch fa-3x fa-fw"></i>
												<h3 className="mt-2 mb-0">No NFTs yet</h3>
												<a href="#">Learn More</a>
											</div>

											<div className="row text-center text-muted mt-4">
												<div className="col-md-12">
													<p className="type-6 mb-0">Don't see your NFT?</p>
													<a className="type-6 mt-0" href="#">+ ADD NFTs</a>
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
                
    )
}