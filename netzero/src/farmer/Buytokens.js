import React from 'react'
class Buytoken extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
        this.submitForm= this.submitForm.bind(this)
    }
submitForm(data){

}
render(){
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body px-3 py-3" style={{padding:0, margin: 0}}>

                        <form onSubmit={this.submitForm}>
                        <div className="form-group">
                            <h6>HAT Tokens:</h6>
                            <input className="form-control form-control-sm" placeholder="Amount HAT" name="amt" required />
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-danger btn-block btn-sm" type="submit">Burn HAT</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}
  
}

export default Buytoken