import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './footer.css'

export const Footer = () => {
  let footerStyle = {
    position: "absolute",
    top: "100vh",
    width: "100%"
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">NetZero <i> is a NFT marketplace </i> is an initiative  to help the upcoming industries with reducing carbon content. NetZero focuses on providing the most efficient way to reduce the carbon emission thereby helping farmers buying modern farming equipments and technology adoption. </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>NFT Marketplace</h6>
            <ul className="footer-links">
              <li><a href="explore/">Explore</a></li>
              <li><a href="Activity/">Activity</a></li>
              <li><a href="CryptoCurrency/">CryptoCurrency</a></li>
              <li><a href="Solidity/">Solidity</a></li>
              <li><a href="CarbonCredits/">CarbonCredits</a></li>
              <li><a href="NFT/">NFT</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://NetZero.com/about/">About Us</a></li>
              <li><a href="http://NetZero.com/contact/">Contact Us</a></li>
              <li><a href="http://NetZero.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://NetZero.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://NetZero.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by
              <a href="#">NetZero</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a className="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

/** 
  <footer className="mt-auto" style={footerStyle} >
            <br />
            <div className="container-fluid bg-blue text-white">
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>Agro Chain</h3>
                                    <h6>Invest in the Greener Future, but buying NFT from farmers, and providing them resources to invest in sustainable farming methods.</h6>
                                    <h6>Made with <i className="fa fa-heart fa-fw"></i> in India.</h6>
                                </div>

                                <div className="col-md-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>

            <div className="container">
                <div className="row mt-4 mb-3">
                    <div className="col-md-5 col-sm-5 col-5">
                        <p className="type-6">&copy; 2022 Agro Chain</p>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2 text-center"></div>
                    <div className="col-md-5 col-sm-5 col-5">
                        <ul className="inline-links text-right">
                            <li className="links">
                                <a className="link" href="?pg=privacy_policy">Privacy Policy</a>
                            </li>
                            <li className="links">
                                <a className="link" href="?pg=tc">Terms</a>
                            </li>
                            <li className="links">
                                <a className="link" href="?pg=faq">FAQ</a>
                            </li>
                            <li className="links">
                                <a className="link" href="?pg=about">About</a>
                            </li>
                            <li className="links">
                                <a className="link" href="?pg=contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer> */