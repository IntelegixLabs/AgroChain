import React from 'react'
import { Link, NavLink } from 'react-router-dom';
/*import { Link } from "react-router-dom";*/
import farmer from '../farmer.png'
import  './header.css'

const Header = ({ web3Handler, account }) => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo">
                    <a href="index.html" className="logo__text" style={{paddingTop: '25px'}}>
                        <h3>NetZero</h3>
                    </a>
                </div>

                <form action="#" className="header__search">
                    <input type="text" placeholder="Search items, collections, and creators" />
                    <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg></button>
                    <button type="button" className="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" /></svg></button>
                </form>

                <div className="header__menu">
                    <ul className="header__nav">

                        <li className="header__nav-item">
                            <a className="header__nav-link" href="/" role="button" id="dropdownMenuHome" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                        </li>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="/signin" role="button" id="dropdownMenuHome" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sign in</a>
                        </li>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="/signup" role="button" id="dropdownMenuHome" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sign Up</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="activity.html" className="header__nav-link">Activity</a>
                        </li>
                    </ul>
                </div>

                <div className="header__actions">
                    <div className="header__action header__action--search">
                        <button className="header__action-btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg></button>
                    </div>

                    <div className="header__action header__action--signin">
                        <a className="header__action-btn header__action-btn--signin" href="signin">
                            <span>Sign in</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z" /></svg>
                        </a>
                    </div>
                </div>

                <button className="header__btn" type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
        // <nav classNameName="navbar navbar-expand-lg navbar-effects sticky-top">
        //     <a classNameName="navbar-brand super-bold"><img src={farmer} height="40" width="50" /> AGRO CHAIN </a>
        //     <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <i classNameName="fa fa-bars fa-fw"></i>
        //     </button>

        //     <div classNameName="collapse navbar-collapse justify-content-end text-center" id="navbarSupportedContent">
        //         <ul classNameName="navbar-nav">
        //             {account && 
        //             <li classNameName="nav-item">
        //                 <NavLink classNameName={({ isActive }) => `nav-link ${isActive ? "active-route" : ""}`} to={`/profile`}>Profile</NavLink>
        //             </li>}
        //             <li classNameName="nav-item">
        //                 <NavLink classNameName={({ isActive }) => `nav-link ${isActive ? "active-route" : ""}`} to={`/nft`}> NFT</NavLink>
        //             </li>
        //          {!account &&
        //             <li classNameName="nav-item">
        //                 <NavLink classNameName={({ isActive }) => `nav-link ${isActive ? "active-route" : ""}`} to={`/signup`}>Register</NavLink>
        //             </li>}
        //             <li classNameName="nav-item">
        //                 <button classNameName="nav-btn btn btn-secondary btn-sm btn-block"><i classNameName="fa fa-sign-in-alt fa-fw"></i> Login</button>
        //             </li>
        //             <li classNameName="nav-item nav-item-btn mb-2">
        //                 {account ? (<button
        //                     classNameName="nav-btn btn btn-danger btn-sm btn-block"><a href={`https://rinkeby.etherscan.io/address/${account}`} target="_blank"
        //                         rel="noopener noreferrer" > {account.slice(0, 5) + '...' + account.slice(38, 42)}</a></button>) : (
        //                     <button onClick={web3Handler} classNameName="nav-btn btn btn-success btn-sm btn-block"><i classNameName="fa fa-user-plus fa-fw"></i> Sign Up</button>)}
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    )
}
;
export default Header