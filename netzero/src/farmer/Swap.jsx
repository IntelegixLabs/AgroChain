import React from "react";

export default function Swap(props) {
    return (
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-body px-3 py-3" style={{padding:0, margin: 0}}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <select type="text" className="form-control">
                                    <option value="HAT">HAT</option>
                                    <option value="BTC">BTC</option>
                                    <option value="BTC">BTC</option>
                                    <option value="BTC">BTC</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form-group">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button className="btn btn-primary btn-sm"><i className="fa fa-exchange-alt" style={{transform: 'rotate(90deg)'}}></i></button>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4">
                            <div className="form-group">
                                <select type="text" className="form-control">
                                    <option value="BTC">BTC</option>
                                    <option value="BTC">BTC</option>
                                    <option value="BTC">BTC</option>
                                    <option value="BTC">BTC</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form-group">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn btn-success btn-block">Transfer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}