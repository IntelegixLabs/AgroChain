import react from 'react'

class Header extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'Gajanan'
    }
  }
  render() {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Hitaya</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end text-center" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <a routerLink="/user-dashboard" class="nav-link" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">editprofile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">wallet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">NFT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">loan Notification</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">loan History</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>)
  }
}

export default Header