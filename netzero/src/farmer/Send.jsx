import React from 'react'


class Send extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
       return (<div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <form  onSubmit={this.handleSubmit}>

                <div className="form-group">
                  <h6>Address:</h6>
                  <input type="text" className="form-control form-control-sm"  name="crypto" placeholder="Transfer Address" maxlength="42" minlength="42" required />
                </div>

                <div className="form-group mt-3 row no-gutters">
                  <div className="col-sm-5 pr-2">
                    <h6>USDC Tokens:</h6>
                    <input type="text" className="form-control form-control-sm" placeholder="Amount HAT"  name="amount" required />
                  </div>
                  <div className="col-sm-7">
                    <h6>TRA Type:</h6>
                    <select type="text"  name="typex" className="form-select form-select-sm" id="exampleInputPassword1" required>
                      <option value="Mortgage/Rent">Mortgage/Rent</option>
                      <option value="Food">Food</option>
                      <option value="Utilities">Utilities</option>
                      <option value="Bills">Bills</option>
                      <option value="Shopping">Shopping</option>
                      <option value="Transportation">Transportation</option>
                      <option value="Insurance">Insurance</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Others">Others</option>
                    </select>

                  </div>
                </div>

                <div className="mt-4">
                  <button className="btn btn-success btn-block btn-sm" type="submit">Transfer USDC</button>
                </div>


              </form>
            </div>
          </div>
        </div>


      </div>)
    }
}

export default Send;