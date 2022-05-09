import react from 'react'
import Buytoken from './Buytokens'

class Farmersmain extends react.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { prhat_balance, curr_user_name, user } = this.props
        return (
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div classNameName="col-md-12">
                        <h2 classNameName="mb-0">Wallet</h2>
                        <div classNameName="row">
                            <div classNameName="col-md-4">
                                <div classNameName="row">
                                    <h5 classNameName="col-3 mt-1">Network:</h5>
                                    <div classNameName="col-9">
                                        <select classNameName="form-select form-select-sm text-muted">
                                            <option value="Ethereum" selected>Ethereum Main Network</option>
                                            <option value="5ire Test Network">5ire Test Network</option>
                                            <option value="Cudos Test Network">Cudos Test Network</option>
                                            <option value="Prasaga">Prasaga</option>
                                            <option value="Solana">Solana</option>
                                            <option value="Lumos">Lumos</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4">

                        <div className="card border-2x mb-3" id="basic-details-2">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                        <img src="../../assets/profilepic.jpg" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 text-center">
                                        <h2 className="mt-3 text-dark-grey">{prhat_balance} USDC</h2>
                                        <br />
                                    </div>
                                </div>

                                <div className="row mt-2 text-center text-sm-left">
                                    <div className="col-md-12">
                                        <h3 className="mb-0">{curr_user_name}</h3>
                                        <h3 className="mt-3 text-dark-grey">{user.balance}  ETH</h3>
                                        <br />
                                        <p className="text-muted type-7 mt-0">{user.address}</p>
                                        <div className="row mt-4 text-center">
                                            <div className="col-md-3 col-sm-3 col-3">
                                                <button className="btn btn-primary" onClick="ReciveQr()">
                                                    <i className="fa fa-arrow-down fa-fw"></i>
                                                </button>
                                                <p className="small text-primary">Receive</p>
                                            </div>
                                            <div className="col-md-3 col-sm-3 col-3">
                                                <button className="btn btn-primary" onClick="sendtoken()">
                                                    <i className="fa fa-arrow-up fa-fw"></i>
                                                </button>
                                                <p className="small text-primary">Send</p>
                                            </div>
                                            <div className="col-md-3 col-sm-3 col-3">
                                                <button className="btn btn-danger" onClick="buytoken()">
                                                    <i className="fa fa-fire fa-fw"></i>
                                                </button>
                                                <p className="small text-danger">Burn</p>
                                            </div>
                                            <div className="col-md-3 col-sm-3 col-3">
                                                <button className="btn btn-warning" onClick="swaptoken()">
                                                    <i className="fas fa-exchange-alt fa-fw"></i>
                                                </button>
                                                <p className="small text-dark">Swap</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Buytoken />
            </div>
        )
    }
}


export default Farmersmain